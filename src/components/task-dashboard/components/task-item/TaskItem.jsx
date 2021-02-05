import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@fluentui/react-theme-provider';
import { Separator, Text } from '@fluentui/react';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '75px',
    '& .task-new': {
      minHeight: 'inherit',
      border: '1px solid #87D7A1',
      borderLeft: '10px solid #87D7A1',
      '& .task-new-status': {
        backgroundColor: '#87D7A1',
      },
    },
  },
  status: {
    alignSelf: 'center',
    display: 'inline',
    minWidth: '45px',
    position: 'absolute',
    textAlign: 'center',
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
  },
  nowrap: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
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

const TaskItem = ({ task }) => {
  const classes = useStyles();
  const [time, setTime] = useState({
    from: '00:00',
    to: '00:00',
  });

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
              <Text variant="medium" className={clsx([classes.title, classes.nowrap])}>{task.title}</Text>
              <Text variant="smallPlus" className={clsx([classes.description, classes.nowrap])}>{task.description}</Text>
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
      </div>
    </div>
  );
};

TaskItem.propTypes = {
  task: PropTypes.string.isRequired,
};

export default TaskItem;
