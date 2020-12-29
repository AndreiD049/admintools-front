import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  ComboBox,
  DefaultButton, Panel, PanelType, PrimaryButton, Stack, TextField,
} from '@fluentui/react';

const UserEditPanel = ({
  isOpen, user, setOpen, handleEdit, teams, organizations, roles,
}) => {
  const [selTeams, setSelTeams] = useState([]);
  const [selOrganizations, setSelOrganizations] = useState([]);
  const [selRole, setSelRole] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleEdit({
      ...user,
      teams: selTeams,
      organizations: selOrganizations,
      role: selRole,
    }).finally(() => {
      setOpen(false);
    });
  };

  const handleSelect = (item, setFunc) => {
    setFunc((prev) => prev.concat(item));
  };

  const handleDeselect = (item, setFunc) => {
    setFunc((prev) => prev.filter((i) => i.id !== item.id));
  };

  const handleMultiCombobox = (setFunc) => (evt, item) => {
    if (item.selected) {
      handleSelect(item.data, setFunc);
    } else {
      handleDeselect(item.data, setFunc);
    }
  };

  const handleCombobox = (setFunc) => (evt, item) => {
    setFunc(item.data);
  };

  useEffect(() => {
    if (user) {
      setSelTeams(user.teams);
      setSelOrganizations(user.organizations);
      if (user.role) {
        setSelRole(user.role);
      }
    }
  }, [user]);

  return (
    <>
      <Panel
        isOpen={isOpen}
        onDismiss={() => setOpen(false)}
        type={PanelType.smallFixedFar}
        headerText="Edit user"
      >
        <form onSubmit={handleSubmit}>
          <Stack verticalAlign="start">
            <Stack.Item tokens={{
              margin: '10px 0',
            }}
            >
              <ComboBox
                label="Teams"
                multiSelect
                id="user-edit-select-team"
                useComboBoxAsMenuWidth
                selectedKey={selTeams.map((t) => t.id)}
                onChange={handleMultiCombobox(setSelTeams)}
                options={teams.map((t) => ({
                  key: t.id,
                  text: t.name,
                  data: t,
                }))}
              />
              <ComboBox
                label="Organizations"
                multiSelect
                id="user-edit-select-organizations"
                useComboBoxAsMenuWidth
                selectedKey={selOrganizations.map((o) => o.id)}
                onChange={handleMultiCombobox(setSelOrganizations)}
                options={organizations.map((t) => ({
                  key: t.id,
                  text: t.name,
                  data: t,
                }))}
              />
              <ComboBox
                label="Role"
                id="user-edit-select-role"
                useComboBoxAsMenuWidth
                selectedKey={selRole && selRole.id}
                onChange={handleCombobox(setSelRole)}
                options={roles.map((r) => ({
                  key: r.id,
                  text: r.name,
                  data: r,
                }))}
              />
            </Stack.Item>
            <Stack horizontal horizontalAlign="space-evenly">
              <PrimaryButton type="submit">Update</PrimaryButton>
              <DefaultButton onClick={() => setOpen(false)}>Cancel</DefaultButton>
            </Stack>
          </Stack>
        </form>
      </Panel>
    </>
  );
};

UserEditPanel.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    teams: PropTypes.arrayOf(PropTypes.shape({})),
    organizations: PropTypes.arrayOf(PropTypes.shape({})),
    role: PropTypes.shape({}),
  }),
  setOpen: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
  teams: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  })),
  organizations: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  })),
  roles: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  })),
};

UserEditPanel.defaultProps = {
  user: null,
  teams: [],
  organizations: [],
  roles: [],
};

export default UserEditPanel;
