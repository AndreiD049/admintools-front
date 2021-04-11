import React, {
  useCallback, useContext, useMemo,
} from 'react';
import PropTypes from 'prop-types';
import {
  makeStyles,
  Persona,
  PersonaSize,
  Separator,
  Stack,
  StackItem,
  List,
  Text,
} from '@fluentui/react';
import { Transition } from 'react-transition-group';
import TaskItem from '../task-item';
import constants from '../../../../utils/constants';
import GlobalContext from '../../../../services/GlobalContext';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexFlow: 'column nowrap',
    alignContent: 'center',
    width: '350px',
    minWidth: '350px',
    minHeight: '400px',
    maxHeight: '600px',
    padding: '5px',
    overflow: 'auto',
    backgroundColor: theme.semanticColors.bodyBackground,
    border: `2px solid ${theme.palette.neutralLight}`,
    '& > * + *': {
      marginTop: '2px',
    },
    marginTop: theme.spacing.l1,
  },
  textHeader: {
    color: theme.palette.neutralSecondary,
    fontWeight: 'bold',
  },
}));

const defaultStyle = {
  transition: 'all 350ms ease-in-out',
  opacity: 0,
};

const transitionStyles = {
  entering: {
    opacity: 1,
  },
  entered: {
    opacity: 1,
  },
  exiting: {
    opacity: 0,
  },
  exited: {
    opacity: 0,
  },
};

const Task = ({
  task,
  setTasks,
  editable,
  showFinished,
  showCancelled,
  selectedId,
  handleStatusChange,
  overdue,
  disabled,
}) => {
  const handleIn = useCallback((status) => {
    if (status === constants.tasks.status.Finished && !showFinished) return false;
    if (status === constants.tasks.status.Cancelled && !showCancelled) return false;
    return true;
  }, [showFinished, showCancelled]);

  if (!task) return null;

  return (
    <Transition
      in={handleIn(task.status)}
      timeout={350}
      appear
      unmountOnExit
    >
      {(state) => (
        <div
          data-is-focusable
          data-selection-index={task.idx}
          data-selection-disabled={disabled}
          style={{
            ...defaultStyle,
            ...transitionStyles[state],
          }}
        >
          <TaskItem
            selected={selectedId === task.id}
            task={task}
            setTasks={setTasks}
            editable={editable}
            handleStatusChange={handleStatusChange}
            overdue={overdue}
            disabled={disabled}
          />
        </div>
      )}
    </Transition>
  );
};

const TaskContainer = ({
  tasks,
  overdue,
  setTasks,
  handleStatusChange,
  user,
  showFinished,
  showCancelled,
  selectedId,
}) => {
  const classes = useStyles();
  const global = useContext(GlobalContext);
  const items = useMemo(() => tasks
    .map((task) => ({
      key: task.id,
      data: task,
    })), [tasks]);
  const overdueItems = useMemo(() => overdue
    .map((task) => ({
      key: task.id,
      data: task,
    })), [overdue]);

  const [countOverdue, countCurrent] = useMemo(() => {
    const countItems = (col) => {
      const countFunc = (prev, itm) => {
        if (showFinished && showCancelled) return prev + 1;
        switch (itm.data.status) {
          case constants.tasks.status.Finished:
            return showFinished ? prev + 1 : prev;
          case constants.tasks.status.Cancelled:
            return showCancelled ? prev + 1 : prev;
          default:
            return prev + 1;
        }
      };
      return col.reduce(countFunc, 0);
    };
    return [countItems(overdueItems), countItems(items)];
  }, [overdueItems, items, showCancelled, showFinished]);

  return (
    <div className={classes.root}>
      <Stack horizontalAlign="stretch" verticalAlign="stretch">
        <StackItem align="center">
          <Persona size={PersonaSize.size32} text={user?.username} />
        </StackItem>
        <Separator />
        {/* Overdue */}
        {
          countOverdue > 0
            ? (
              <>
                <Text className={classes.textHeader} style={{ textAlign: 'center' }} variant="mediumPlus">Overdue</Text>
                <Separator />
                <List
                  // Nasty hack, add a null item to the front of the list to avoid
                  // last items not rendered if all of the first items are finished
                  // Virtualization issue
                  items={[{ key: 0, data: null }, ...overdueItems]}
                  onRenderCell={(item) => (item.data
                    ? (
                      <Task
                        task={item.data}
                        setTasks={setTasks}
                        handleStatusChange={handleStatusChange}
                        showFinished={showFinished}
                        showCancelled={showCancelled}
                        selectedId={selectedId}
                        editable={global.user.id === user.id}
                        overdue
                      />
                    )
                    : (<div style={{ height: 1 }} />))}
                />
              </>
            )
            : null
        }
        {/* Use Fluent UI Basic List for Virtualization */}
        {
          countOverdue > 0 && countCurrent > 0
            ? (
              <>
                <Separator />
                <Text className={classes.textHeader} style={{ textAlign: 'center' }} variant="mediumPlus">Current</Text>
                <Separator />
              </>
            )
            : null
        }
        <List
          items={[{ key: 0, data: null }, ...items]}
          // Nasty hack, add a null item to the front of the list to avoid
          // last items not rendered if all of the first items are finished
          // Virtualization issue
          onRenderCell={(item) => (item.data
            ? (
              <Task
                task={item.data}
                setTasks={setTasks}
                handleStatusChange={handleStatusChange}
                showFinished={showFinished}
                showCancelled={showCancelled}
                selectedId={selectedId}
                editable={global.user.id === user.id}
                disabled={countOverdue > 0}
              />
            )
            : (<div style={{ height: 1 }} />))}
        />
      </Stack>
    </div>
  );
};

// TASK Props Definition
Task.propTypes = {
  handleStatusChange: PropTypes.func.isRequired,
  task: PropTypes.shape({
    id: PropTypes.string,
    status: PropTypes.string,
    idx: PropTypes.number,
  }).isRequired,
  setTasks: PropTypes.func.isRequired,
  editable: PropTypes.bool.isRequired,
  showFinished: PropTypes.bool.isRequired,
  showCancelled: PropTypes.bool.isRequired,
  selectedId: PropTypes.string,
  overdue: PropTypes.bool,
  disabled: PropTypes.bool,
};

Task.defaultProps = {
  selectedId: null,
  overdue: false,
  disabled: false,
};

// TaskContainer Props Definition
TaskContainer.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string,
    id: PropTypes.string,
  }),
  handleStatusChange: PropTypes.func.isRequired,
  tasks: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  overdue: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  setTasks: PropTypes.func.isRequired,
  showFinished: PropTypes.bool.isRequired,
  showCancelled: PropTypes.bool.isRequired,
  selectedId: PropTypes.string,
};

TaskContainer.defaultProps = {
  selectedId: null,
  user: null,
};

export default TaskContainer;
