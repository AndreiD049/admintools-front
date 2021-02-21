import React from 'react';
import DocumentTitle from 'react-document-title';
import { Container } from 'react-grid-system';
import { useRouteMatch, Switch, Route } from 'react-router-dom';
import AuthorizationRedirectComponent from '../../components/shared/authorization-redirect-component';
import TaskDashboard from '../../components/task-dashboard/TaskDashboard';
import TaskRules from '../../components/task-rules';
import constants from '../../utils/constants';

const Tasks = () => {
  const { path } = useRouteMatch();

  return (
    <Container fluid>
      <Switch>
        <Route exact path={`${path}`}>
          <AuthorizationRedirectComponent
            code={constants.securities.TASK.code}
            grant={constants.securities.TASK.grants.read}
            to="/"
            failureNotification={{
              header: 'No Access',
              content: 'No permission to access this page. Please contact your administrator.',
            }}
          >
            <DocumentTitle title="Task Dashboard">
              <TaskDashboard />
            </DocumentTitle>
          </AuthorizationRedirectComponent>
        </Route>
        <Route path={`${path}/planning`}>
          <AuthorizationRedirectComponent
            code={constants.securities.TASK_RULE.code}
            grant={constants.securities.TASK_RULE.grants.read}
            to="/"
            failureNotification={{
              header: 'No Access',
              content: 'No permission to access this page. Please contact your administrator.',
            }}
          >
            <DocumentTitle title="Planning">
              <h1>Task Planning</h1>
            </DocumentTitle>
          </AuthorizationRedirectComponent>
        </Route>
        <Route path={`${path}/task-rules`}>
          <AuthorizationRedirectComponent
            code={constants.securities.TASK_RULE.code}
            grant={constants.securities.TASK_RULE.grants.read}
            to="/"
            failureNotification={{
              header: 'No Access',
              content: 'No permission to access this page. Please contact your administrator.',
            }}
          >
            <DocumentTitle title="Planning">
              <TaskRules />
            </DocumentTitle>
          </AuthorizationRedirectComponent>
        </Route>
        <Route path={`${path}/task-flows`}>
          <AuthorizationRedirectComponent
            code={constants.securities.TASK_FLOW.code}
            grant={constants.securities.TASK_FLOW.grants.read}
            to="/"
            failureNotification={{
              header: 'No Access',
              content: 'No permission to access this page. Please contact your administrator.',
            }}
          >
            <DocumentTitle title="Planning">
              <h1>Task Flows</h1>
            </DocumentTitle>
          </AuthorizationRedirectComponent>
        </Route>
        <Route exact path={`${path}/:id`}>
          <AuthorizationRedirectComponent
            code={constants.securities.TASK.code}
            grant={constants.securities.TASK.grants.read}
            to="/"
            failureNotification={{
              header: 'No Access',
              content: 'No permission to access this page. Please contact your administrator.',
            }}
          >
            <DocumentTitle title="Task">
              <div>Task</div>
            </DocumentTitle>
          </AuthorizationRedirectComponent>
        </Route>
      </Switch>
    </Container>
  );
};

export default Tasks;
