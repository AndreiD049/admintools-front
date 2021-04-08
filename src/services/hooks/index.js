/* eslint-disable import/prefer-default-export */
import { useEffect, useState } from 'react';
import useFetch from './useFetch';
import TaskService from '../tasks/TaskService';

const useTasks = (params) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function run() {
      const result = await TaskService.getTasks(params);
      setTasks(result);
    }
    run();
  }, [params]);

  return [tasks, setTasks];
};

export { useTasks, useFetch };
