import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Text, TooltipHost } from '@fluentui/react';
import { DateTime } from 'luxon';
import { ReactComponent as ExpiredIcon } from '../assets/expired.svg';
import { ReactComponent as PausedIcon } from '../assets/paused.svg';
import constants from '../../../../../utils/constants';

const { status } = constants.tasks;

const useStyles = makeStyles((theme) => ({
  icons: {
    paddingLeft: theme.spacing.s1,
    paddingBottom: theme.spacing.s1,
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  dateChip: {
    marginBottom: theme.spacing.s1,
    marginRight: theme.spacing.s2,
    backgroundColor: theme.palette.themePrimary,
    padding: theme.spacing.s2,
    borderRadius: 8,
  },
  dateChipText: {
    color: theme.palette.accent,
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
}));

const TaskIcons = ({ task, icons }) => {
  const classes = useStyles();
  const startDT = useMemo(() => DateTime.fromISO(task.expectedStartDate), [task]);

  return (
    <div className={classes.icons}>
      {
        startDT.toRelativeCalendar() !== 'today'
        && task.status !== status.Finished
        && task.status !== status.Cancelled
          ? (
            <div className={classes.dateChip}>
              <Text className={classes.dateChipText} variant="xSmall">
                {startDT.toFormat('EEE - MMM dd')}
              </Text>
            </div>
          )
          : null
      }
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
  );
};

TaskIcons.propTypes = {
  task: PropTypes.shape({
    status: PropTypes.string,
    expectedStartDate: PropTypes.string,
  }).isRequired,
  icons: PropTypes.shape({
    expired: PropTypes.bool,
    paused: PropTypes.bool,
  }).isRequired,
};

export default TaskIcons;
