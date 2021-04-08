import axios from 'axios';
import NotificationService from '../NotificationService';

const TaskRuleService = {
  baseUrl: '/api/task-rules',
  taskRulePath: (id) => `/api/task-rules/${id}`,

  async getTaskRules(params = {}) {
    try {
      const response = await axios.get(this.baseUrl, {
        params,
      });
      if (response.status === 200) {
        return response.data;
      }
      throw new Error(
        `Server response: ${response.data} - ${response.statusText}`
      );
    } catch (err) {
      NotificationService.notifyError(
        (err.response && err.response.data.error) || err.message
      );
      throw err;
    }
  },

  async getTaskRule() {
    try {
      // pass
    } catch (err) {
      NotificationService.notifyError(
        (err.response && err.response.data.error) || err.message
      );
      throw err;
    }
  },

  async createTaskRule(data) {
    try {
      const response = await axios.post(this.baseUrl, data);
      if (response.status === 200) {
        return response.data;
      }
      throw new Error(
        `Server response: ${response.data} - ${response.statusText}`
      );
    } catch (err) {
      NotificationService.notifyError(
        (err.response && err.response.data.error) || err.message
      );
      throw err;
    }
  },

  async updateTaskRule(id, data) {
    try {
      const response = await axios.put(this.taskRulePath(id), data);
      if (response.status === 200) {
        return response.data;
      }
      throw new Error(
        `Server response: ${response.data} - ${response.statusText}`
      );
    } catch (err) {
      NotificationService.notifyError(
        (err.response && err.response.data.error) || err.message
      );
      throw err;
    }
  },

  async deleteTaskRule() {
    try {
      // pass
    } catch (err) {
      NotificationService.notifyError(
        (err.response && err.response.data.error) || err.message
      );
      throw err;
    }
  },
};

export default TaskRuleService;
