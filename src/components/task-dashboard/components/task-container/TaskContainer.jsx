import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@fluentui/react-theme-provider';
import TaskItem from '../task-item';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexFlow: 'column nowrap',
    alignContent: 'center',
    maxWidth: '300px',
    minHeight: '400px',
    padding: '5px',
    border: '2px solid rgba(255, 255, 255, .1)',
    '& > * + *': {
      marginTop: '2px',
    },
  },
}));

const TaskContainer = ({ tasks }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {
        tasks.map((task) => (
          <TaskItem task={task} />
        ))
      }
    </div>
  );
};

TaskContainer.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default TaskContainer;
