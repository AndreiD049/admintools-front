import { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { DateTime } from 'luxon';
import GlobalContext from '../../../../services/GlobalContext';
import constants from '../../../../utils/constants';
import TaskService from '../../../../services/tasks/TaskService';
import ObjectUtils from '../../../../utils/object';

const TaskLiveUpdate = ({
  tasks, setTasks, hours, setReload,
}) => {
  const global = useContext(GlobalContext);

  useEffect(() => {
    const handleMessage = async (evt) => {
      const info = JSON.parse(evt.data);
      if (info) {
        if (info.action === constants.connections.actions.INSERT) {
          const newTask = info.data;
          // Task is already added, return early
          if (tasks.find((t) => newTask.id) !== undefined) return;
          const expStart = DateTime.fromISO(newTask.expectedStartDate);
          const diff = expStart.diff(hours.from, 'minute').values.minutes;
          if (diff >= 0 && diff <= hours.duration) {
            setTasks((prev) => prev
              .filter((t) => t.id !== newTask.id)
              .concat(TaskService.createTaskObject(newTask)));
          }
        } else if (info.action === constants.connections.actions.UPDATE) {
          const taskObj = TaskService.createTaskObject(info.data);
          // Give a small timeout to the update function, then compare the objects
          // If object already updated, do not update it once more
          if (info.initiator === global.user.id) {
            setTimeout(() => setTasks((prev) => {
              const found = prev.find((t) => t.id === info.data.id);
              if (ObjectUtils.deepEqual(found, taskObj)) return prev;
              return prev.map((task) => (task.id === info.data.id
                ? taskObj
                : task));
            }), 100);
          } else {
            setTasks((prev) => prev.map((task) => (task.id === taskObj.id ? taskObj : task)));
          }
        } else if (info.action === constants.connections.actions.RELOAD) {
        // Just reset the current date so backend is queried again
          setReload((prev) => !prev);
        }
      }
    };

    if (global.connection) {
      global.connection.addEventListener('message', handleMessage);
    }
    return () => {
      if (global.connection) {
        global.connection.removeEventListener('message', handleMessage);
      }
    };
  }, [global.connection, hours.duration, hours.from, setReload, setTasks, tasks]);

  return null;
};

TaskLiveUpdate.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
  })).isRequired,
  setTasks: PropTypes.func.isRequired,
  hours: PropTypes.shape({
    from: PropTypes.instanceOf(DateTime),
    to: PropTypes.instanceOf(DateTime),
  }).isRequired,
  setReload: PropTypes.func.isRequired,
};

export default TaskLiveUpdate;
