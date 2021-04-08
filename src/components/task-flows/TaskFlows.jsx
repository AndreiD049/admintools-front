import React, { useState } from 'react';
import { Col, Container, Row } from 'react-grid-system';
import {
  DetailsListLayoutMode,
  PanelType,
  SelectionMode,
  Separator,
} from '@fluentui/react';
import PageHeader from '../shared/page-header';
import CommandTable from '../shared/command-table/CommandTable';
import usePanel from '../ui-hooks/usePanel';
import AddFlow from './components/add-flow/AddFlow';
import { useFetch } from '../../services/hooks';
import TaskFlowService from '../../services/tasks/TaskFlowService';
import EditFlow from './components/edit-flow/EditFlow';

const TaskFlows = () => {
  const [flows, setFlows] = useFetch(TaskFlowService.baseUrl);
  const [selectionDetails, setSelectionDetails] = useState({
    count: 0,
    items: [],
    indices: [],
  });
  const addFlowPanel = usePanel(
    AddFlow,
    {
      id: 'add-flow-panel',
      headerText: 'Create new flow',
      isFooterAtBottom: true,
      type: PanelType.smallFixedFar,
      isLightDismiss: false,
      onDismiss: (isOpen, setOpen) => (ev) => {
        const panel = document.getElementById('add-flow-panel');
        if (panel) {
          if (panel.contains(ev.target)) {
            setOpen(false);
          }
        }
      },
    },
    { setFlows }
  );

  const editFlowPanel = usePanel(
    EditFlow,
    {
      id: 'edit-flow-panel',
      headerText: 'Update flow',
      isFooterAtBottom: true,
      type: PanelType.smallFixedFar,
      isLightDismiss: false,
    },
    { id: selectionDetails.items[0]?.id, setFlows }
  );

  const [columns] = useState([
    {
      key: 'color',
      name: ' Color',
      fieldName: 'color',
      isSortable: true,
      isFilterable: true,
      isResizable: false,
      maxWidth: 50,
      onRender: (item) => (
        <div
          style={{
            backgroundColor: item.color,
            width: 20,
            height: 20,
          }}
        />
      ),
    },
    {
      key: 'name',
      name: ' Name',
      fieldName: 'name',
      isSortable: true,
      isFilterable: true,
      isResizable: true,
      minWidth: 100,
      maxWidth: 300,
    },
    {
      key: 'status',
      name: ' Status',
      fieldName: 'isActive',
      isSortable: true,
      isFilterable: true,
      isResizable: true,
      onRender: (item) => (item.isActive ? 'Active' : 'Disabled'),
      filterValueAccessor: (item) => (item.isActive ? 'Active' : 'Disabled'),
      minWidth: 100,
      maxWidth: 150,
    },
    {
      key: 'teams',
      name: ' Teams',
      fieldName: 'teams',
      isSortable: true,
      isFilterable: true,
      isResizable: true,
      minWidth: 100,
      maxWidth: 300,
      onRender: (item) => item.teams.map((team) => team.name).join(', '),
    },
  ]);

  return (
    <Container md>
      <Row>
        <Col>
          <PageHeader text="Task Flows" />
        </Col>
      </Row>
      <Separator />
      <Row>
        <Col>
          <CommandTable
            commandItems={[
              {
                key: 'add',
                text: 'Add',
                iconProps: { iconName: 'Add' },
                onClick: () => addFlowPanel.setOpen(true),
              },
              {
                key: 'edit',
                text: 'Edit',
                iconProps: { iconName: 'Edit' },
                disabled: selectionDetails.items.length === 0,
                onClick: () => editFlowPanel.setOpen(true),
              },
            ]}
            tableProps={{
              items: flows,
              columns,
              selectionMode: SelectionMode.single,
              onItemInvoked: () => editFlowPanel.setOpen(true),
              layoutMode: DetailsListLayoutMode.justified,
              setSelectionDetails,
            }}
          />
        </Col>
      </Row>
      {addFlowPanel.render}
      {editFlowPanel.render}
    </Container>
  );
};

export default TaskFlows;
