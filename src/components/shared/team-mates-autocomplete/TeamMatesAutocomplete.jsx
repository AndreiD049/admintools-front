import React, { useState, useEffect } from 'react';
import UserService from '../../../services/UserService';
import SinglePicker from '../single-picker/SinglePicker';

const TeamMatesAutocomplete = ({ onUserSelect, defaultValue, className }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    let mounted = true;
    async function run() {
      const data = await UserService.getUserTeamMembers();
      if (mounted) setUsers(data);
    }
    run();
    return () => {
      mounted = false;
    };
  }, []);

  const handleSelect = (value) => {
    if (onUserSelect) { onUserSelect(value.data); }
  };

  const autocomplete = (
    <SinglePicker
      placeholder="Select or search for a user"
      options={users.map((u) => ({
        key: u.id,
        data: u,
      }))}
      getTextFromItem={(u) => u.data.username}
      onSelect={handleSelect}
      onRenderItem={() => null}
    />
  );

  return (
    autocomplete
  );
};

export default TeamMatesAutocomplete;
