import { useEffect, useContext } from 'react';
import AuthorizationService from '../../../services/AuthorizationService';
import GlobalContext from '../../../services/GlobalContext';

const UserSecuritiesProvider = () => {
  const global = useContext(GlobalContext);

  useEffect(() => {
    async function run() {
      if (!global.security && global.user !== null) {
        const result = await AuthorizationService.getSecurities();
        if (result) {
          global.setContext((prev) => ({
            ...prev,
            security: result,
          }));
        }
      }
    }
    run();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [global.user, global.security, global.setContext]);

  return null;
};

export default UserSecuritiesProvider;
