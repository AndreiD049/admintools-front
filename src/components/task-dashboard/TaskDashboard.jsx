import {
  ComboBox,
  CommandBar, DefaultButton, Icon, PrimaryButton, Separator, Stack,
} from '@fluentui/react';
import React, { useState, useContext, useEffect } from 'react';
import { Col, Container, Row } from 'react-grid-system';
import { makeStyles } from '@fluentui/react-theme-provider';
import { useFetch } from '../../services/hooks';
import DU from '../../utils/date';
import TaskService from '../../services/tasks/TaskService';
import PageHeader from '../shared/page-header';
import usePanel from '../ui-hooks/usePanel';
import AddTask from './components/add-task';
import CurrentDate from './components/current-date/CurrentDate';
import TaskContainer from './components/task-container/TaskContainer';
import WorkingHours from './components/working-hours/WorkingHours';
import GlobalContext from '../../services/GlobalContext';
import useDialog from '../ui-hooks/useDialog';
import constants from '../../utils/constants';
import TaskBusyConflict from './components/task-busy-conflict/TaskBusyConflict';
import UserService from '../../services/UserService';
import useLocalStorageState from '../ui-hooks/useLocalStorage';
import ConnectionService from '../../services/ConnectionService';
import TaskLiveUpdate from './components/task-live-update/TaskLiveUpdate';

const useStyles = makeStyles((theme) => ({
  searchIcon: {
    color: theme.palette.themePrimary,
    marginLeft: theme.spacing.s1,
    marginRight: theme.spacing.s1,
  },
}));

const TaskDashboard = () => {
  const classes = useStyles();
  const global = useContext(GlobalContext);
  const [users] = useFetch(UserService.teamUsersPath);
  const [userOptions, setUserOptions] = useState([]);
  const [selectedUsers, setSelectedUsers] = useLocalStorageState('DTSelectedUsers', [global.user.id]);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [hours, setHours] = useLocalStorageState('DTWorkingHours', {
    from: '09:00',
    to: '18:00',
  });
  const options = {
    params: {
      fromDate: DU.combineDateHours(currentDate, DU.getHoursFromText(hours.from)),
      toDate: DU.combineDateHours(currentDate, DU.getHoursFromText(hours.to)),
      users: selectedUsers,
    },
  };
  const [tasks, setTasks] = useFetch(
    TaskService.baseUrl,
    options,
    [],
    [currentDate, hours, selectedUsers],
  );
  const newPanel = usePanel(
    AddTask, {
      headerText: 'Create new task',
      onRenderFooterContent: () => (
        <PrimaryButton text="Create" type="submit" form="create-task-form" />
      ),
    }, {
      setTasks,
    },
  );
  const [dialogProps, setDialogProps] = useState({});
  const resolveBusyConflictDialog = useDialog(
    TaskBusyConflict,
    {
      isBlocking: true,
      title: 'Busy task found',
      dialogFooter: (_accept, cancel) => (
        <>
          <DefaultButton onClick={cancel}>Cancel</DefaultButton>
          <PrimaryButton style={{ marginLeft: '5px' }} form="task-busy-resolve" type="submit">Continue</PrimaryButton>
        </>
      ),
    }, dialogProps,
  );

  useEffect(() => {
    async function run() {
      if (global.connectionId) {
        await ConnectionService.subscribe({ to: selectedUsers, connectionId: global.connectionId });
      }
    }
    run();
  }, [selectedUsers, global.connectionId]);

  /**
   * Update user options
   */
  useEffect(() => {
    setUserOptions(users.map((user) => ({
      key: user.id,
      text: user.username,
      data: user,
    })));
  }, [users]);

  const handleUserSelect = (ev, option) => {
    if (option.selected) {
      setSelectedUsers((prev) => prev.concat(option.key));
    } else {
      setSelectedUsers((prev) => prev.filter((user) => user !== option.key));
    }
  };

  const handleStatusChange = async (task, status) => {
    if (status === constants.tasks.status.InProgress && !task.isBackgroundTask) {
      // If status to be updated is in progress:
      // 1. Check for conflicts first,
      const conflicts = await TaskService.getBusyTasks({ user: global.user.id });
      // if found, show the dialog
      if (conflicts.length > 0) {
        setDialogProps({
          setTasks,
          conflictTasks: conflicts,
        });
        const answer = await resolveBusyConflictDialog.show();
        if (answer === constants.dialogAnswers.No) return;
      }
    }
    const updated = await TaskService.updateTaskStatus(task.id, { status });
    setTasks((ts) => (ts.map((t) => (t.id === task.id ? updated.result : t))));
    // if task was unpaused, update it too
    if (updated.unpaused?.id) {
      setTasks((ts) => (ts.map((t) => (t.id === updated.unpaused.id ? updated.unpaused : t))));
    }
  };

  return (
    <>
      <TaskLiveUpdate setTasks={setTasks} />
      <Container lg>
        <PageHeader text="Daily tasks" />
        <Row>
          <Col xs={12}>
            <CurrentDate currentDate={currentDate} setCurrentDate={setCurrentDate} />
          </Col>
        </Row>
        <Row>
          <Col>
            <WorkingHours hours={hours} date={currentDate} setHours={setHours} />
          </Col>
        </Row>
        <Separator />
        <Row>
          <Col>
            <CommandBar
              items={[
                {
                  key: 'new',
                  text: 'New',
                  iconProps: {
                    iconName: 'Add',
                  },
                  onClick: () => { newPanel.setOpen(true); },
                },
                {
                  key: 'users',
                  text: 'Users',
                  iconProps: {
                    iconName: 'ProfileSearch',
                  },
                  onRender: (item) => (
                    <Stack horizontal horizontalAlign="center" verticalAlign="center">
                      <Icon className={classes.searchIcon} iconName="ProfileSearch" />
                      <ComboBox
                        autoComplete="on"
                        options={userOptions}
                        multiSelect
                        selectedKey={selectedUsers}
                        openOnKeyboardFocus
                        onChange={handleUserSelect}
                        calloutProps={{
                          calloutMaxHeight: 500,
                        }}
                      />
                    </Stack>
                  ),
                },
              ]}
            />
          </Col>
        </Row>
        <Separator />
        <Row justify="around">
          {
              selectedUsers.map((selUser) => (
                <TaskContainer
                  tasks={
                    tasks
                      .filter((task) => task
                        .assignedTo
                        .find((user) => user.id === selUser) !== undefined)
                      .sort((t1, t2) => (t1.expectedStartDate < t2.expectedStartDate ? -1 : 1))
                    }
                  user={users.find((u) => u.id === selUser)}
                  setTasks={setTasks}
                  handleStatusChange={handleStatusChange}
                />
              ))
            }
        </Row>
      </Container>
      {newPanel.render}
      {resolveBusyConflictDialog.render}
    </>
  );
};

export default TaskDashboard;
