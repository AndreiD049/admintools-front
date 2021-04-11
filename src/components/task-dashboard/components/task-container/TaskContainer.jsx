import React, { useContext, useMemo } from 'react';
import PropTypes from 'prop-types';
import {
  makeStyles,
  Persona,
  PersonaSize,
  Separator,
  Stack,
  StackItem,
  List,
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
}));

const defaultStyle = {
  transition: 'opacity 300ms ease-in-out',
  opacity: 0,
};

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

const Task = ({
  task, setTasks, editable, showFinished, showCancelled, selectedId, handleStatusChange,
}) => {
  const handleIn = (status) => {
    if (status === constants.tasks.status.Finished && !showFinished) return false;
    if (status === constants.tasks.status.Cancelled && !showCancelled) return false;
    return true;
  };

  return (
    <Transition
      key={task.id}
      in={handleIn(task.status)}
      timeout={300}
      unmountOnExit
    >
      {(state) => (
        <div
          data-is-focusable
          data-selection-index={task.idx}
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
          />
        </div>
      )}
    </Transition>
  );
};

const TaskContainer = ({
  tasks,
  setTasks,
  handleStatusChange,
  user,
  showFinished,
  showCancelled,
  selectedId,
}) => {
  const classes = useStyles();
  const global = useContext(GlobalContext);
  const items = useMemo(() => tasks.map((task) => ({
    key: task.id,
    data: task,
  })), [tasks]);

  return (
    <div className={classes.root}>
      <Stack horizontalAlign="stretch" verticalAlign="stretch">
        <StackItem align="center">
          <Persona size={PersonaSize.size32} text={user?.username} />
        </StackItem>
        <Separator />
        {/* Use Fluent UI Basic List for Virtualization */}
        <List
          items={items}
          onRenderCell={(item) => (
            <Task
              task={item.data}
              setTasks={setTasks}
              handleStatusChange={handleStatusChange}
              showFinished={showFinished}
              showCancelled={showCancelled}
              selectedId={selectedId}
              editable={global.user.id === user.id}
            />
          )}
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
};

Task.defaultProps = {
  selectedId: null,
};

// TaskContainer Props Definition
TaskContainer.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string,
    id: PropTypes.string,
  }),
  handleStatusChange: PropTypes.func.isRequired,
  tasks: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
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
