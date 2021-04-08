import axios from 'axios';
import NotificationService from './NotificationService';

const TeamService = {
  baseUrl: '/api/teams',

  validate(team) {
    if (!team) throw new Error('Team name missing');
    return true;
  },

  async getTeams() {
    try {
      const response = await axios.get(this.baseUrl);
      if (response.status === 200) {
        return response.data;
      }
      throw new Error(
        `Server response: ${response.status} - ${response.statusText}`
      );
    } catch (err) {
      NotificationService.notifyError(
        (err.response.data && err.response.data.error) || err.message
      );
      throw err;
    }
  },

  async addTeam(team) {
    try {
      this.validate(team);
      const response = await axios.post(this.baseUrl, { team });
      if (response.status === 200) {
        return response.data;
      }
      throw new Error(
        `Server response: ${response.status} - ${response.statusText}`
      );
    } catch (err) {
      NotificationService.notifyError(
        (err.response.data && err.response.data.error) || err.message
      );
      throw err;
    }
  },
};

export default TeamService;
