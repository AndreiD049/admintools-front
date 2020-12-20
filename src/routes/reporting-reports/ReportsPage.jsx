import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

const ReportsPage = () => {
  const { path } = useRouteMatch();
  return (
    <>
      <Switch>
        <Route exact path={path}>
          <h1>Report</h1>
        </Route>
        <Route exact path={`${path}/new`}>
          <h1>Report</h1>
        </Route>
        <Route exact path={`${path}/:id`}>
          <h1>Report</h1>
        </Route>
      </Switch>
    </>
  );
};

export default ReportsPage;
