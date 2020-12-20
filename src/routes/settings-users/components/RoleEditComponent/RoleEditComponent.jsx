import React from 'react';
import PropTypes from 'prop-types';

const RoleEditComponent = ({ rowData, onChange, roles }) => (
  <h1>test</h1>
);

RoleEditComponent.propTypes = {
  rowData: PropTypes.shape({
    role: PropTypes.shape({
      name: PropTypes.string,
    }),
  }).isRequired,
  onChange: PropTypes.func.isRequired,
  roles: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default RoleEditComponent;
