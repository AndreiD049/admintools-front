import { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { DateTime } from 'luxon';
import GlobalContext from '../../../../services/GlobalContext';
import constants from '../../../../utils/constants';
import TaskService from '../../../../services/tasks/TaskService';

const TaskLiveUpdate = ({ setTasks, hours, setReload }) => {
  const global = useContext(GlobalContext);

  useEffect(() => {
    const handleMessage = async (evt) => {
      const info = JSON.parse(evt.data);
      if (info) {
        if (info.action === constants.connections.actions.INSERT) {
          const newTask = info.data;
          const expStart = DateTime.fromISO(newTask.expectedStartDate);
          const diff = expStart.diff(hours.from, 'minute').values.minutes;
          if (diff >= 0 && diff <= hours.duration) {
            setTasks((prev) => prev
              .filter((t) => t.id !== newTask.id)
              .concat(TaskService.createTaskObject(newTask)));
          }
        } else if (info.action === constants.connections.actions.UPDATE) {
          setTasks((prev) => prev.map((task) => (task.id === info.data.id
            ? TaskService.createTaskObject(info.data)
            : task)));
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
  }, [global.connection, hours.duration, hours.from, setReload, setTasks]);

  return null;
};

TaskLiveUpdate.propTypes = {
  setTasks: PropTypes.func.isRequired,
  hours: PropTypes.shape({
    from: PropTypes.instanceOf(DateTime),
    to: PropTypes.instanceOf(DateTime),
  }).isRequired,
  setReload: PropTypes.func.isRequired,
};

export default TaskLiveUpdate;
