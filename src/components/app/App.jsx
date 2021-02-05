import {
  KeytipLayer, KeyCodes,
} from '@fluentui/react';
import DocumentTitle from 'react-document-title';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { ThemeProvider } from '@fluentui/react-theme-provider';
import React, { useState, useEffect, useContext } from 'react';
import GlobalContext from '../../services/GlobalContext';
import AuthorizationService from '../../services/AuthorizationService';
import UserInfoProvider from '../shared/user-info-provider';
import UserSecuritiesProvider from '../shared/user-securities-provider';
import Navigation from '../navigation/Navigation';
import AppraisalsPage from '../../routes/appraisals';
import HomePage from '../../routes/home';
import SettingsPage from '../../routes/settings';
import ReportingPage from '../../routes/reporting';
import LoginRequired from '../shared/login-required';
import LoginPage from '../../routes/login';
import { selectTheme } from '../../themes';
import NotificationContainer from '../notification/NotificationContainer';
import Tasks from '../../routes/tasks';

const App = () => {
  const [context, setContext] = useState({
    user: null,
    Authorize: AuthorizationService.Authorize,
    setContext: null,
    userPreferences: {
      theme: selectTheme(),
    },
  });
  const initContext = useContext(GlobalContext);

  const { userPreferences } = context;
  const { theme } = userPreferences;

  useEffect(() => {
    setContext((prev) => ({
      ...initContext,
      ...prev,
      setContext,
    }));
  }, [initContext]);

  return (
    <GlobalContext.Provider value={context}>
      <ThemeProvider applyTo="body" theme={theme}>
        <NotificationContainer timeout={10000} />
        <KeytipLayer
          keytipStartSequences={[{
            key: 'a',
            modifierKeys: [KeyCodes.alt],
          }]}
        />
        <Router>
          <UserInfoProvider ctx={context} setCtx={setContext} />
          <UserSecuritiesProvider />
          <Navigation />
          <LoginRequired />
          {/* The page switch */}
          <Switch>
            <div style={{ marginTop: '40px' }}>
              <Route path="/appraisals">
                <DocumentTitle title="Appraisals">
                  <AppraisalsPage ctx={context} setCtx={setContext} />
                </DocumentTitle>
              </Route>
              <Route path="/audits">
                <DocumentTitle title="Audits">
                  <h1>IN PROGRESS</h1>
                </DocumentTitle>
              </Route>
              <Route path="/reporting">
                <DocumentTitle title="Reporting">
                  <ReportingPage ctx={context} setCtx={setContext} />
                </DocumentTitle>
              </Route>
              <Route path="/settings">
                <DocumentTitle title="Settings">
                  <SettingsPage />
                </DocumentTitle>
              </Route>
              <Route path="/tasks">
                <DocumentTitle title="Tasks">
                  <Tasks />
                </DocumentTitle>
              </Route>
              <Route path="/login">
                <DocumentTitle title="Sign in">
                  <LoginPage ctx={context} setCtx={setContext} />
                </DocumentTitle>
              </Route>
              <Route exact path="/">
                <HomePage ctx={context} setCtx={setContext} />
              </Route>
            </div>
          </Switch>
        </Router>
      </ThemeProvider>
    </GlobalContext.Provider>
  );
};

export default App;
