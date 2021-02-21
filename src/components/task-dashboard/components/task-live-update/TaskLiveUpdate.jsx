import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import GlobalContext from '../../../../services/GlobalContext';
import NotificationService from '../../../../services/NotificationService';
import constants from '../../../../utils/constants';

const TaskLiveUpdate = ({ setTasks }) => {
  const global = useContext(GlobalContext);

  const handleMessage = async (evt) => {
    const info = JSON.parse(evt.data);
    if (info) {
      if (info.action === constants.connections.actions.INSERT) {
        console.log('Insert');
      } else if (info.action === constants.connections.actions.UPDATE) {
        if (info.initiator !== global.user.id) {
          setTasks((prev) => prev.map((task) => (task.id === info.data.id ? info.data : task)));
        }
      }
    }
  };

  useEffect(() => {
    if (global.connection) {
      global.connection.addEventListener('message', handleMessage);
    }
    return () => {
      if (global.connection) {
        global.connection.removeEventListener('message', handleMessage);
      }
    };
  }, [global.connection]);

  return null;
};

TaskLiveUpdate.propTypes = {
  setTasks: PropTypes.func.isRequired,
};

export default TaskLiveUpdate;
