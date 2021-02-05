import React from 'react';
import PropTypes from 'prop-types';
import { useRouteMatch, Switch, Route } from 'react-router-dom';
import DocumentTitle from 'react-document-title';
import { Container } from 'react-grid-system';
import ReportsPage from '../reporting-reports';
import ReportingTemplatesPage from '../reporting-templates';
import AuthorizationRedirectComponent from '../../components/shared/authorization-redirect-component';
import AppraisalReport from '../../components/appraisal-report/AppraisalReport';

const ReportingPage = () => {
  const { path } = useRouteMatch();
  return (
    <Container lg>
      <Switch>
        <Route path={`${path}/reports`}>
          <AuthorizationRedirectComponent
            code="REPORTS"
            grant="read"
            to="/"
            failureNotification={{
              header: 'No Access',
              content: 'No permission to access this page. Please contact your administrator.',
            }}
          >
            <ReportsPage />
          </AuthorizationRedirectComponent>
        </Route>
        <Route path={`${path}/templates`}>
          <AuthorizationRedirectComponent
            code="REPORT-TEMPLATES"
            grant="read"
            to="/"
            failureNotification={{
              header: 'No Access',
              content: 'No permission to access this page. Please contact your administrator.',
            }}
          >
            <DocumentTitle title="Reporting Templates">
              <ReportingTemplatesPage />
            </DocumentTitle>
          </AuthorizationRedirectComponent>
        </Route>
        <Route path={`${path}/appraisal-report`}>
          <AuthorizationRedirectComponent
            code="REPORTS"
            grant="read"
            to="/"
            failureNotification={{
              header: 'No Access',
              content: 'No permission to access this page. Please contact your administrator.',
            }}
          >
            <DocumentTitle title="Appraisal Report">
              <AppraisalReport />
            </DocumentTitle>
          </AuthorizationRedirectComponent>
        </Route>
      </Switch>
    </Container>
  );
};

ReportingPage.propTypes = {
  ctx: PropTypes.shape({
    user: PropTypes.shape({
      username: PropTypes.string,
    }),
  }).isRequired,
};

export default ReportingPage;
