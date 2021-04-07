import {
  ComboBox, makeStyles, Stack, Text,
} from '@fluentui/react';
import PropTypes from 'prop-types';
import React from 'react';
import constants from '../../../../utils/constants';
import DateUtils from '../../../../utils/date';

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
    // Change from hours
    // It's always the same day so just update hours
    const [hour, minute] = option.key.split(':').map((o) => +o);
    if (Number.isNaN(hour) || Number.isNaN(minute)) throw new Error('Option key is not in correct format. Supposed to be hh:mm.', option.key);
    setHours((prev) => ({
      to: prev.to,
      from: prev.from.set({ hour, minute }),
    }));
  };

  const handleChangeTo = (evt, option) => {
    // Change to hours
    // if new to hours are before from hours - add 24 hours to it
    // if difference between from and to is more than 24 hours, substract 24 hours from to
    const [hour, minute] = option.key.split(':').map((o) => +o);
    if (Number.isNaN(hour) || Number.isNaN(minute)) throw new Error('Option key is not in correct format. Supposed to be hh:mm.', option.key);
    let updatedToHours = hours.to.set({ hour, minute });
    if (updatedToHours <= hours.from) updatedToHours = updatedToHours.plus({ hour: 24 });
    const diff = updatedToHours.diff(hours.from, 'hour');
    if (diff.values.hours > 24) updatedToHours = updatedToHours.minus({ hour: 24 });
    setHours((prev) => ({
      from: prev.from,
      to: updatedToHours,
    }));
  };

  return (
    <>
      <Stack horizontalAlign="center">
        <Text className={classes.text} variant="medium">Working hours</Text>
        <Stack horizontalAlign="center" horizontal verticalAlign="center">
          <ComboBox
            className={classes.combo}
            options={constants.timeOptions}
            selectedKey={DateUtils.getNearestTimeUTC(hours.from.toJSDate()).toFormat('HH:mm')}
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
            selectedKey={DateUtils.getNearestTimeUTC(hours.to.toJSDate()).toFormat('HH:mm')}
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
    from: PropTypes.string,
    to: PropTypes.string,
  }).isRequired,
  setHours: PropTypes.func.isRequired,
};

export default WorkingHours;
