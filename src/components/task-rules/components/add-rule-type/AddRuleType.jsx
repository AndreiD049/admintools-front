import React from 'react';
import PropTypes from 'prop-types';
import {
  Checkbox,
  ChoiceGroup,
  Stack,
  makeStyles,
  Dropdown,
  SpinButton,
  Position,
} from '@fluentui/react';
import constants from '../../../../utils/constants';

const monthlyOptions = [
  {
    key: constants.tasks.MonthlyOnType.Day,
    text: 'Callendar day',
  },
  {
    key: constants.tasks.MonthlyOnType.Workday,
    text: 'Workday',
  },
  {
    key: constants.tasks.MonthlyOnType.Monday,
    text: 'Monday',
  },
  {
    key: constants.tasks.MonthlyOnType.Tuesday,
    text: 'Tuesday',
  },
  {
    key: constants.tasks.MonthlyOnType.Wednesday,
    text: 'Wednesday',
  },
  {
    key: constants.tasks.MonthlyOnType.Thursday,
    text: 'Thursday',
  },
  {
    key: constants.tasks.MonthlyOnType.Friday,
    text: 'Friday',
  },
  {
    key: constants.tasks.MonthlyOnType.Saturday,
    text: 'Saturday',
  },
  {
    key: constants.tasks.MonthlyOnType.Sunday,
    text: 'Sunday',
  },
];

const useStyles = makeStyles((theme) => ({
  weeklyCheck: {
    '& > * + *': {
      marginTop: `${theme.spacing.s2} !important`,
    },
  },
  monthlyCheck: {
    '& > * + *': {
      marginTop: `${theme.spacing.s2} !important`,
    },
  },
  monthlyDropdown: {
    marginBottom: theme.spacing.m,
  },
}));

const AddRuleType = ({ data, setData }) => {
  const classes = useStyles();
  const options = [
    { key: 'Work', text: 'Workday' },
    { key: 'Calendar', text: 'Calendar day' },
  ];

  const handleSetWeeklyData = (day) => (evt, checked) => {
    const dt = data.weeklyDays ?? [];
    if (checked) {
      return setData((prev) => ({
        ...prev,
        weeklyDays: dt.concat(day).sort(),
      }));
    }
    return setData((prev) => ({
      ...prev,
      weeklyDays: dt.filter((d) => d !== day).sort(),
    }));
  };

  const handleSetMonths = (month) => (evt, checked) => {
    const dt = data.monthlyMonths ?? [];
    if (checked) {
      return setData((prev) => ({
        ...prev,
        monthlyMonths: dt.concat(month).sort(),
      }));
    }
    return setData((prev) => ({
      ...prev,
      monthlyMonths: dt.filter((d) => d !== month).sort(),
    }));
  };

  const isDaySelected = (day) => {
    if (!data.weeklyDays) return false;
    return data.weeklyDays.indexOf(day) !== -1;
  };

  let render;

  switch (data.type) {
    case constants.tasks.types.Daily:
      render = (
        <>
          <ChoiceGroup
            label="Day type"
            defaultSelectedKey={data.dailyType}
            options={options}
            onChange={(ev, option) =>
              setData((prev) => ({
                ...prev,
                dailyType: option.key,
              }))
            }
          />
        </>
      );
      break;
    case constants.tasks.types.Weekly:
      render = (
        <Stack
          className={classes.weeklyCheck}
          verticalFill
          verticalAlign="start"
        >
          <Checkbox
            onChange={handleSetWeeklyData(1)}
            checked={isDaySelected(1)}
            label="Monday"
          />
          <Checkbox
            onChange={handleSetWeeklyData(2)}
            checked={isDaySelected(2)}
            label="Tuesday"
          />
          <Checkbox
            onChange={handleSetWeeklyData(3)}
            checked={isDaySelected(3)}
            label="Wednesday"
          />
          <Checkbox
            onChange={handleSetWeeklyData(4)}
            checked={isDaySelected(4)}
            label="Thursday"
          />
          <Checkbox
            onChange={handleSetWeeklyData(5)}
            checked={isDaySelected(5)}
            label="Friday"
          />
          <Checkbox
            onChange={handleSetWeeklyData(6)}
            checked={isDaySelected(6)}
            label="Saturday"
          />
          <Checkbox
            onChange={handleSetWeeklyData(7)}
            checked={isDaySelected(7)}
            label="Sunday"
          />
        </Stack>
      );
      break;
    case constants.tasks.types.Monthly:
      render = (
        <Stack verticalAlign="start" verticalFill>
          <SpinButton
            value={data.monthlyOn}
            onChange={(evt, newVal) => {
              if (newVal && !Number.isNaN(+newVal)) {
                setData((prev) => ({
                  ...prev,
                  monthlyOn: +newVal,
                }));
              }
            }}
            min={1}
            max={31}
            label="On"
            incrementButtonAriaLabel="Increase value by 1"
            decrementButtonAriaLabel="Decrease value by 1"
            labelPosition={Position.top}
          />
          <Dropdown
            className={classes.monthlyDropdown}
            options={monthlyOptions}
            placeHolder="Select"
            onChange={(evt, option) =>
              setData((prev) => ({
                ...prev,
                monthlyOnType: option.key,
              }))
            }
            label="Type"
          />
          <Checkbox
            className={classes.monthlyCheck}
            onChange={handleSetMonths(0)}
            label="January"
          />
          <Checkbox
            className={classes.monthlyCheck}
            onChange={handleSetMonths(1)}
            label="February"
          />
          <Checkbox
            className={classes.monthlyCheck}
            onChange={handleSetMonths(2)}
            label="March"
          />
          <Checkbox
            className={classes.monthlyCheck}
            onChange={handleSetMonths(3)}
            label="April"
          />
          <Checkbox
            className={classes.monthlyCheck}
            onChange={handleSetMonths(4)}
            label="May"
          />
          <Checkbox
            className={classes.monthlyCheck}
            onChange={handleSetMonths(5)}
            label="June"
          />
          <Checkbox
            className={classes.monthlyCheck}
            onChange={handleSetMonths(6)}
            label="July"
          />
          <Checkbox
            className={classes.monthlyCheck}
            onChange={handleSetMonths(7)}
            label="August"
          />
          <Checkbox
            className={classes.monthlyCheck}
            onChange={handleSetMonths(8)}
            label="September"
          />
          <Checkbox
            className={classes.monthlyCheck}
            onChange={handleSetMonths(9)}
            label="October"
          />
          <Checkbox
            className={classes.monthlyCheck}
            onChange={handleSetMonths(10)}
            label="November"
          />
          <Checkbox
            className={classes.monthlyCheck}
            onChange={handleSetMonths(11)}
            label="December"
          />
        </Stack>
      );
      break;
    default:
      render = null;
      break;
  }

  return render;
};

AddRuleType.propTypes = {
  setData: PropTypes.func.isRequired,
  data: PropTypes.shape({
    type: PropTypes.string,
    dailyType: PropTypes.string,
  }).isRequired,
};

export default AddRuleType;
