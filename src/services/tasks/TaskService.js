import axios from 'axios';
import NotificationService from '../NotificationService';

const TaskService = {
  baseUrl: '/api/tasks',
  taskPath: (id) => `/${id}`,

  async getTasks(params = {}) {
    try {
      const response = await axios.get(this.baseUrl, {
        params,
      });
      if (response.status === 200) {
        return response.data;
      }
      throw new Error(`Server response: ${response.data} - ${response.statusText}`);
    } catch (err) {
      NotificationService.notifyError((err.response && err.response.data.error) || err.message);
      throw err;
    }
  },

  async getTask() {
    try {
      // pass
    } catch (err) {
      NotificationService.notifyError((err.response && err.response.data.error) || err.message);
      throw err;
    }
  },

  async createTask(data) {
    try {
      const response = await axios.post(this.baseUrl, data);
      if (response.status === 200) {
        return response.data;
      }
      throw new Error(`Server response: ${response.data} - ${response.statusText}`);
    } catch (err) {
      NotificationService.notifyError((err.response && err.response.data.error) || err.message);
      throw err;
    }
  },

  async updateTask() {
    try {
      // pass
    } catch (err) {
      NotificationService.notifyError((err.response && err.response.data.error) || err.message);
      throw err;
    }
  },

  async deleteTask() {
    try {
      // pass
    } catch (err) {
      NotificationService.notifyError((err.response && err.response.data.error) || err.message);
      throw err;
    }
  },
};

export default TaskService;
