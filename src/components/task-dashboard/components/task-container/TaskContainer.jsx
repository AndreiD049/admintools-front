import React from 'react';
import PropTypes from 'prop-types';
import {
  makeStyles,
  Persona,
  PersonaSize,
  Separator,
  Stack,
  StackItem,
} from '@fluentui/react';
import { Transition } from 'react-transition-group';
import TaskItem from '../task-item';
import constants from '../../../../utils/constants';

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

const TaskContainer = ({
  tasks,
  setTasks,
  handleStatusChange,
  user,
  showFinished,
  showCancelled,
}) => {
  const classes = useStyles();
  const handleIn = (status) => {
    if (status === constants.tasks.status.Finished && !showFinished) return false;
    if (status === constants.tasks.status.Cancelled && !showCancelled) return false;
    return true;
  };

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

  return (
    <div className={classes.root}>
      <Stack horizontalAlign="stretch" verticalAlign="stretch">
        <StackItem align="center">
          <Persona size={PersonaSize.size32} text={user?.username} />
        </StackItem>
        <Separator />
        {tasks.map((task) => (
          <Transition
            key={task.id}
            in={handleIn(task.status)}
            timeout={300}
            unmountOnExit
          >
            {(state) => (
              <div
                style={{
                  ...defaultStyle,
                  ...transitionStyles[state],
                }}
              >
                <TaskItem
                  task={task}
                  setTasks={setTasks}
                  handleStatusChange={handleStatusChange}
                />
              </div>
            )}
          </Transition>
        ))}
      </Stack>
    </div>
  );
};

TaskContainer.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string,
  }),
  handleStatusChange: PropTypes.func.isRequired,
  tasks: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  setTasks: PropTypes.func.isRequired,
  showFinished: PropTypes.bool.isRequired,
  showCancelled: PropTypes.bool.isRequired,
};

TaskContainer.defaultProps = {
  user: null,
};

export default TaskContainer;
