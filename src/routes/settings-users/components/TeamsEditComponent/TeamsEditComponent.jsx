import React from 'react';
import PropTypes from 'prop-types';

const TeamsEditComponent = ({ rowData, onChange, teams }) => (
  <h1>test</h1>
);

TeamsEditComponent.propTypes = {
  rowData: PropTypes.shape({
    teams: PropTypes.arrayOf(PropTypes.shape({})),
  }).isRequired,
  onChange: PropTypes.func.isRequired,
  teams: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default TeamsEditComponent;
