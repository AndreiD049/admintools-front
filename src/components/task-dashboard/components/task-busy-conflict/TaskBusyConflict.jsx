import React from 'react';
import PropTypes from 'prop-types';
import { Link, Separator, Text } from '@fluentui/react';
import { Link as RLink } from 'react-router-dom';

const TaskBusyConflict = ({ accept, setTasks, conflictTasks = [] }) => (
  <form>
    <Text block variant="medium">
      Following tasks are still busy:
    </Text>
    <Separator />
    {conflictTasks.map((ctask, idx) => (
      <RLink to={`/tasks/${ctask.id}`} target="_blank" component={Link}>
        <Text variant="medium">
          {idx + 1}
          .
          {ctask.title}
          {` (${new Date(ctask.actualStartDate).toLocaleString()})`}
        </Text>
      </RLink>
    ))}
    <Separator />
    <Text block variant="medium">
      If you continue, tasks will be paused.
    </Text>
  </form>
);
TaskBusyConflict.propTypes = {
  accept: PropTypes.func.isRequired,
  setTasks: PropTypes.func.isRequired,
  currentTask: PropTypes.shape({
    id: PropTypes.string,
  }).isRequired,
  conflictTasks: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default TaskBusyConflict;
