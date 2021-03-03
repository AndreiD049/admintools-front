import React, { useEffect, useState } from 'react';
import { makeStyles, useTheme } from '@fluentui/react-theme-provider';
import { Col, Container, Row } from 'react-grid-system';
import {
  DetailsListLayoutMode, PanelType, PrimaryButton, SelectionMode, Separator,
} from '@fluentui/react';
import PageHeader from '../shared/page-header';
import CommandTable from '../shared/command-table/CommandTable';
import TaskRuleService from '../../services/tasks/TaskRuleService';
import usePanel from '../ui-hooks/usePanel';
import AddRule from './components/add-rule/AddRule';
import { useFetch } from '../../services/hooks';
import RuleDetails from './components/rule-details/RuleDetails';

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const TaskRules = () => {
  const classes = useStyles();
  // TODO: later add options to retrieve only tasks of active teams
  const [rules, setRules] = useFetch(TaskRuleService.baseUrl);
  const [selectionDetails, setSelectionDetails] = useState({
    count: 0,
    items: [],
  });
  const newPanel = usePanel(
    AddRule, {
      headerText: 'Create new rule',
      onRenderFooterContent: () => (
        <PrimaryButton text="Create" type="submit" form="add-task-rule-form" />
      ),
    }, {
      setRules,
    },
  );
  const [editing, setEditing] = useState(false);

  const detailsPanel = usePanel(
    RuleDetails, {
      headerText: 'Rule Details',
      isLightDismiss: !editing,
      type: PanelType.medium,
      isFooterAtBottom: true,
      onDismiss: (_isOpen, setOpen) => () => {
        setEditing(false);
        setOpen(false);
      },
    }, {
      id: selectionDetails.items.length > 0 ? selectionDetails.items[0].id : null,
      editing,
      setEditing,
    },
  );

  const [sortedColumn] = useState(
    {
      key: 'createdDate',
      name: ' Created on',
      fieldName: 'createdDate',
      isSortable: true,
      isFilterable: true,
      isResizable: true,
      iconName: 'People',
      minWidth: 100,
      maxWidth: 300,
      isSorted: true,
      isSortedDescending: true,
    },
  );

  const [columns] = useState([
    {
      key: 'title',
      name: ' Title',
      fieldName: 'title',
      isSortable: true,
      isFilterable: true,
      isResizable: true,
      iconName: 'FileTemplate',
      minWidth: 100,
      maxWidth: 300,
    },
    {
      key: 'type',
      name: ' Type',
      fieldName: 'type',
      isSortable: true,
      isFilterable: true,
      isResizable: true,
      iconName: '',
      minWidth: 100,
      maxWidth: 300,
    },
    {
      key: 'users',
      name: ' Users',
      fieldName: 'users',
      isSortable: true,
      isFilterable: true,
      isResizable: true,
      iconName: 'People',
      minWidth: 300,
      maxWidth: 400,
      onRender: (item) => item.users.map((u) => u.username).join(', '),
      sort: (a, b) => (
        a.users[0].username.toLowerCase() < b.users[0].username.toLowerCase()
          ? -1
          : 1
      ),
      filterValueAccessor: (item) => item.users.map((u) => u.username).join(' '),
    },
    {
      key: 'createdDate',
      name: ' Created on',
      fieldName: 'createdDate',
      isSortable: true,
      isFilterable: true,
      isResizable: true,
      iconName: 'People',
      minWidth: 100,
      maxWidth: 300,
      onRender: (item) => (<div>{new Date(item.createdDate).toLocaleString()}</div>),
    },
  ]);

  return (
    <Container fluid>
      <PageHeader text="Rules" />
      <Separator />
      <Row>
        <Col xs={12}>
          <CommandTable
            commandItems={[
              {
                key: 'createItem',
                text: 'Create',
                iconProps: { iconName: 'BoxAdditionSolid' },
                onClick: () => { newPanel.setOpen(true); },
              },
            ]}
            tableProps={{
              items: rules,
              columns,
              setSelectionDetails,
              selectionMode: SelectionMode.single,
              onItemInvoked: () => detailsPanel.setOpen(true),
              layoutMode: DetailsListLayoutMode.justified,
              sortedCol: sortedColumn,
            }}
          />
        </Col>
      </Row>
      {newPanel.render}
      {detailsPanel.render}
    </Container>
  );
};

export default TaskRules;
