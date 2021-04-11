import React, { useContext, useMemo } from 'react';
import PropTypes from 'prop-types';
import { ComboBox } from '@fluentui/react';
import GlobalContext from '../../../services/GlobalContext';

const UserCombobox = ({
  users, selectedKey, setSelectedUsers, ...props
}) => {
  const global = useContext(GlobalContext);
  const options = useMemo(() => users.map((user) => ({
    key: user.id,
    text: user.username,
    data: user,
  })), [users]);

  const handleUserSelect = (ev, option) => {
    if (option.selected) {
      if (option.key === global.user.id) {
        setSelectedUsers((prev) => [option.key].concat(prev));
      } else {
        setSelectedUsers((prev) => prev.concat(option.key));
      }
    } else {
      setSelectedUsers((prev) => prev.filter((user) => user !== option.key));
    }
  };
  return (
    <ComboBox
      autoComplete="on"
      options={options}
      multiSelect
      selectedKey={selectedKey}
      onChange={handleUserSelect}
      calloutProps={{
        calloutMaxHeight: 500,
      }}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    />
  );
};

UserCombobox.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    username: PropTypes.string,
  })).isRequired,
  selectedKey: PropTypes.oneOf(PropTypes.string, PropTypes.arrayOf(PropTypes.string)).isRequired,
  setSelectedUsers: PropTypes.func.isRequired,
};

export default UserCombobox;
