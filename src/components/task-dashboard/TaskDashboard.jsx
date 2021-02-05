import {
  CommandBar, PrimaryButton, Separator,
} from '@fluentui/react';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-grid-system';
import { useFetch } from '../../services/hooks';
import TaskService from '../../services/tasks/TaskService';
import PageHeader from '../shared/page-header';
import usePanel from '../ui-hooks/usePanel';
import AddTask from './components/add-task';
import CurrentDate from './components/current-date/CurrentDate';
import TaskContainer from './components/task-container/TaskContainer';
import WorkingHours from './components/working-hours/WorkingHours';

const TaskDashboard = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [hours, setHours] = useState({
    from: '09:00',
    to: '18:00',
  });
  const [options, setOptions] = useState({
    config: {
      params: {
        dateFrom: currentDate.toISOString(),
      },
    },
  });
  const [tasks, setTasks] = useFetch(TaskService.baseUrl, options);
  const newPanel = usePanel(
    ((setOpen) => <AddTask setTasks={setTasks} setOpen={setOpen} />), {
      headerText: 'Create new task',
      onRenderFooterContent: () => (
        <PrimaryButton text="Create" type="submit" form="create-task-form" />
      ),
    },
  );

  useEffect(() => {
    const hoursFrom = hours.from.split(':').map((h) => +h);
    const hoursTo = hours.to.split(':').map((h) => +h);
    setOptions((prev) => ({
      ...prev,
      config: {
        ...prev.config,
        params: {
          ...prev.config.params,
          dateFrom: new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            currentDate.getDate(),
            hoursFrom[0], hoursFrom[1], 0,
          ),
          dateTo: new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            hoursTo[0] < hoursFrom[0] ? currentDate.getDate() + 1 : currentDate.getDate(),
            hoursTo[0], hoursTo[1], 0,
          ),
        },
      },
    }));
  }, [currentDate, hours]);

  return (
    <>
      <Container lg>
        <PageHeader text="Daily tasks" />
        <Row>
          <Col xs={12}>
            <CurrentDate currentDate={currentDate} setCurrentDate={setCurrentDate} />
          </Col>
        </Row>
        <Row>
          <Col>
            <WorkingHours hours={hours} setHours={setHours} />
          </Col>
        </Row>
        <Separator />
        <Row>
          <Col>
            <CommandBar
              items={[
                {
                  key: 'new',
                  text: 'New',
                  iconProps: {
                    iconName: 'Add',
                  },
                  onClick: () => { newPanel.setOpen(true); },
                },
              ]}
            />
          </Col>
        </Row>
        <Separator />
        <Row>
          <Col xs={12}>
            <TaskContainer tasks={tasks} />
          </Col>
        </Row>
      </Container>
      {newPanel.render}
    </>
  );
};

export default TaskDashboard;
