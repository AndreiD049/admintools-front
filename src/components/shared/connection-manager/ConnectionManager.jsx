import { useContext, useEffect } from 'react';
import ConnectionService from '../../../services/ConnectionService';
import GlobalContext from '../../../services/GlobalContext';

const ConnectionManager = () => {
  const global = useContext(GlobalContext);
  // ConnectionService.connectSSE();

  useEffect(() => {
    async function run() {
      if (global.user) {
        const con = await ConnectionService.connectSSE();
        con.addEventListener('init', (evt) => {
          global.setContext((prev) => ({
            ...prev,
            connectionId: JSON.parse(evt.data)[0],
            connection: con,
          }));
        });
      }
    }
    run();
  }, [global.user]);

  return null;
};

export default ConnectionManager;
