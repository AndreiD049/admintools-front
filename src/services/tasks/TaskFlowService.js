import axios from 'axios';
import serviceRequestWrapper from '../../utils/serviceRequestWrapper';

const TaskFlowService = {
  baseUrl: '/api/task-flows',
  singleUrl: (id) => `/api/task-flows/${id}`,

  async getTaskFlow(id) {
    return serviceRequestWrapper(() => axios.get(this.singleUrl(id)));
  },

  async createTaskFlow(data) {
    return serviceRequestWrapper(() => axios.post(this.baseUrl, data));
  },

  async updateTaskFlow(id, data) {
    return serviceRequestWrapper(() => axios.put(this.singleUrl(id), data));
  },
};

export default TaskFlowService;
