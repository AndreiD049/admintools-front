import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import Emitter from '../../components/shared/Emitter';

const ReportsPage = () => {
  const { path } = useRouteMatch();
  return (
    <>
      <button
        type="button"
        onClick={() => {
          Emitter.emit('notification-add', { title: 'Random' });
        }}
      >
        click
      </button>
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
