import axios from 'axios';
import NotificationService from './NotificationService';

const ConnectionService = {
  baseUrl: '/stream',
  subscribePath: '/stream/subscribe',

  async connectSSE() {
    try {
      const es = new EventSource(this.baseUrl);
      return es;
    } catch (err) {
      return null;
    }
  },

  async subscribe(data) {
    try {
      const response = await axios.post(this.subscribePath, data);
      if (response.status === 200) {
        return response.data;
      }
      throw new Error(
        `Server response: ${response.status} - ${response.statusText}`,
      );
    } catch (err) {
      NotificationService.notifyError(
        (err.response.data && err.response.data.error) || err.message,
      );
      throw err;
    }
  },
};

export default ConnectionService;
