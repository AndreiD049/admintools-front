import React from 'react';
import PropTypes from 'prop-types';
import {
  makeStyles,
  Persona, PersonaSize, Separator, Stack, StackItem,
} from '@fluentui/react';
import TaskItem from '../task-item';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexFlow: 'column nowrap',
    alignContent: 'center',
    width: '300px',
    minWidth: '300px',
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
}) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Stack horizontalAlign="stretch" verticalAlign="stretch">
        <StackItem align="center">
          <Persona size={PersonaSize.size32} text={user?.username} />
        </StackItem>
        <Separator />
        {
          tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              setTasks={setTasks}
              handleStatusChange={handleStatusChange}
            />
          ))
        }
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
};

TaskContainer.defaultProps = {
  user: null,
};

export default TaskContainer;
