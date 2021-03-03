import React from 'react';
import PropTypes from 'prop-types';
import { Link, Separator, Text } from '@fluentui/react';
import { Link as RLink } from 'react-router-dom';
import TaskService from '../../../../services/tasks/TaskService';
import constants from '../../../../utils/constants';

const TaskBusyConflict = ({
  accept, setTasks, conflictTasks = [],
}) => {
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const paused = conflictTasks.map(
        (ctask) => TaskService
          .updateTaskStatus(
            ctask.id,
            { status: constants.tasks.status.Paused },
          ),
      );
      // Update paused tasks
      (await Promise.all(paused)).map(
        (task) => setTasks((prev) => prev.map((t) => (t.id === task.result.id ? task.result : t))),
      );
    } finally {
      accept();
    }
  };

  return (
    <form id="task-busy-resolve" onSubmit={handleSubmit}>
      <Text block variant="medium">Following tasks are still busy:</Text>
      <Separator />
      { conflictTasks.map((ctask, idx) => (
        <RLink to={`/tasks/${ctask.id}`} target="_blank" component={Link}>
          <Text variant="medium">
            {idx + 1}
            .
            {' '}
            {ctask.title}
            {` (${new Date(ctask.actualStartDate).toLocaleString()})`}
          </Text>
        </RLink>
      )) }
      <Separator />
      <Text block variant="medium">If you continue, above tasks will be paused.</Text>
    </form>
  );
};

TaskBusyConflict.propTypes = {
  accept: PropTypes.func.isRequired,
  setTasks: PropTypes.func.isRequired,
  currentTask: PropTypes.shape({
    id: PropTypes.string,
  }).isRequired,
  conflictTasks: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default TaskBusyConflict;
