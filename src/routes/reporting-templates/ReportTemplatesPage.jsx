import React from 'react';
import { useRouteMatch, Switch, Route } from 'react-router-dom';
import ReportTemplates from '../../components/report-templates';

const ReportTemplatesPage = () => {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={path}>
        <ReportTemplates />
      </Route>
    </Switch>
  );
};

export default ReportTemplatesPage;
