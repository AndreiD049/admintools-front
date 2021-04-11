import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  makeStyles, Separator, Text, useTheme,
} from '@fluentui/react';
import { DateTime } from 'luxon';

const useStyles = makeStyles((theme) => ({
  time: {
    paddingRight: theme.spacing.s1,
    lineHeight: '10px',
  },
}));

const TaskTime = ({ task }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [time, setTime] = useState({
    from: '',
    to: '',
  });

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
    <div className={classes.time}>
      <Text variant="smallPlus">{time.from}</Text>
      <Separator
        styles={{
          root: {
            padding: 0,
            '&::before': {
              backgroundColor: theme.palette.black,
            },
          },
        }}
      />
      <Text variant="smallPlus">{time.to}</Text>
    </div>
  );
};

TaskTime.propTypes = {
  task: PropTypes.shape({
    expectedStartDate: PropTypes.string,
    expectedFinishDate: PropTypes.string,
  }).isRequired,
};

export default TaskTime;
