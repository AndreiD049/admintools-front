/* eslint-disable no-param-reassign */
import React, { useState, useEffect, useContext } from 'react';
import {
  Switch, Route, useRouteMatch, useHistory,
} from 'react-router-dom';
import {
  Checkbox,
  CommandBar,
  SearchBox,
  SelectionMode,
  Separator,
  Stack,
  Text,
  useTheme,
} from '@fluentui/react';
import {
  Col, Container, Row, useScreenClass,
} from 'react-grid-system';
import { downloadBlob } from 'download.js';
import Table from '../../components/shared/table';
import AppraisalService from '../../services/AppraisalService';
import GlobalContext from '../../services/GlobalContext';
import AppraisalDetailsPage from '../appraisal-details';
import PageHeader from '../../components/shared/page-header';
import Chip from '../../components/shared/chip';
import PanelNew from '../../components/appraisal-list/panel-new/PanelNew';
import constants from '../../utils/constants';
import PanelEdit from '../../components/appraisal-list/panel-edit/PanelEdit';
import NotificationService from '../../services/NotificationService';
import ReportingService from '../../services/ReportingService';

const { APPRAISAL_PERIODS: AP, REPORTS: REP } = constants.securities;

const AppraisalsPage = () => {
  const theme = useTheme();
  const history = useHistory();
  const screenClass = useScreenClass();
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [showClosed, setShowClosed] = useState(true);
  const [newPanelOpen, setNewPanelOpen] = useState(false);
  const [editPanelOpen, setEditPanelOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const global = useContext(GlobalContext);
  const { path } = useRouteMatch();
  const [selectionDetails, setSelectionDetails] = useState({
    count: 0,
    items: [],
  });

  const [columns] = useState([
    {
      key: 'status',
      name: 'Status',
      fieldName: 'status',
      minWidth: 70,
      maxWidth: 70,
      isSortable: true,
      isFilterable: true,
      sort: (a, b) => (a.status > b.status ? -1 : 1),
      onRender: (item) => (
        <Chip
          style={{
            backgroundColor:
              item.status === 'Finished'
                ? theme.palette.blue
                : theme.palette.green,
            padding: '3px',
          }}
        >
          <Text
            variant="xSmall"
            style={{
              color: '#fff',
            }}
          >
            {item.status}
          </Text>
        </Chip>
      ),
    },
    {
      key: 'name',
      name: 'Name',
      fieldName: 'name',
      data: 'string',
      isResizable: true,
      isSortable: true,
      isFilterable: true,
      minWidth: 100,
      maxWidth: 350,
    },
    {
      key: 'createdUser',
      name: 'Created by',
      fieldName: 'createdUser',
      isPadded: true,
      isResizable: true,
      isSortable: true,
      isFilterable: true,
      filterValueAccessor: (i) => i.createdUser.username,
      sort: (a, b) => (a.createdUser.username < b.createdUser.username ? -1 : 1),
      data: 'string',
      minWidth: 200,
      maxWidth: 300,
      onRender: (item) => <div>{item.createdUser.username}</div>,
    },
    {
      key: 'createdDate',
      name: 'Created on',
      fieldName: 'createdDate',
      isResizable: true,
      isPadded: true,
      isSortable: true,
      data: 'date',
      minWidth: 200,
      maxWidth: 300,
      onRender: (item) => (
        <div>{new Date(item.createdDate).toLocaleString()}</div>
      ),
    },
  ]);
  const [sortedColumn, setSortedColumn] = useState(null);

  useEffect(() => {
    async function loadData() {
      const result = await AppraisalService.getPeriods();
      setItems(result);
    }
    loadData();
  }, []);

  useEffect(() => {
    setSortedColumn({
      ...columns[3],
      isSorted: true,
      isSortedDescending: true,
    });
  }, [columns]);

  useEffect(() => {
    setFilteredItems(
      showClosed ? items : items.filter((i) => i.status !== 'Finished'),
    );
  }, [showClosed, items]);

  const handleItemInvoked = (item) => {
    history.push(`${path}/${item.id}`);
  };

  const clickFinishHandler = async () => {
    if (selectionDetails.count) {
      const item = selectionDetails.items[0];
      const result = await AppraisalService.finishPeriod(item.id);
      if (result) {
        setItems((prev) => prev.map((i) => (i.id === item.id ? { ...item, status: 'Finished' } : i)));
        NotificationService.notifySuccess(`Period '${item.name}' finished`);
      }
    }
  };

  const handleCreate = async (name) => {
    if (
      global.user
      && global.user.id
      && global.user.organization
      && global.user.organization.id
    ) {
      const result = await AppraisalService.addPeriod({
        name,
        status: 'Active',
        organizationId: global.user.organization.id,
        createdUser: global.user.id,
      });
      setItems((prev) => prev.slice().concat(result));
      NotificationService.notifySuccess(`Period '${name}' created`);
    }
  };

  const handleEdit = async (id, name) => {
    if (
      global.user
      && global.user.id
      && global.user.organization
      && global.user.organization.id
      && global.Authorize(AP.code, AP.grants.update)
    ) {
      const result = await AppraisalService.updatePeriod(id, {
        name,
      });
      setItems((prev) => prev.map((i) => (i.id === result.id ? result : i)));
    }
  };

  const handleGenerateReport = async (id) => {
    try {
      const reportBlob = await ReportingService.generateAppraisalReport({
        periods: [id],
      });
      if (reportBlob) {
        downloadBlob('appraisal.xlsx', reportBlob);
        NotificationService.notifySuccess('Report generated');
      }
    } catch (err) {
      NotificationService.notifyError('Cannot generate report -', err.message);
    }
  };

  return (
    <>
      <Switch>
        <Route exact path={path}>
          <Container md>
            <Row>
              <Col xs={12}>
                <PageHeader text="Appraisals" />
              </Col>
            </Row>
            <Separator />
            <Row>
              <Col xs={12}>
                <Stack horizontalAlign="stretch">
                  <Row align="start">
                    <Col xs={12} sm={6}>
                      <CommandBar
                        items={[
                          {
                            key: 'openItem',
                            text: 'Open',
                            disabled:
                              selectionDetails.count === 0
                              || !global.Authorize(AP.code, AP.grants.read),
                            iconProps: {
                              iconName: 'OpenFile',
                            },
                            onClick: () => handleItemInvoked(
                              selectionDetails.count
                                  && selectionDetails.items[0],
                            ),
                          },
                          {
                            key: 'newItem',
                            text: 'New',
                            disabled: !global.Authorize(
                              AP.code,
                              AP.grants.create,
                            ),
                            iconProps: {
                              iconName: 'Add',
                            },
                            onClick: () => setNewPanelOpen(true),
                          },
                          {
                            key: 'editItem',
                            text: 'Edit',
                            disabled:
                              selectionDetails.count === 0
                              || !global.Authorize(AP.code, AP.grants.update),
                            iconProps: {
                              iconName: 'Edit',
                            },
                            onClick: () => setEditPanelOpen(true),
                          },
                          {
                            key: 'finishItem',
                            text: 'Finish',
                            disabled:
                              selectionDetails.count === 0
                              || (selectionDetails.count
                                && selectionDetails.items[0].status
                                  === 'Finished')
                              || !global.Authorize(AP.code, AP.grants.finish),
                            iconProps: {
                              iconName: 'SaveAndClose',
                            },
                            onClick: clickFinishHandler,
                          },
                          {
                            key: 'generateReport',
                            text: 'Appraisal report',
                            disabled:
                              selectionDetails.count === 0
                              || !global.Authorize(REP.code, REP.grants.read),
                            iconProps: {
                              iconName: 'MobileReport',
                            },
                            onClick: () => handleGenerateReport(
                              selectionDetails.count
                                ? selectionDetails.items[0].id
                                : null,
                            ),
                          },
                        ]}
                      />
                    </Col>
                    <Col xs={12} sm={6}>
                      <Stack
                        horizontalAlign={screenClass === 'xs' ? 'start' : 'end'}
                        horizontal
                      >
                        <Stack verticalAlign="center" horizontalAlign="start">
                          <SearchBox
                            placeholder="Search"
                            styles={{
                              root: {
                                minWidth: 250,
                              },
                            }}
                            value={searchValue}
                            onChange={(e, newVal) => setSearchValue(newVal)}
                          />
                          <Checkbox
                            label="Show closed"
                            checked={showClosed}
                            onChange={() => setShowClosed((prev) => !prev)}
                            styles={{
                              root: {
                                paddingTop: theme.spacing.s1,
                              },
                            }}
                          />
                        </Stack>
                      </Stack>
                    </Col>
                  </Row>
                  <Separator />
                  <Table
                    items={filteredItems}
                    columns={columns}
                    selectionMode={SelectionMode.single}
                    onItemInvoked={handleItemInvoked}
                    searchValue={searchValue}
                    sortedCol={sortedColumn}
                    setSelectionDetails={setSelectionDetails}
                  />
                  <PanelNew
                    isOpen={newPanelOpen}
                    setOpen={setNewPanelOpen}
                    handleCreate={handleCreate}
                  />
                  <PanelEdit
                    item={
                      selectionDetails.count ? selectionDetails.items[0] : null
                    }
                    isOpen={editPanelOpen}
                    setOpen={setEditPanelOpen}
                    handleEdit={handleEdit}
                  />
                </Stack>
              </Col>
            </Row>
          </Container>
        </Route>
        <Route exact path={`${path}/:id/user/:userId`}>
          <AppraisalDetailsPage ctx={global} setCtx={global.setContext} />
        </Route>
        <Route path={`${path}/:id`}>
          <AppraisalDetailsPage ctx={global} setCtx={global.setContext} />
        </Route>
      </Switch>
    </>
  );
};

export default AppraisalsPage;
