import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Col, Container, Row } from 'react-grid-system';
import {
  Checkbox, CommandBar, SearchBox, Stack, Text,
} from '@fluentui/react';
import { makeStyles } from '@fluentui/react-theme-provider';
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

const SecurityDetailsUserDisplay = ({
  codes,
  users,
  userPermissions,
  setUserPermissions,
  selectedUser,
  setSelectedUser,
}) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState([]);
  const [filter, setFilter] = useState('');

  const handleExpandSingle = (e, item, isExpanded) => {
    if (isExpanded) {
      setExpanded((prev) => [...prev, item.code]);
    } else {
      setExpanded((prev) => prev.filter((err) => err !== item.code));
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

  const handleSetPermission = (user, code, permission) => {
    setUserPermissions((prev) => ({
      ...prev,
      [user.username]: {
        ...prev[user.username],
        [code.code]: permission,
      },
    }));
  };

  const handleAdd = async (user, code, grant) => {
    const result = await AuthorizationService.addPermission({
      grants: [grant],
      code: code.id,
      permissionType: 'User',
      reference: user.id,
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

  const handleClick = (user, code, grant) => async (e) => {
    e.persist();
    // check if it's a new permission
    if (!userPermissions[user.username] || !userPermissions[user.username][code.code]) {
      const result = await handleAdd(user, code, grant);
      result && handleSetPermission(user, code, result);
    } else if (e.target.checked) {
      // add a grant
      const grants = [...userPermissions[user.username][code.code].grants, grant];
      const result = await handleUpdate({ ...userPermissions[user.username][code.code], grants });
      result && handleSetPermission(user, code, result);
    } else if (!e.target.checked) {
      const grants = userPermissions[user.username][code.code].grants.filter((g) => g !== grant);
      if (grants.length === 0) {
        await handleDelete(userPermissions[user.username][code.code]);
        handleSetPermission(user, code, null);
      } else {
        const result = await handleUpdate({ ...userPermissions[user.username][code.code], grants });
        result && handleSetPermission(user, code, result);
      }
    }
  };

  const getPermissionChecked = (user, code, grant) => {
    const permission = userPermissions[user.username] && userPermissions[user.username][code.code];
    if (permission) {
      return permission.grants.indexOf(grant) !== -1;
    }
    return false;
  };

  const renderPermissions = () => {
    if (selectedUser) {
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
              <Checkbox
                label="overrule"
                checked={getPermissionChecked(selectedUser, item, 'overrule')}
                onChange={handleClick(selectedUser, item, 'overrule')}
              />
              {
                  item.grants.map((grant) => (
                    <Checkbox
                      label={grant}
                      checked={getPermissionChecked(selectedUser, item, grant)}
                      onChange={handleClick(selectedUser, item, grant)}
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
            options={users.map((u) => ({ key: u.id, data: u }))}
            getTextFromItem={(item) => item.data.username}
            selected={{ key: selectedUser.id, data: selectedUser }}
            onSelect={(item) => setSelectedUser(item.data)}
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

SecurityDetailsUserDisplay.propTypes = {
  codes: PropTypes.arrayOf(PropTypes.shape({
    code: PropTypes.string,
  })).isRequired,
  users: PropTypes.arrayOf(PropTypes.shape({
    username: PropTypes.string,
  })).isRequired,
  userPermissions: PropTypes.shape({}).isRequired,
  setUserPermissions: PropTypes.func.isRequired,
  selectedUser: PropTypes.shape({
    id: PropTypes.string,
    username: PropTypes.string,
  }).isRequired,
  setSelectedUser: PropTypes.func.isRequired,
};

export default SecurityDetailsUserDisplay;
