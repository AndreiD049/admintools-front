import { ActionButton, Stack } from '@fluentui/react';
import PropTypes from 'prop-types';
import React from 'react';
import DatePicker from '../../../shared/date-picker';

const CurrentDate = ({ currentDate, setCurrentDate }) => (
  <>
    <Stack horizontal verticalAlign="center" horizontalAlign="center">
      <ActionButton
        onClick={() => setCurrentDate((prev) => {
          const copy = new Date(prev);
          copy.setDate(copy.getDate() - 1);
          return copy;
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
          const copy = new Date(prev);
          copy.setDate(copy.getDate() + 1);
          return copy;
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
