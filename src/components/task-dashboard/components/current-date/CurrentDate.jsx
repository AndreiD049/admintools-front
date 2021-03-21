import { DateTime } from 'luxon';
import { ActionButton, DatePicker, Stack } from '@fluentui/react';
import PropTypes from 'prop-types';
import React from 'react';

const CurrentDate = ({ currentDate, setCurrentDate }) => (
  <>
    <Stack horizontal verticalAlign="center" horizontalAlign="center">
      <ActionButton
        onClick={() => setCurrentDate((prev) => {
          const from = DateTime.fromJSDate(prev);
          return DateTime.fromObject({
            year: from.year,
            month: from.month,
            day: from.day,
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0,
            zone: 'utc',
          }).minus({ day: 1 }).toJSDate();
        })}
        iconProps={{
          iconName: 'Previous',
        }}
      />
      <DatePicker
        value={currentDate}
        onSelectDate={(date) => {
          const from = DateTime.fromJSDate(date);
          const result = DateTime.fromObject({
            year: from.year,
            month: from.month,
            day: from.day,
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0,
            zone: 'utc',
          }).toJSDate();
          return setCurrentDate(result);
        }}
        firstDayOfWeek={1}
      />
      <ActionButton
        onClick={() => setCurrentDate((prev) => {
          const from = DateTime.fromJSDate(prev);
          return DateTime.fromObject({
            year: from.year,
            month: from.month,
            day: from.day,
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0,
            zone: 'utc',
          }).plus({ day: 1 }).toJSDate();
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
