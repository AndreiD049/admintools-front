import { Label, loadTheme } from '@fluentui/react';
import DocumentTitle from 'react-document-title';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { ThemeProvider } from '@fluentui/react-theme-provider';
import React, { useState, useEffect } from 'react';
import GlobalContext from '../../services/GlobalContext';
import AuthorizationService from '../../services/AuthorizationService';
import UserInfoProvider from '../shared/user-info-provider';
import UserSecuritiesProvider from '../shared/user-securities-provider';
import Navigation from '../navigation/Navigation';
import AppraisalsPage from '../../routes/appraisals';
import HomePage from '../../routes/home';
import SettingsPage from '../../routes/settings';
import ReportingPage from '../../routes/reporting';
import LoginPage from '../../routes/login';
import lightTheme from '../../themes/lightTheme';
import darkTheme from '../../themes/darkTheme';

const App = () => {
  const [context, setContext] = useState({
    user: null,
    Authorize: AuthorizationService.Authorize,
    setContext: null,
    userPreferences: {
      theme: localStorage.getItem('theme') === 'dark' ? darkTheme : lightTheme,
    },
  });

  const { userPreferences } = context;
  const { theme } = userPreferences;

  useEffect(() => {
    setContext((prev) => ({
      ...prev,
      setContext,
    }));
  }, []);

  return (
    <GlobalContext.Provider value={context}>
      <ThemeProvider applyTo="body" theme={theme}>
        <UserInfoProvider ctx={context} setCtx={setContext} />
        <UserSecuritiesProvider />
        <Router>
          <Navigation />
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
