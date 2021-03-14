import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Col, Container, Row } from 'react-grid-system';
import {
  Checkbox,
  CommandBar, makeStyles, SearchBox, Stack, Text,
} from '@fluentui/react';
import AuthorizationService from '../../../../../../services/AuthorizationService';
import Accordion from '../../../../../shared/accordion/Accordion';
import SinglePicker from '../../../../../shared/single-picker/SinglePicker';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginTop: theme.spacing.m,
    },
  },
  autocomplete: {
    marginTop: theme.spacing.l2,
  },
  secondaryText: {
    color: theme.palette.neutralTertiary,
  },
  searchBox: {
    alignSelf: 'center',
    marginLeft: theme.spacing.m,
    minWidth: 200,
  },
}));

const SecurityDetailsRoleDisplay = ({
  codes,
  roles,
  rolePermissions,
  setRolePermissions,
  selectedRole,
  setSelectedRole,
}) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState([]);
  const [filter, setFilter] = useState('');

  const handleExpandSingle = (e, item, isExpanded) => {
    if (isExpanded) {
      setExpanded((prev) => [...prev, item.code]);
    } else {
      setExpanded((prev) => prev.filter((p) => p !== item.code));
    }
  };

  const handleExpandAll = () => {
    if (expanded.length === codes.length) {
      setExpanded([]);
    } else {
      setExpanded(codes.map((e) => e.code));
    }
  };

  const handleFilterInputChange = (e) => {
    if (e && e.target) {
      setFilter(e.target.value);
    }
  };

  const handleSetPermission = (role, code, permission) => {
    setRolePermissions((prev) => ({
      ...prev,
      [role.name]: {
        ...prev[role.name],
        [code.code]: permission,
      },
    }));
  };

  const handleAdd = async (role, code, grant) => {
    const result = await AuthorizationService.addPermission({
      grants: [grant],
      code: code.id,
      permissionType: 'Role',
      reference: role.id,
    });
    return result;
  };

  const handleUpdate = async (permission) => {
    const result = await AuthorizationService.updatePermission(permission.id, permission);
    return result;
  };

  const handleDelete = async (permission) => {
    try {
      const result = await AuthorizationService.deletePermission(permission.id);
      return result;
    } catch (err) {
      return null;
    }
  };

  const handleClick = (role, code, grant) => async (e) => {
    e.persist();
    // check if it's a new permission
    if (!rolePermissions[role.name] || !rolePermissions[role.name][code.code]) {
      const result = await handleAdd(role, code, grant);
      result && handleSetPermission(role, code, result);
    } else if (e.target.checked) {
      // add a grant
      const grants = [...rolePermissions[role.name][code.code].grants, grant];
      const result = await handleUpdate({ ...rolePermissions[role.name][code.code], grants });
      result && handleSetPermission(role, code, result);
    } else if (!e.target.checked) {
      const grants = rolePermissions[role.name][code.code].grants.filter((g) => g !== grant);
      if (grants.length === 0) {
        await handleDelete(rolePermissions[role.name][code.code]);
        handleSetPermission(role, code, null);
      } else {
        const result = await handleUpdate({ ...rolePermissions[role.name][code.code], grants });
        result && handleSetPermission(role, code, result);
      }
    }
  };

  const getPermissionChecked = (role, code, grant) => {
    const permission = rolePermissions[role.name] && rolePermissions[role.name][code.code];
    if (permission) {
      return permission.grants.indexOf(grant) !== -1;
    }
    return false;
  };

  const renderPermissions = () => {
    if (selectedRole) {
      const render = codes.filter((el) => (
        el.code.toLowerCase().indexOf(filter.toLowerCase()) !== -1));
      return (
        <Accordion
          items={render.map(
            (permission) => (
              {
                ...permission,
                text: permission.code,
                isOpen: expanded.indexOf(permission.code) !== -1,
              }),
          )}
          getKey={(code) => code.id}
          headerProps={{
            onRenderHeaderText: (item) => (
              <div>
                <Text variant="mediumPlus" block>{item.code}</Text>
                <Text variant="medium" className={classes.secondaryText}>{item.description}</Text>
              </div>
            ),
          }}
          onRenderItem={(item) => (
            <Stack
              verticalAlign="start"
              tokens={{
                childrenGap: 3,
              }}
            >
              {
                  item.grants.map((grant) => (
                    <Checkbox
                      key={`${item.id}-${grant}`}
                      label={grant}
                      checked={getPermissionChecked(selectedRole, item, grant)}
                      onChange={handleClick(selectedRole, item, grant)}
                    />
                  ))
                }
            </Stack>
          )}
          onToggle={handleExpandSingle}
        />
      );
    }
    return null;
  };

  return (
    <Container fluid className={classes.root}>
      <Row justify="center">
        <Col xs={12} md={4}>
          <SinglePicker
            className={classes.autocomplete}
            options={roles.map((r) => ({ key: r.id, data: r }))}
            getTextFromItem={(item) => item.data.name}
            selected={{ key: selectedRole.id, data: selectedRole }}
            onSelect={(item) => setSelectedRole(item.data)}
          />
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <CommandBar
            items={[
              {
                key: 'expandAll',
                text: `${expanded.length === codes.length ? 'Collapse' : 'Expand'} All`,
                iconProps: {
                  iconName: `${expanded.length === codes.length ? 'ChevronFold10' : 'ChevronUnfold10'}`,
                },
                onClick: handleExpandAll,
                buttonStyles: {
                  root: {
                    minWidth: '120px',
                  },
                },
              },
              {
                key: 'search',
                onRender: () => (
                  <SearchBox
                    className={classes.searchBox}
                    value={filter}
                    onChange={handleFilterInputChange}
                    onClear={() => setFilter('')}
                  />
                ),
              },
            ]}
            styles={{
              root: {
                paddingLeft: 0,
              },
            }}
          />
        </Col>
      </Row>
      <Row>
        { renderPermissions() }
      </Row>
    </Container>
  );
};

SecurityDetailsRoleDisplay.propTypes = {
  codes: PropTypes.arrayOf(PropTypes.shape({
    code: PropTypes.string,
  })).isRequired,
  roles: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
  })).isRequired,
  rolePermissions: PropTypes.shape({}).isRequired,
  setRolePermissions: PropTypes.func.isRequired,
  selectedRole: PropTypes.shape({
    username: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
  setSelectedRole: PropTypes.func.isRequired,
};

export default SecurityDetailsRoleDisplay;
