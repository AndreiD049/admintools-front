import {
  DetailsListLayoutMode,
  Icon,
  SelectionMode,
  Separator,
} from '@fluentui/react';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Col, Container, Row } from 'react-grid-system';
import ReportingService from '../../services/ReportingService';
import CommandTable from '../shared/command-table/CommandTable';
import PageHeader from '../shared/page-header/PageHeader';
import CreateTemplatePanel from './components/create-panel';
import TemplateDetailsPanel from './components/details-panel';
import TemplateEditPanel from './components/edit-panel/TemplateEditPanel';

const ItemType = ({ item }) => {
  if (item.filename) {
    let iconName;
    const tokens = item.filename.split('.');
    const ext = tokens[tokens.length - 1];
    switch (ext) {
      case 'xlsx':
        iconName = 'ExcelLogo';
        break;
      case 'docx':
        iconName = 'WordLogo';
        break;
      default:
        iconName = 'FileBug';
        break;
    }

    return (
      <div style={{ textAlign: 'center' }}>
        <Icon styles={{ root: { fontSize: '1.3em' } }} iconName={iconName} />
      </div>
    );
  }
  return null;
};

const ReportTemplates = () => {
  const [templates, setTemplates] = useState([]);
  const [createPanelOpen, setCreatePanelOpen] = useState(false);
  const [detailsPanelOpen, setDetailsPanelOpen] = useState(false);
  const [editPanelOpen, setEditPanelOpen] = useState(false);
  const [selectionDetails, setSelectionDetails] = useState({
    count: 0,
    items: [],
  });
  const [columns] = useState([
    {
      key: 'type',
      name: ' Type',
      fieldName: 'name',
      iconName: 'ToDoLogoBottom',
      minWidth: 70,
      maxWidth: 70,
      onRender: (item) => <ItemType item={item} />,
    },
    {
      key: 'name',
      name: ' Name',
      fieldName: 'name',
      isSortable: true,
      isFilterable: true,
      iconName: 'FileTemplate',
      minWidth: 100,
      maxWidth: 300,
    },
    {
      key: 'filename',
      name: ' Filename',
      fieldName: 'filename',
      isSortable: true,
      isFilterable: true,
      iconName: 'FileBug',
      minWidth: 100,
      maxWidth: 200,
    },
    {
      key: 'createdby',
      name: ' Created by',
      isSortable: true,
      isFilterable: true,
      iconName: 'Contact',
      minWidth: 100,
      maxWidth: 300,
      sort: (a, b) =>
        a.createdUser.username < b.createdUser.username ? -1 : 1,
      onRender: (item) => item.createdUser.username,
    },
    {
      key: 'createdon',
      name: ' Created on',
      fieldName: 'createdDate',
      isSortable: true,
      isFilterable: true,
      iconName: 'DateTime',
      minWidth: 200,
      maxWidth: 300,
      onRender: (item) => new Date(item.createdDate).toLocaleString(),
    },
  ]);
  const [sortedColumn] = useState({
    key: 'createdon',
    name: ' Created on',
    fieldName: 'createdDate',
    isSorted: true,
    isSortedDescending: true,
    isSortable: true,
    isFilterable: true,
    iconName: 'DateTime',
    minWidth: 200,
    maxWidth: 300,
    onRender: (item) => new Date(item.createdDate).toLocaleString(),
  });

  useEffect(() => {
    let mounted = true;
    async function run() {
      const result = await ReportingService.getTemplates();
      if (mounted) {
        setTemplates(result);
      }
    }
    run();
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <Container fluid>
      <PageHeader text="Templates" />
      <Separator />
      <Row>
        <Col xs={12}>
          <CommandTable
            commandItems={[
              {
                key: 'createItem',
                text: 'Create',
                iconProps: { iconName: 'BoxAdditionSolid' },
                onClick: () => setCreatePanelOpen(true),
              },
              {
                key: 'details',
                text: 'Details',
                disabled: selectionDetails.count === 0,
                iconProps: { iconName: 'ProfileSearch' },
                onClick: () => setDetailsPanelOpen(true),
              },
              {
                key: 'editItem',
                text: 'Edit',
                disabled: selectionDetails.count === 0,
                iconProps: { iconName: 'Edit' },
                onClick: () => setEditPanelOpen(true),
              },
            ]}
            tableProps={{
              items: templates,
              columns,
              setSelectionDetails,
              selectionMode: SelectionMode.single,
              onItemInvoked: () => setDetailsPanelOpen(true),
              layoutMode: DetailsListLayoutMode.justified,
              sortedCol: sortedColumn,
            }}
          />
        </Col>
      </Row>
      <CreateTemplatePanel
        isOpen={createPanelOpen}
        setOpen={setCreatePanelOpen}
      />
      <TemplateDetailsPanel
        isOpen={detailsPanelOpen}
        setOpen={setDetailsPanelOpen}
        id={
          selectionDetails.items.length > 0 ? selectionDetails.items[0].id : ''
        }
        setEdit={setEditPanelOpen}
      />
      <TemplateEditPanel
        isOpen={editPanelOpen}
        setOpen={setEditPanelOpen}
        updateTemplates={(template) =>
          setTemplates((prev) =>
            prev.map((t) => (t.id === template.id ? template : t))
          )
        }
        id={
          selectionDetails.items.length > 0 ? selectionDetails.items[0].id : ''
        }
      />
    </Container>
  );
};

ItemType.propTypes = {
  item: PropTypes.string.isRequired,
};

export default ReportTemplates;
