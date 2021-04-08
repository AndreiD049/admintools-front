import React, { useState, useEffect } from 'react';
import { Pivot, PivotItem } from '@fluentui/react';
import { Container } from 'react-grid-system';
import SecurityInfoProvider from './components/security-info-provider';
import SecurityDetailsRoleDisplay from './components/security-details-role-display';
import SecurityDetailsUserDisplay from './components/security-details-user-display';
import PageHeader from '../../../shared/page-header';

const SecurityDetails = () => {
  const [permissionCodes, setPermissionCodes] = useState([]);
  const [roles, setRoles] = useState([]);
  const [users, setUsers] = useState([]);
  const [rolePermissions, setRolePermissions] = useState({});
  const [userPermissions, setUserPermissions] = useState({});
  const [selectedRole, setSelectedRole] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setSelectedRole((prev) => {
      if (prev === null && roles.length > 0) return roles[0];
      return prev;
    });
  }, [roles]);

  useEffect(() => {
    setSelectedUser((prev) => {
      if (prev === null && users.length > 0) return users[0];
      return prev;
    });
  }, [users]);

  return (
    <>
      <SecurityInfoProvider
        setLoaded={setLoaded}
        setPermissionCodes={setPermissionCodes}
        setRoles={setRoles}
        setUsers={setUsers}
        setRolePermissions={setRolePermissions}
        setUserPermissions={setUserPermissions}
      />
      <Container lg>
        <PageHeader text="Permissions" />
        {loaded ? (
          <Pivot
            aria-label="User and Roles permissions"
            styles={{
              root: {
                display: 'flex',
                flexFlow: 'row nowrap',
                justifyContent: 'center',
                alignItems: 'center',
              },
            }}
          >
            <PivotItem headerText="Roles" itemIcon="SecurityGroup">
              <SecurityDetailsRoleDisplay
                codes={permissionCodes}
                roles={roles}
                rolePermissions={rolePermissions}
                setRolePermissions={setRolePermissions}
                selectedRole={selectedRole}
                setSelectedRole={setSelectedRole}
              />
            </PivotItem>
            <PivotItem headerText="Users" itemIcon="Contact">
              <SecurityDetailsUserDisplay
                codes={permissionCodes}
                users={users}
                userPermissions={userPermissions}
                setUserPermissions={setUserPermissions}
                selectedUser={selectedUser}
                setSelectedUser={setSelectedUser}
              />
            </PivotItem>
          </Pivot>
        ) : null}
      </Container>
    </>
  );
};

export default SecurityDetails;
