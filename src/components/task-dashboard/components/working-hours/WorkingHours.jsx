import React from 'react';
import {
  ComboBox, makeStyles, Stack, Text,
} from '@fluentui/react';
import PropTypes from 'prop-types';
import { DateTime } from 'luxon';

const hourOptions = [
  { key: '00:00', text: '00:00' },
  { key: '01:00', text: '01:00' },
  { key: '02:00', text: '02:00' },
  { key: '03:00', text: '03:00' },
  { key: '04:00', text: '04:00' },
  { key: '05:00', text: '05:00' },
  { key: '06:00', text: '06:00' },
  { key: '07:00', text: '07:00' },
  { key: '08:00', text: '08:00' },
  { key: '09:00', text: '09:00' },
  { key: '10:00', text: '10:00' },
  { key: '11:00', text: '11:00' },
  { key: '12:00', text: '12:00' },
  { key: '13:00', text: '13:00' },
  { key: '14:00', text: '14:00' },
  { key: '15:00', text: '15:00' },
  { key: '16:00', text: '16:00' },
  { key: '17:00', text: '17:00' },
  { key: '18:00', text: '18:00' },
  { key: '19:00', text: '19:00' },
  { key: '20:00', text: '20:00' },
  { key: '21:00', text: '21:00' },
  { key: '22:00', text: '22:00' },
  { key: '23:00', text: '23:00' },
];

const useStyles = makeStyles(() => ({
  combo: {
    width: 100,
  },
  space: {
    padding: '0px 10px',
  },
  text: {
    padding: '10px',
  },
}));

const WorkingHours = ({ hours, setHours }) => {
  const classes = useStyles();

  const handleChangeFrom = (evt, option) => {
    const [hour, minute] = option.key.split(':').map((o) => +o);
    if (Number.isNaN(hour) || Number.isNaN(minute)) {
      throw new Error(
        'Option key is not in correct format. Supposed to be hh:mm.',
        option.key,
      );
    }
    setHours((prev) => {
      const newFrom = prev.from.set({ hour, minute });
      const newDuration = prev.duration + prev.from.diff(newFrom, 'minute').values.minutes;
      return {
        from: newFrom,
        duration: newDuration,
      };
    });
  };

  const handleChangeTo = (evt, option) => {
    const [hour, minute] = option.key.split(':').map((o) => +o);
    if (Number.isNaN(hour) || Number.isNaN(minute)) {
      throw new Error(
        'Option key is not in correct format. Supposed to be hh:mm.',
        option.key,
      );
    }
    let toHours = hours.from.set({ hour, minute });
    // If we selected hours in the following day
    if (toHours <= hours.from) toHours = toHours.plus({ day: 1 });
    const diff = toHours.diff(hours.from, 'minute');
    setHours((prev) => ({
      ...prev,
      duration: diff.values.minutes,
    }));
  };

  return (
    <>
      <Stack horizontalAlign="center">
        <Text className={classes.text} variant="medium">
          Working hours
        </Text>
        <Stack horizontalAlign="center" horizontal verticalAlign="center">
          <ComboBox
            className={classes.combo}
            options={hourOptions}
            selectedKey={hours.from.toFormat('HH:mm')}
            autoComplete="on"
            useComboBoxAsMenuWidth
            calloutProps={{
              calloutMaxHeight: 500,
            }}
            onChange={handleChangeFrom}
          />
          <span className={classes.space}>-</span>
          <ComboBox
            className={classes.combo}
            options={hourOptions}
            selectedKey={hours.from
              .plus({ minute: hours.duration ?? 0 })
              .toFormat('HH:mm')}
            autoComplete="on"
            useComboBoxAsMenuWidth
            calloutProps={{
              calloutMaxHeight: 500,
            }}
            onChange={handleChangeTo}
          />
        </Stack>
      </Stack>
    </>
  );
};

WorkingHours.propTypes = {
  hours: PropTypes.shape({
    from: PropTypes.instanceOf(DateTime),
    duration: PropTypes.number,
  }).isRequired,
  setHours: PropTypes.func.isRequired,
};

export default WorkingHours;
