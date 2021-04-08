import React, { useEffect, useState, useContext } from 'react';
import { Col, Container, Row } from 'react-grid-system';
import {
  DetailsListLayoutMode,
  SelectionMode,
  Separator,
} from '@fluentui/react';
import UserService from '../../services/UserService';
import TeamService from '../../services/TeamService';
import GlobalContext from '../../services/GlobalContext';
import AuthorizationService from '../../services/AuthorizationService';
import PageHeader from '../../components/shared/page-header';
import CommandTable from '../../components/shared/command-table/CommandTable';
import UserEditPanel from './components/user-edit-panel';

const SettingsUsers = () => {
  const [data, setData] = useState([]);
  const [teams, setTeams] = useState([]);
  const [roles, setRoles] = useState([]);
  const [editPanelOpen, setEditPanelOpen] = useState(false);
  const global = useContext(GlobalContext);
  const [selectionDetails, setSelectionDetails] = useState({
    count: 0,
    items: [],
    indices: [],
  });
  const [columns] = useState([
    {
      key: 'username',
      name: ' Username',
      fieldName: 'username',
      isSortable: true,
      isFilterable: true,
      isResizable: true,
      iconName: 'UserOptional',
      minWidth: 100,
      maxWidth: 300,
    },
    {
      key: 'teams',
      name: ' Teams',
      fieldName: 'teams',
      onRender: (item) => item.teams.map((t) => t.name).join(', '),
      isSortable: true,
      isFilterable: true,
      isResizable: true,
      sort: (a, b) => (a.teams[0].name > b.teams[0].name ? -1 : 1),
      filterValueAccessor: (i) => i.teams.map((t) => t.name).join(','),
      iconName: 'Teamwork',
      minWidth: 100,
      maxWidth: 500,
    },
    {
      key: 'organizations',
      name: ' Organizations',
      fieldName: 'organizations',
      onRender: (item) => item.organizations.map((o) => o.name).join(', '),
      isSortable: true,
      isFilterable: true,
      isResizable: true,
      sort: (a, b) =>
        a.organizations[0]?.name > b.organizations[0]?.name ? -1 : 1,
      filterValueAccessor: (i) => i.organizations.map((o) => o.name).join(','),
      iconName: 'Org',
      minWidth: 50,
      maxWidth: 200,
    },
    {
      key: 'role',
      name: ' Role',
      onRender: (item) => item.role && item.role?.name,
      isSortable: true,
      isFilterable: true,
      isResizable: true,
      sort: (a, b) => (a.role?.name > b.role?.name ? -1 : 1),
      filterValueAccessor: (i) => i.role && i.role?.name,
      iconName: 'Signin',
      isPadded: true,
    },
  ]);
  const [selectedColumn] = useState({
    key: 'role',
    name: ' Role',
    onRender: (item) => item.role && item.role?.name,
    isSortable: true,
    isFilterable: true,
    isResizable: true,
    sort: (a, b) => (a.role?.name > b.role?.name ? -1 : 1),
    filterValueAccessor: (i) => i.role && i.role?.name,
    iconName: 'Signin',
    isPadded: true,
    isSorted: true,
    isSortedDescending: false,
  });

  const handleUpdate = async (user) => {
    const idx = data.findIndex((u) => u.id === user.id);
    const copy = data.slice();
    if (idx !== -1) {
      let organization = user.organization || null;
      if (!user.organization && user.organizations.length) {
        organization = user.organizations[0].id;
      } else if (user.organizations.length === 0) {
        organization = null;
      }
      const result = await UserService.updateSettingsUser(user.id, {
        ...user,
        teams: user.teams.map((t) => t.id),
        team: user.team?.id || null,
        organizations: user.organizations.map((o) => o.id),
        organization,
      });
      if (result) copy[idx] = result;
      setData(copy);
    }
  };

  /**
   * Retrieve the users list
   */
  useEffect(() => {
    async function run() {
      const [users, _teams, _roles] = await Promise.all([
        UserService.getSettingsUsers(),
        TeamService.getTeams(),
        AuthorizationService.getRoles(),
      ]);
      setData(() => users);
      setTeams(() => _teams);
      setRoles(() => _roles);
    }
    run();
  }, []);

  return (
    <Container fluid>
      <Row justify="center">
        <PageHeader text="Users Settings" />
      </Row>
      <Separator />
      <Row align="start">
        <Col xs={12}>
          <CommandTable
            commandItems={[
              {
                key: 'details',
                text: 'Details',
                disabled: true,
                iconProps: { iconName: 'ProfileSearch' },
              },
              {
                key: 'editItem',
                text: 'Edit',
                disabled: selectionDetails.count === 0,
                iconProps: { iconName: 'Edit' },
                onClick: () => setEditPanelOpen(true),
              },
            ]}
            tableProps={{
              items: data,
              columns,
              selectionMode: SelectionMode.single,
              onItemInvoked: () => setEditPanelOpen(true),
              layoutMode: DetailsListLayoutMode.justified,
              sortedCol: selectedColumn,
              setSelectionDetails,
            }}
          />
        </Col>
      </Row>
      <UserEditPanel
        isOpen={editPanelOpen}
        handleEdit={handleUpdate}
        setOpen={setEditPanelOpen}
        user={selectionDetails.count ? selectionDetails.items[0] : null}
        teams={teams}
        organizations={global.user.organizations}
        roles={roles}
      />
    </Container>
  );
};

export default SettingsUsers;
