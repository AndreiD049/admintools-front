import React from 'react';
import PropTypes from 'prop-types';

const OrganizationEditComponent = ({ rowData, onChange, global }) => (
  <h1>Orgs</h1>
);

OrganizationEditComponent.propTypes = {
  rowData: PropTypes.shape({
    organizations: PropTypes.arrayOf(PropTypes.shape({})),
  }).isRequired,
  onChange: PropTypes.func.isRequired,
  global: PropTypes.shape({
    user: PropTypes.shape({
      organizations: PropTypes.arrayOf(PropTypes.shape({})),
    }),
  }).isRequired,
};

export default OrganizationEditComponent;
