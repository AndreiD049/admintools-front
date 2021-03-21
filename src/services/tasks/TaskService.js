import { DateTime } from 'luxon';
import axios from 'axios';
import NotificationService from '../NotificationService';

const TaskService = {
  baseUrl: '/api/tasks',
  taskPath: (id) => `/api/tasks/${id}`,
  taskStatusPath: (id) => `/api/tasks/${id}/status`,
  tasksCheckConflictsPath: '/api/tasks/check-busy',

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

  async getBusyTasks({ user }) {
    try {
      const response = await axios.get(this.tasksCheckConflictsPath, {
        params: { user },
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

  async updateTask(id, data) {
    try {
      const response = await axios.put(this.taskPath(id), data);
      if (response.status === 200) {
        return response.data;
      }
      throw new Error(`Server response: ${response.data} - ${response.statusText}`);
    } catch (err) {
      NotificationService.notifyError((err.response && err.response.data.error) || err.message);
      throw err;
    }
  },

  async updateTaskStatus(id, data) {
    try {
      const response = await axios.put(this.taskStatusPath(id), data);
      if (response.status === 200) {
        return response.data;
      }
      throw new Error(`Server response: ${response.data} - ${response.statusText}`);
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

  createTaskObject(task) {
    const copy = { ...task };
    const startRaw = DateTime
      .fromISO(task.expectedStartDate).toUTC();
    const endRaw = DateTime
      .fromISO(task.expectedFinishDate).toUTC();
    copy.expectedStartDate = DateTime.fromObject({
      year: startRaw.year,
      month: startRaw.month,
      day: startRaw.day,
      hour: startRaw.hour,
      minute: startRaw.minute,
      second: 0,
      zone: task.zone,
    }).toISO();
    copy.expectedFinishDate = DateTime.fromObject({
      year: endRaw.year,
      month: endRaw.month,
      day: endRaw.day,
      hour: endRaw.hour,
      minute: endRaw.minute,
      second: 0,
      zone: task.zone,
    }).toISO();
    return copy;
  },
};

export default TaskService;
