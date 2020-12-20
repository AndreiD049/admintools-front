import React from 'react';
import { useRouteMatch, Switch, Route } from 'react-router-dom';
import DocumentTitle from 'react-document-title';
import SettingsGeneral from '../settings-general';
import SettingsUsers from '../settings-users';
import SettingsAppraisalPeriods from '../settings-app-periods';
import SettingsAppraisalItems from '../settings-app-items';
import SettingsRolesPage from '../settings-role-permissions';

/*
 * On the settings page the navigation will be done via a
 */
const SettingsPage = () => {
  const { path } = useRouteMatch();

  return (
    <>
      <h1>Settings</h1>
    </>
  );
};

export default SettingsPage;
