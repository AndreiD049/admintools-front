import React, { useContext, useState } from 'react';
import GlobalContext from '../../services/GlobalContext';

const SettingsGeneral = () => {
  const global = useContext(GlobalContext);
  const [theme, setTheme] = useState(global.userPreferences.theme.palette.type);

  return (
    <h1>Settings general</h1>
  );
};

export default SettingsGeneral;
