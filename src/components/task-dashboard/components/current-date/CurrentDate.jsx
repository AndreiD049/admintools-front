import { DateTime } from 'luxon';
import { ActionButton, DatePicker, Stack } from '@fluentui/react';
import PropTypes from 'prop-types';
import React from 'react';

const CurrentDate = ({ currentDate, setCurrentDate }) => (
  <>
    <Stack horizontal verticalAlign="center" horizontalAlign="center">
      <ActionButton
        onClick={() => setCurrentDate((prev) => {
          const from = DateTime.fromJSDate(prev).startOf('day');
          return from.minus({ day: 1 }).toJSDate();
        })}
        iconProps={{
          iconName: 'Previous',
        }}
      />
      <DatePicker
        value={currentDate}
        onSelectDate={(date) => setCurrentDate(date)}
        firstDayOfWeek={1}
      />
      <ActionButton
        onClick={() => setCurrentDate((prev) => {
          const from = DateTime.fromJSDate(prev).startOf('day');
          return from.plus({ day: 1 }).toJSDate();
        })}
        iconProps={{
          iconName: 'Next',
        }}
      />
    </Stack>
  </>
);

CurrentDate.propTypes = {
  currentDate: PropTypes.instanceOf(Date).isRequired,
  setCurrentDate: PropTypes.func.isRequired,
};

export default CurrentDate;
