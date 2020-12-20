import React, { useEffect, useState, useContext } from 'react';
import UserService from '../../services/UserService';
import TeamService from '../../services/TeamService';
import GlobalContext from '../../services/GlobalContext';
import AuthorizationService from '../../services/AuthorizationService';
import TeamsEditComponent from './components/TeamsEditComponent';
import OrganizationEditComponent from './components/OrganizationEditComponent';
import RoleEditComponent from './components/RoleEditComponent';

const SettingsUsers = () => {
  const [data, setData] = useState([]);
  const [teams, setTeams] = useState([]);
  const [roles, setRoles] = useState([]);
  const global = useContext(GlobalContext);

  return (
    <h1>users</h1>
  );
};

export default SettingsUsers;
