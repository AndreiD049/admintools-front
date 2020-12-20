import React from 'react';
import { useRouteMatch, Switch, Route } from 'react-router-dom';

const ReportTemplatesPage = () => {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={path}>
        <h1>Report</h1>
      </Route>
      <Route exact path={`${path}/new`}>
        <h1>Report</h1>
      </Route>
      <Route path={`${path}/:id`}>
        <h1>Report</h1>
      </Route>
    </Switch>
  );
};

export default ReportTemplatesPage;
