import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@fluentui/react-theme-provider';
import { Collapse } from 'react-collapse';
import {
  ButtonGrid, DefaultButton, Separator, Text,
} from '@fluentui/react';
import TaskService from '../../../../services/tasks/TaskService';
import TaskPersonas from '../task-personas/TaskPersonas';

const useStyles = makeStyles((theme) => ({
  root: {
    '& table': {
      margin: 'auto',
      borderCollapse: 'unset',
    },
  },
  statusText: {
    textAlign: 'center',
  },
}));

const TaskCollapsed = ({
  task, setTasks, collapsed, setCollapsed, handleStatusChange,
}) => {
  const classes = useStyles();

  const handleChange = (item) => async () => {
    await handleStatusChange(task, item.status);
    setCollapsed(true);
  };

  return (
    <div className={classes.root}>
      <Collapse isOpened={!collapsed}>
        <Separator />
        <TaskPersonas task={task} />
        <Separator>
          <Text variant="smallPlus">Status</Text>
        </Separator>
        <ButtonGrid
          columnCount={2}
          onRenderItem={(item) => (
            <DefaultButton
              onClick={handleChange(item)}
              disabled={item.disabled}
              style={{
                width: 115,
                margin: 3,
                fontSize: 8,
                height: 18,
              }}
            >
              <Text variant="small">{item.text}</Text>
            </DefaultButton>
          )}
          items={[
            {
              key: 'inprogress',
              text: 'In progress',
              status: 'InProgress',
              disabled: task.status === 'InProgress',
            },
            {
              key: 'paused',
              text: 'Paused',
              status: 'Paused',
              disabled: task.status !== 'InProgress',
            },
            {
              key: 'finished',
              text: 'Finished',
              status: 'Finished',
              disabled: task.status === 'Finished',
            },
            {
              key: 'cancelled',
              text: 'Cancelled',
              status: 'Cancelled',
              disabled: task.status === 'Cancelled',
            },
          ]}
        />
      </Collapse>
    </div>
  );
};

TaskCollapsed.propTypes = {
  handleStatusChange: PropTypes.func.isRequired,
  task: PropTypes.shape({
    id: PropTypes.string,
    status: PropTypes.string,
  }).isRequired,
  setTasks: PropTypes.func.isRequired,
  collapsed: PropTypes.bool.isRequired,
  setCollapsed: PropTypes.func.isRequired,
};

export default TaskCollapsed;
