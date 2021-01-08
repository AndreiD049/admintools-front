import React, { useState } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import { DetailsListLayoutMode, SelectionMode, Separator } from '@fluentui/react';
import ReportsInfoProvider from './components/reports-info-provider';
import PageHeader from '../shared/page-header/PageHeader';
import CommandTable from '../shared/command-table/CommandTable';

const ReportsList = () => {
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
                onClick: () => null,
              },
              {
                key: 'details',
                text: 'Details',
                disabled: selectionDetails.count === 0,
                iconProps: { iconName: 'ProfileSearch' },
                onClick: () => null,
              },
              {
                key: 'editItem',
                text: 'Edit',
                disabled: selectionDetails.count === 0,
                iconProps: { iconName: 'Edit' },
                onClick: () => null,
              },
            ]}
            tableProps={{
              items: reports,
              columns,
              setSelectionDetails,
              selectionMode: SelectionMode.single,
              onItemInvoked: () => null,
              layoutMode: DetailsListLayoutMode.justified,
              sortedCol: sortedColumn,
            }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default ReportsList;
