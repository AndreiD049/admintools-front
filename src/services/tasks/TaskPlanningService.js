import axios from 'axios';
import serviceRequestWrapper from '../../utils/serviceRequestWrapper';

const TaskPlanningService = {
  baseUrl: '/api/task-planning',
  addFlowUrl: (planningId, flowId) =>
    `/api/task-planning/${planningId}/add-flow/${flowId}`,
  removeFlowUrl: (planningId, flowId) =>
    `/api/task-planning/${planningId}/remove-flow/${flowId}`,

  async createPlanning(date, user, flows) {
    return serviceRequestWrapper(() =>
      axios.post(this.baseUrl, {
        date,
        user,
        flows: flows.map((f) => f.id),
      })
    );
  },

  async addFlowToPlanning(planningId, flowId) {
    return serviceRequestWrapper(() =>
      axios.put(this.addFlowUrl(planningId, flowId))
    );
  },

  async removeFromFromPlanning(planningId, flowId) {
    return serviceRequestWrapper(() =>
      axios.delete(this.removeFlowUrl(planningId, flowId))
    );
  },
};

export default TaskPlanningService;
