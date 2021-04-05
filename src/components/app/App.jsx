import {
  KeytipLayer, KeyCodes, ThemeProvider,
} from '@fluentui/react';
import DocumentTitle from 'react-document-title';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import React, {
  useState, useEffect, useContext, Suspense,
} from 'react';
import GlobalContext from '../../services/GlobalContext';
import AuthorizationService from '../../services/AuthorizationService';
import UserInfoProvider from '../shared/user-info-provider';
import UserSecuritiesProvider from '../shared/user-securities-provider';
import Navigation from '../navigation/Navigation';
import AppraisalsPage from '../../routes/appraisals';
import SettingsPage from '../../routes/settings';
import ReportingPage from '../../routes/reporting';
import LoginRequired from '../shared/login-required';
import LoginPage from '../../routes/login';
import { selectTheme } from '../../themes';
import NotificationContainer from '../notification/NotificationContainer';
import Tasks from '../../routes/tasks';
import ConnectionManager from '../shared/connection-manager/ConnectionManager';

const HomePage = React.lazy(() => import('../../routes/home'));

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
        <ConnectionManager />
        <NotificationContainer timeout={100000} />
        <Router>
          <UserInfoProvider ctx={context} setCtx={setContext} />
          <UserSecuritiesProvider />
          <Navigation />
          <LoginRequired />
          <KeytipLayer
            keytipStartSequences={[{
              key: 'a',
              modifierKeys: [KeyCodes.alt],
            }]}
          />
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
                <Suspense fallback={<div>Loading...</div>}>
                  <HomePage ctx={context} setCtx={setContext} />
                </Suspense>
              </Route>
            </div>
          </Switch>
        </Router>
      </ThemeProvider>
    </GlobalContext.Provider>
  );
};

export default App;
