import React, { useState } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import { DetailsListLayoutMode, SelectionMode, Separator } from '@fluentui/react';
import ReportsInfoProvider from './components/reports-info-provider';
import PageHeader from '../shared/page-header/PageHeader';
import CommandTable from '../shared/command-table/CommandTable';
import ReportsNewPanel from './components/reports-new-panel';
import ReportsDetailsPanel from './components/reports-details-panel/ReportsDetailsPanel';
import ReportsEditPanel from './components/reports-edit-panel';

const ReportsList = () => {
  const [newPanelOpen, setNewPanelOpen] = useState(false);
  const [detailsPanelOpen, setDetailsPanelOpen] = useState(false);
  const [editPanelOpen, setEditPanelOpen] = useState(false);
  const [reports, setReports] = useState([]);
  const [selectionDetails, setSelectionDetails] = useState({
    count: 0,
    items: [],
  });

  const [columns] = useState([
    {
      key: 'name',
      name: ' Name',
      fieldName: 'name',
      isSortable: true,
      isFilterable: true,
      isResizable: true,
      iconName: 'FileTemplate',
      minWidth: 100,
      maxWidth: 300,
    },
    {
      key: 'description',
      name: ' Description',
      fieldName: 'description',
      isSortable: true,
      isFilterable: true,
      isResizable: true,
      iconName: 'FileBug',
      minWidth: 200,
      maxWidth: 300,
    },
    {
      key: 'createdby',
      name: ' Created by',
      isSortable: true,
      isFilterable: true,
      isResizable: true,
      iconName: 'Contact',
      minWidth: 100,
      maxWidth: 300,
      sort: (a, b) => (a.createdUser.username < b.createdUser.username ? -1 : 1),
      onRender: (item) => item.createdUser.username,
    },
    {
      key: 'createdon',
      name: ' Created on',
      fieldName: 'createdDate',
      isSortable: true,
      isFilterable: true,
      isResizable: true,
      iconName: 'DateTime',
      minWidth: 200,
      maxWidth: 300,
      onRender: (item) => (new Date(item.createdDate).toLocaleString()),
    },
  ]);

  const [sortedColumn] = useState(
    {
      key: 'name',
      name: ' Name',
      fieldName: 'name',
      isSortable: true,
      isFilterable: true,
      isResizable: true,
      iconName: 'FileTemplate',
      minWidth: 100,
      maxWidth: 300,
      isSorted: true,
      isSortedDescending: false,
    },
  );

  return (
    <Container fluid>
      <ReportsInfoProvider setReports={setReports} />
      <PageHeader text="Reports" />
      <Separator />
      <Row>
        <Col xs={12}>
          <CommandTable
            commandItems={[
              {
                key: 'createItem',
                text: 'Create',
                iconProps: { iconName: 'BoxAdditionSolid' },
                onClick: () => setNewPanelOpen(true),
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
              items: reports,
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
      <ReportsNewPanel
        isOpen={newPanelOpen}
        setOpen={setNewPanelOpen}
        addReport={(report) => setReports((prev) => prev.concat(report))}
      />
      <ReportsDetailsPanel
        id={selectionDetails.count > 0 ? selectionDetails.items[0].id : null}
        isOpen={detailsPanelOpen}
        setOpen={setDetailsPanelOpen}
      />
      <ReportsEditPanel
        id={selectionDetails.count > 0 ? selectionDetails.items[0].id : null}
        isOpen={editPanelOpen}
        setOpen={setEditPanelOpen}
        setReport={
          (report) => setReports((prev) => prev.map((r) => (r.id === report.id ? report : r)))
        }
      />
    </Container>
  );
};

export default ReportsList;
