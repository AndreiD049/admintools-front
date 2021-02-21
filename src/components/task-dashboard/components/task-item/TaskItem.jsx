import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@fluentui/react-theme-provider';
import {
  ActionButton, Separator, Text,
} from '@fluentui/react';
import TaskCollapsed from '../task-collapsed/TaskCollapsed';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '75px',
    position: 'relative',
    '& .task-new': {
      minHeight: 'inherit',
      border: '1px solid #87D7A1',
      borderLeft: '10px solid #87D7A1',
      '& .task-new-status': {
        backgroundColor: '#87D7A1',
      },
    },
    '& .task-inprogress': {
      minHeight: 'inherit',
      border: '1px solid #F4C884',
      borderLeft: '10px solid #F4C884',
      '& .task-inprogress-status': {
        backgroundColor: '#F4C884',
      },
    },
    '& .task-finished': {
      minHeight: 'inherit',
      border: '1px solid #C4C4C4',
      borderLeft: '10px solid #C4C4C4',
      '& .task-finished-status': {
        backgroundColor: '#C4C4C4',
      },
    },
    '& .task-cancelled': {
      minHeight: 'inherit',
      border: '1px solid #FF6B59',
      borderLeft: '10px solid #FF6B59',
      '& .task-cancelled-status': {
        backgroundColor: '#FF6B59',
      },
    },
    '& .task-paused': {
      minHeight: 'inherit',
      border: `1px solid ${theme.palette.neutralLight}`,
      borderLeft: `10px solid ${theme.palette.neutralLight}`,
      '& .task-paused-status': {
        backgroundColor: theme.palette.neutralLight,
      },
    },
  },
  status: {
    alignSelf: 'center',
    display: 'inline',
    minWidth: '80px',
    position: 'absolute',
    textAlign: 'center',
    color: theme.palette.neutralLighterAlt,
    padding: '2px 0',
  },
  collapse: {
    width: '100%',
    textAlign: 'center',
    cursor: 'pointer',
    outline: 'none',
    marginBottom: theme.spacing.s2,
  },
  chevron: {
    height: '100%',
  },
  chevronIcon: {
    color: `${theme.palette.black} !important`,
  },
  rows: {
    display: 'flex',
    flexFlow: 'column nowrap',
    flexGrow: '1',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 'inherit',
    maxWidth: '75%',
  },
  taskDescription: {
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'space-between',
    width: '100%',
    margin: '25px 0',
  },
  nowrap: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  prewrap: {
    whiteSpace: 'pre-wrap',
  },
  title: {
    paddingLeft: theme.spacing.s1,
  },
  description: {
    color: theme.palette.neutralSecondaryAlt,
    paddingLeft: theme.spacing.s1,
  },
  time: {
    paddingRight: theme.spacing.s1,
    lineHeight: '10px',
  },
  column: {
    display: 'flex',
    flexFlow: 'column nowrap',
  },
}));

const TaskItem = ({ task, setTasks, handleStatusChange }) => {
  const classes = useStyles();
  const [time, setTime] = useState({
    from: '00:00',
    to: '00:00',
  });
  const [collapsed, setCollapsed] = useState(true);

  useEffect(() => {
    if (task) {
      const startDate = new Date(task.expectedStartDate);
      const finishDate = new Date(task.expectedFinishDate);
      const [fromHours, fromMinutes, toHours, toMinutes] = [
        `0${startDate.getHours()}`.slice(-2),
        `0${startDate.getMinutes()}`.slice(-2),
        `0${finishDate.getHours()}`.slice(-2),
        `0${finishDate.getMinutes()}`.slice(-2),
      ];
      setTime(() => ({
        from: `${fromHours}:${fromMinutes}`,
        to: `${toHours}:${toMinutes}`,
      }));
    }
  }, [task]);

  return (
    <div className={classes.root}>
      <div className={clsx(`task-${task.status.toLowerCase()}`, classes.column)}>
        <span className={clsx([`task-${task.status.toLowerCase()}-status`, classes.status])}>
          {task.status}
        </span>
        <div style={{
          display: 'flex',
          flexFlow: 'row nowrap',
          justifyContent: 'space-between',
          minHeight: 'inherit',
          alignItems: 'center',
        }}
        >
          <div className={classes.rows}>
            <div className={classes.taskDescription}>
              <Text variant="medium" className={clsx([classes.title, collapsed && classes.nowrap])}>{task.title}</Text>
              <Text variant="smallPlus" className={clsx([classes.description, collapsed ? classes.nowrap : classes.prewrap])}>{task.description}</Text>
            </div>
          </div>
          <div className={classes.time}>
            <Text variant="smallPlus">{time.from}</Text>
            <Separator styles={{
              root: {
                padding: 0,
              },
            }}
            />
            <Text variant="smallPlus">{time.to}</Text>
          </div>
        </div>
        <TaskCollapsed
          task={task}
          setTasks={setTasks}
          collapsed={collapsed}
          setCollapsed={setCollapsed}
          handleStatusChange={handleStatusChange}
        />
        <div
          tabIndex="-1"
          role="button"
          onKeyDown={(evt) => evt.key === 'Enter' && setCollapsed((prev) => !prev)}
          className={clsx(classes.collapse)}
          onClick={() => setCollapsed((prev) => !prev)}
        >
          <ActionButton
            className={classes.chevron}
            iconProps={{
              iconName: collapsed ? 'ChevronDown' : 'ChevronUp',
              className: classes.chevronIcon,
            }}
          />
        </div>
      </div>
    </div>
  );
};

TaskItem.propTypes = {
  handleStatusChange: PropTypes.func.isRequired,
  task: PropTypes.shape({
    status: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    expectedStartDate: PropTypes.oneOf(PropTypes.string, PropTypes.instanceOf(Date)),
    expectedFinishDate: PropTypes.oneOf(PropTypes.string, PropTypes.instanceOf(Date)),
  }).isRequired,
  setTasks: PropTypes.func.isRequired,
};

export default TaskItem;