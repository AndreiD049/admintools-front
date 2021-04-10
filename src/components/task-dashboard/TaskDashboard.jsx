import {
  Checkbox,
  ComboBox,
  CommandBar,
  DefaultButton,
  Icon,
  makeStyles,
  PrimaryButton,
  SelectionMode,
  Separator,
  Stack,
  Selection,
  SelectionZone,
} from '@fluentui/react';
import React, {
  useState, useContext, useEffect, useMemo,
} from 'react';
import {
  Col, Container, Row, useScreenClass,
} from 'react-grid-system';
import { DateTime } from 'luxon';
import { useFetch } from '../../services/hooks';
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
  marginRight: {
    marginRight: theme.spacing.l1,
  },
}));

const TaskDashboard = () => {
  const sc = useScreenClass();
  const classes = useStyles();
  const global = useContext(GlobalContext);
  const [users] = useFetch(UserService.teamUsersPath);
  const [userOptions, setUserOptions] = useState([]);
  const [reload, setReload] = useState(true);
  const [
    selectedUsers,
    setSelectedUsers,
  ] = useLocalStorageState('DTSelectedUsers', [global.user.id]);
  const [hours, setHours] = useLocalStorageState(
    'DTWorkingHours',
    {
      from: DateTime.now().setZone('utc', { keepLocalTime: true }).set({
        hour: 9,
        minute: 0,
        second: 0,
        millisecond: 0,
      }),
      duration: 540,
    },
    (h) => {
      const from = DateTime.fromISO(h?.from).toUTC();
      return (
        h && {
          from: DateTime.now().setZone('utc', { keepLocalTime: true }).set({
            hour: from.hour,
            minute: from.minute,
            second: 0,
            millisecond: 0,
          }),
          duration: h?.duration,
        }
      );
    },
  );

  const [showFinsihed, setShowFinished] = useLocalStorageState(
    'DTShowFinished',
    false,
  );
  const [showCancelled, setShowCancelled] = useLocalStorageState(
    'DTShowCancelled',
    false,
  );

  const taskParams = useMemo(() => ({
    params: {
      fromDate: hours.from.toJSDate(),
      toDate: hours.from.plus({ minute: hours.duration }).toJSDate(),
      users: selectedUsers,
    },
  }), [hours, selectedUsers]);

  const taskOptions = useMemo(() => ({
    dependencies: [hours, selectedUsers, reload],
    callback: (data) => data.map((task, idx) => TaskService.createTaskObject(task)),
    resetDataOnChange: false,
  }), [hours, selectedUsers, reload]);

  const [tasks, setTasks] = useFetch(TaskService.baseUrl, taskParams, taskOptions);
  const tasksWithIdx = useMemo(() => tasks.map((task, idx) => ({ ...task, idx })), [tasks]);
  // Selection data
  const [selectedKey, setSelectedKey] = useState(null);
  const selection = useMemo(() => new Selection({
    selectionMode: SelectionMode.single,
    items: tasks.map((t) => ({
      key: t.id,
      data: t,
    }), [tasks]),
    onSelectionChanged: () => {
      const sel = selection.getSelection();
      if (sel.length > 0) {
        setSelectedKey(sel[0].key);
      }
    },
  }), [tasks]);

  const handleTaskAdd = (task) => {
    const expectedStart = DateTime.fromISO(task.expectedStartDate);
    if (expectedStart >= hours.from && expectedStart <= hours.to) {
      setTasks((prev) => prev
        .filter((t) => t.id !== task.id)
        .concat(TaskService.createTaskObject(task)));
    }
  };

  const newPanel = usePanel(
    AddTask,
    {
      headerText: 'Create new task',
      onRenderFooterContent: () => (
        <PrimaryButton text="Create" type="submit" form="create-task-form" />
      ),
    },
    {
      handleAdd: handleTaskAdd,
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
          <PrimaryButton
            style={{ marginLeft: '5px' }}
            form="task-busy-resolve"
            type="submit"
          >
            Continue
          </PrimaryButton>
        </>
      ),
    },
    dialogProps,
  );

  useEffect(() => {
    async function run() {
      if (global.connectionId) {
        await ConnectionService.subscribe({
          to: selectedUsers,
          connectionId: global.connectionId,
        });
      }
    }
    run();
  }, [selectedUsers, global.connectionId]);

  /**
   * Update user options
   */
  useEffect(() => {
    setUserOptions(
      users.map((user) => ({
        key: user.id,
        text: user.username,
        data: user,
      })),
    );
  }, [users]);

  const handleUserSelect = (ev, option) => {
    if (option.selected) {
      if (option.key === global.user.id) {
        setSelectedUsers((prev) => [option.key].concat(prev));
      } else {
        setSelectedUsers((prev) => prev.concat(option.key));
      }
    } else {
      setSelectedUsers((prev) => prev.filter((user) => user !== option.key));
    }
  };

  const handleStatusChange = async (task, status) => {
    if (
      status === constants.tasks.status.InProgress
      && !task.isBackgroundTask
    ) {
      // If status to be updated is in progress:
      // 1. Check for conflicts first,
      const conflicts = await TaskService.getBusyTasks({
        user: global.user.id,
      });
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
    // if task was unpaused, update it too
    if (updated.unpaused?.id) {
      setTasks((ts) => ts.map((t) => (t.id === updated.unpaused.id
        ? TaskService.createTaskObject(updated.unpaused)
        : t)));
    }
    setTasks((ts) => ts
      .map(
        (t) => (t.id === task.id ? TaskService.createTaskObject(updated.result) : t),
      ));
  };

  return (
    <>
      <TaskLiveUpdate setTasks={setTasks} hours={hours} setReload={setReload} />
      <Container lg>
        <PageHeader text="Daily tasks" />
        <Row>
          <Col xs={12}>
            <CurrentDate currentDate={hours.from} setCurrentDate={setHours} />
          </Col>
        </Row>
        <Row>
          <Col>
            <WorkingHours hours={hours} setHours={setHours} />
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
                  onClick: () => {
                    newPanel.setOpen(true);
                  },
                },
              ]}
              farItems={[
                {
                  key: 'users',
                  text: 'Users',
                  iconProps: {
                    iconName: 'ProfileSearch',
                  },
                  onRender: () => (
                    <Stack
                      horizontal
                      horizontalAlign="center"
                      verticalAlign="center"
                      className={classes.marginRight}
                    >
                      <Icon
                        className={classes.searchIcon}
                        iconName="ProfileSearch"
                      />
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
                {
                  key: 'showFinished',
                  iconProps: {
                    iconName: 'RedEye',
                  },
                  onRender: () => (
                    <Stack
                      tokens={{ childrenGap: 4 }}
                      horizontalAlign="start"
                      verticalAlign="center"
                    >
                      <Checkbox
                        label={['xs', 'sm'].indexOf(sc) !== -1 ? 'F' : 'Show Finished'}
                        checked={showFinsihed}
                        onChange={(ev, checked) => setShowFinished(checked)}
                      />
                      <Checkbox
                        label={['xs', 'sm'].indexOf(sc) !== -1 ? 'C' : 'Show Cancelled'}
                        checked={showCancelled}
                        onChange={(ev, checked) => setShowCancelled(checked)}
                      />
                    </Stack>
                  ),
                },
              ]}
            />
          </Col>
        </Row>
        <Separator />
        <SelectionZone selection={selection}>
          <Row justify="around">
            {selectedUsers.map((selUser) => (
              <TaskContainer
                key={selUser}
                tasks={tasksWithIdx
                  .filter(
                    (task) => task.assignedTo.find((user) => user.id === selUser)
                    !== undefined,
                  )
                  .sort((t1, t2) => (t1.expectedStartDate < t2.expectedStartDate ? -1 : 1))}
                user={users.find((u) => u.id === selUser)}
                setTasks={setTasks}
                handleStatusChange={handleStatusChange}
                showFinished={showFinsihed}
                showCancelled={showCancelled}
                selectedId={selectedKey}
              />
            ))}
          </Row>
        </SelectionZone>
      </Container>
      {newPanel.render}
      {resolveBusyConflictDialog.render}
    </>
  );
};

export default TaskDashboard;
