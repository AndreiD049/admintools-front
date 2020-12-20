import React from 'react';
import PropTypes from 'prop-types';
import { useRouteMatch, Switch, Route } from 'react-router-dom';
import DocumentTitle from 'react-document-title';
import ReportsPage from '../reporting-reports';
import ReportingTemplatesPage from '../reporting-templates';

const ReportingPage = ({ ctx, setCtx }) => {
  const { path } = useRouteMatch();
  return (
    <>
      <h1>ReportingPage</h1>
    </>
  );
};

ReportingPage.propTypes = {
  ctx: PropTypes.shape({
    user: PropTypes.shape({
      username: PropTypes.string,
    }),
  }).isRequired,
  setCtx: PropTypes.func.isRequired,
};

export default ReportingPage;
