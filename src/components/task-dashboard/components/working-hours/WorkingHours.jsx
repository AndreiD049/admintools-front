import { ComboBox, Stack, Text } from '@fluentui/react';
import { makeStyles } from '@fluentui/react-theme-provider';
import PropTypes from 'prop-types';
import React from 'react';

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

  const handleChange = (type) => (evt, option) => {
    setHours((prev) => ({
      ...prev,
      [type]: option.key,
    }));
  };

  return (
    <>
      <Stack horizontalAlign="center">
        <Text className={classes.text} variant="medium">Working hours</Text>
        <Stack horizontalAlign="center" horizontal verticalAlign="center">
          <ComboBox
            className={classes.combo}
            options={hourOptions}
            selectedKey={hours.from}
            autoComplete="on"
            useComboBoxAsMenuWidth
            calloutProps={{
              calloutMaxHeight: 500,
            }}
            onChange={handleChange('from')}
          />
          <span className={classes.space}>-</span>
          <ComboBox
            className={classes.combo}
            options={hourOptions}
            selectedKey={hours.to}
            autoComplete="on"
            useComboBoxAsMenuWidth
            calloutProps={{
              calloutMaxHeight: 500,
            }}
            onChange={handleChange('to')}
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
