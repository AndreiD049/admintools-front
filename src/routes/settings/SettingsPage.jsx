import React from 'react';
import { useRouteMatch, Switch, Route } from 'react-router-dom';
import DocumentTitle from 'react-document-title';
import { Container } from 'react-grid-system';
import SettingsGeneral from '../settings-general';
import SettingsUsers from '../settings-users';
import SettingsAppraisalPeriods from '../settings-app-periods';
import SettingsAppraisalItems from '../settings-app-items';
import SettingsRolesPage from '../settings-role-permissions';
import AuthorizationRedirectComponent from '../../components/shared/authorization-redirect-component';

/*
 * On the settings page the navigation will be done via a
 */
const SettingsPage = () => {
  const { path } = useRouteMatch();

  return (
    <>
      <Container lg fluid>
        <Switch>
          <Route exact path={path}>
            <AuthorizationRedirectComponent
              code="SETTINGS"
              grant="general"
              to="/"
              failureNotification={{
                header: 'No Access',
                content:
                  'No permission to access this page. Please contact your administrator.',
              }}
            >
              <SettingsGeneral />
            </AuthorizationRedirectComponent>
          </Route>
          <Route path={`${path}/users`}>
            <AuthorizationRedirectComponent
              code="SETTINGS"
              grant="users"
              to="/"
              failureNotification={{
                header: 'No Access',
                content:
                  'No permission to access this page. Please contact your administrator.',
              }}
            >
              <DocumentTitle title="Users">
                <SettingsUsers />
              </DocumentTitle>
            </AuthorizationRedirectComponent>
          </Route>
          <Route path={`${path}/appraisal-periods`}>
            <AuthorizationRedirectComponent
              code="SETTINGS"
              grant="appraisal-periods"
              to="/"
              failureNotification={{
                header: 'No Access',
                content:
                  'No permission to access this page. Please contact your administrator.',
              }}
            >
              <DocumentTitle title="Settings - appraisal periods">
                <SettingsAppraisalPeriods />
              </DocumentTitle>
            </AuthorizationRedirectComponent>
          </Route>
          <Route path={`${path}/appraisal-items`}>
            <AuthorizationRedirectComponent
              code="SETTINGS"
              grant="appraisal-items"
              to="/"
              failureNotification={{
                header: 'No Access',
                content:
                  'No permission to access this page. Please contact your administrator.',
              }}
            >
              <DocumentTitle title="Settings - appraisal items">
                <SettingsAppraisalItems />
              </DocumentTitle>
            </AuthorizationRedirectComponent>
          </Route>
          <Route path={`${path}/permissions`}>
            <AuthorizationRedirectComponent
              code="SETTINGS"
              grant="permissions"
              to="/"
              failureNotification={{
                header: 'No Access',
                content:
                  'No permission to access this page. Please contact your administrator.',
              }}
            >
              <DocumentTitle title="Settings - Securities">
                <SettingsRolesPage />
              </DocumentTitle>
            </AuthorizationRedirectComponent>
          </Route>
        </Switch>
      </Container>
    </>
  );
};

export default SettingsPage;
