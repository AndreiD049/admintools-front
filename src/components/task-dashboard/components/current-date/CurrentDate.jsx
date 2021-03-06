import { DateTime } from 'luxon';
import { ActionButton, DatePicker, Stack } from '@fluentui/react';
import PropTypes from 'prop-types';
import React from 'react';

const CurrentDate = ({ currentDate, setCurrentDate }) => (
  <>
    <Stack horizontal verticalAlign="center" horizontalAlign="center">
      <ActionButton
        onClick={() => setCurrentDate((prev) => ({
          ...prev,
          from: prev.from.minus({ day: 1 }),
        }))}
        iconProps={{
          iconName: 'Previous',
        }}
      />
      <DatePicker
        value={currentDate.toJSDate()}
        onSelectDate={(date) => setCurrentDate((prev) => {
          const dt = DateTime.fromJSDate(date);
          return {
            ...prev,
            from: prev.from.set({
              year: dt.year,
              month: dt.month,
              day: dt.day,
            }),
          };
        })}
        firstDayOfWeek={1}
      />
      <ActionButton
        onClick={() => setCurrentDate((prev) => ({
          ...prev,
          from: prev.from.plus({ day: 1 }),
        }))}
        iconProps={{
          iconName: 'Next',
        }}
      />
    </Stack>
  </>
);

CurrentDate.propTypes = {
  currentDate: PropTypes.instanceOf(DateTime).isRequired,
  setCurrentDate: PropTypes.func.isRequired,
};

export default CurrentDate;
