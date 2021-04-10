import React, {
  useEffect, useRef, useState,
} from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  ActionButton,
  makeStyles,
  Separator,
  Text,
  TooltipHost,
} from '@fluentui/react';
import { DateTime } from 'luxon';
import TaskCollapsed from '../task-collapsed/TaskCollapsed';
import { ReactComponent as ExpiredIcon } from './assets/expired.svg';
import { ReactComponent as PausedIcon } from './assets/paused.svg';
import constants from '../../../../utils/constants';

const { status } = constants.tasks;

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
      border: '1px solid #66aee8',
      borderLeft: '10px solid #66aee8',
      '& .task-paused-status': {
        backgroundColor: '#66aee8',
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
  icons: {
    paddingLeft: theme.spacing.s1,
    paddingBottom: theme.spacing.s1,
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  icon_expired: {
    '& #expired_clock_border': {
      fill: theme.palette.themePrimary,
    },
    '& #expired_warning': {
      fill: theme.palette.orange,
    },
  },
  icon_paused: {
    marginLeft: theme.spacing.s2,
    '& .main': {
      fill: theme.palette.themePrimary,
    },
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

const TaskItem = ({ task, handleStatusChange }) => {
  const classes = useStyles();
  const [time, setTime] = useState({
    from: '',
    to: '',
  });
  const [icons, setIcons] = useState({
    paused: false,
    expired: false,
  });
  const [collapsed, setCollapsed] = useState(true);
  const timerRef = useRef(null);

  const setIcon = (icon, state) => setIcons((prev) => ({
    ...prev,
    [icon]: state,
  }));

  // Register task timer, perform checks every minute
  useEffect(() => {
    const performChecks = () => {
      const expectedFinishDate = DateTime.fromISO(task.expectedFinishDate);
      // check paused
      if (task.status === status.Paused && !icons.paused) {
        setIcon('paused', true);
      } else if (task.status !== status.Paused && icons.paused) {
        setIcon('paused', false);
      }
      // Check expired
      if (task.status !== status.Finished && task.status !== status.Cancelled) {
        if (!icons.expired && expectedFinishDate < DateTime.utc()) {
          setIcon('expired', true);
        }
      } else if (icons.expired) {
        setIcon('expired', false);
      }
    };

    performChecks();
    timerRef.current = setInterval(performChecks, 30000);
    return () => {
      clearInterval(timerRef.current);
    };
  }, [task, icons.expired, icons.paused]);

  useEffect(() => {
    if (task) {
      const startDate = DateTime.fromISO(task.expectedStartDate);
      const finishDate = DateTime.fromISO(task.expectedFinishDate);
      setTime(() => ({
        from: startDate.toFormat('HH:mm'),
        to: finishDate.toFormat('HH:mm'),
      }));
    }
  }, [task]);

  return (
    <div className={classes.root}>
      <div
        className={clsx(`task-${task.status.toLowerCase()}`, classes.column)}
      >
        <span
          className={clsx([
            `task-${task.status.toLowerCase()}-status`,
            classes.status,
          ])}
        >
          {task.status}
        </span>
        <div
          style={{
            display: 'flex',
            flexFlow: 'row nowrap',
            justifyContent: 'space-between',
            minHeight: 'inherit',
            alignItems: 'center',
          }}
        >
          <div className={classes.rows}>
            <div className={classes.taskDescription}>
              <div className={classes.icons}>
                {icons.expired && (
                  <TooltipHost content="This task is overdue">
                    <ExpiredIcon className={classes.icon_expired} />
                  </TooltipHost>
                )}
                {icons.paused && (
                  <TooltipHost content="This task is paused">
                    <PausedIcon className={classes.icon_paused} />
                  </TooltipHost>
                )}
              </div>
              <Text
                variant="medium"
                className={clsx([classes.title, collapsed && classes.nowrap])}
              >
                {task.title}
              </Text>
              <Text
                variant="smallPlus"
                className={clsx([
                  classes.description,
                  collapsed ? classes.nowrap : classes.prewrap,
                ])}
              >
                {task.description}
              </Text>
            </div>
          </div>
          <div className={classes.time}>
            <Text variant="smallPlus">{time.from}</Text>
            <Separator
              styles={{
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
    id: PropTypes.string,
    status: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    duration: PropTypes.number,
    expectedStartDate: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.instanceOf(Date),
    ]),
    expectedFinishDate: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.instanceOf(Date),
    ]),
  }).isRequired,
};

export default TaskItem;
