import { useContext, useEffect, useMemo } from 'react';
import ConnectionService from '../../../services/ConnectionService';
import GlobalContext from '../../../services/GlobalContext';

const ConnectionManager = () => {
  const global = useContext(GlobalContext);
  const user = useMemo(() => global.user, [global.user]);
  const setGlobalContext = useMemo(() => global.setContext, [global.setContext]);

  useEffect(() => {
    async function run() {
      if (user) {
        const con = await ConnectionService.connectSSE();
        con.addEventListener('init', (evt) => {
          setGlobalContext((prev) => ({
            ...prev,
            connectionId: JSON.parse(evt.data)[0],
            connection: con,
          }));
        });
      }
    }
    run();
  }, [user, setGlobalContext]);

  return null;
};

export default ConnectionManager;
