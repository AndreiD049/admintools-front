import React, {
  useCallback,
  useEffect, useRef, useState,
} from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  ActionButton,
  Text,
} from '@fluentui/react';
import { DateTime } from 'luxon';
import TaskCollapsed from '../task-collapsed/TaskCollapsed';
import TaskIcons from './components/TaskIcons';
import constants from '../../../../utils/constants';
import useStyles from './styles';
import TaskTime from './components/TaskTime';

const { status } = constants.tasks;

const TaskItem = ({
  task, handleStatusChange, selected, editable, overdue, disabled,
}) => {
  const classes = useStyles();
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

  const handleCollapseToggle = useCallback(() => {
    if (disabled) return setCollapsed(true);
    return setCollapsed((prev) => !prev);
  }, [disabled]);

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
  }, [task, icons]);

  return (
    <div
      className={
        clsx(
          classes.root,
          overdue && classes.rootOverdue,
          selected && classes.rootSelected,
          disabled && classes.rootDisabled,
        )
      }
    >
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
              <TaskIcons task={task} icons={icons} />
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
          <TaskTime task={task} />
        </div>
        <TaskCollapsed
          task={task}
          collapsed={collapsed}
          setCollapsed={setCollapsed}
          handleStatusChange={handleStatusChange}
          editable={editable}
          disabled={disabled}
        />
        <div
          tabIndex="-1"
          role="button"
          onKeyDown={(evt) => evt.key === 'Enter' && handleCollapseToggle()}
          className={clsx(classes.collapse)}
          onClick={handleCollapseToggle}
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
  selected: PropTypes.bool,
  editable: PropTypes.bool.isRequired,
  overdue: PropTypes.bool,
  disabled: PropTypes.bool,
};

TaskItem.defaultProps = {
  selected: false,
  overdue: false,
  disabled: false,
};

export default TaskItem;
