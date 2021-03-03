/* eslint-disable max-len */
import { makeStyles } from '@fluentui/react-theme-provider';
import PropTypes from 'prop-types';
import React from 'react';
import { Calendar as FluentCalendar } from '@fluentui/react';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'inline-block',
    backgroundColor: theme.semanticColors.disabledBackground,
    color: theme.palette.neutralPrimary,
    '& .ms-DatePicker-monthAndYear, .ms-DatePicker-prevMonth, .ms-DatePicker-currentDecade, .ms-DatePicker-nextMonth, .ms-DatePicker-currentYear, .ms-DatePicker-prevYear, .ms-DatePicker-nextYear, .ms-DatePicker-prevDecade, .ms-DatePicker-nextDecade, .ms-DatePicker-monthOption, .ms-DatePicker-yearOption': {
      color: theme.palette.neutralPrimary,
    },
    '& .ms-DatePicker-monthAndYear:hover, .ms-DatePicker-prevMonth:hover, .ms-DatePicker-currentDecade:hover, .ms-DatePicker-nextMonth:hover, .ms-DatePicker-currentYear:hover, .ms-DatePicker-prevYear:hover, .ms-DatePicker-nextYear:hover, .ms-DatePicker-prevDecade:hover, .ms-DatePicker-nextDecade:hover, .ms-DatePicker-monthOption:hover, .ms-DatePicker-yearOption:hover': {
      color: `${theme.palette.neutralSecondary} !important`,
      backgroundColor: `${theme.palette.white} !important`,
    },
    '& .ms-DatePicker-weekday': {
      color: theme.palette.neutralSecondary,
    },
    '& .ms-DatePicker-day--highlighted, td[class*=dayIsHighlighted_]': {
      color: `${theme.palette.neutralSecondary} !important`,
      backgroundColor: `${theme.palette.white} !important`,
    },
    '& [class*=dayHover], [class*=weekBackground]': {
      color: `${theme.palette.neutralSecondary} !important`,
      backgroundColor: `${theme.palette.white} !important`,
    },
    '& td[class*=dayWrapper_]:hover': {
      color: `${theme.palette.neutralSecondary} !important`,
      backgroundColor: `${theme.palette.white} !important`,
    },
    '& td[class*=dayWrapper_]': {
      color: theme.palette.neutralPrimary,
    },
    '& td[class*=dayIsUnfocused_]': {
      color: theme.palette.neutralSecondary,
    },
    '& button.ms-DatePicker-goToday': {
      position: 'relative !important',
      color: theme.palette.neutralPrimary,
    },
    '& button.ms-DatePicker-goToday[disabled]': {
      position: 'relative !important',
      color: theme.palette.neutralSecondaryAlt,
    },
    '& button[class*=goToday_]': {
      color: theme.palette.neutralPrimary,
    },
    '& button[class*=goToday_]:hover': {
      color: theme.palette.themePrimary,
    },
  },
}));

const defaultStrings = {
  months: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
  shortMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  shortDays: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  goToToday: 'Go to today',
  weekNumberFormatString: 'Week number {0}',
  prevMonthAriaLabel: 'Previous month',
  nextMonthAriaLabel: 'Next month',
  prevYearAriaLabel: 'Previous year',
  nextYearAriaLabel: 'Next year',
  prevYearRangeAriaLabel: 'Previous year range',
  nextYearRangeAriaLabel: 'Next year range',
  closeButtonAriaLabel: 'Close',
  monthPickerHeaderAriaLabel: '{0}, select to change the year',
  yearPickerHeaderAriaLabel: '{0}, select to change the month',
};

/**
 *
 * @param {Object} props
 * @param {Object} props.styles
 * @param {Function} props.onSelectDate
 * @param {Function} props.onDismiss
 * @param {Boolean} props.isMonthPickerVisible
 * @param {Boolean} props.isDayPickerVisible
 * @param {Boolean} props.showMonthPickerAsOverlay
 * @param {Date} props.today
 * @param {Date} props.value
 * @param {Number} props.firstDayOfWeek
 * @param {Number} props.dateRangeType
 * @param {Boolean} props.autoNavigateOnSelection
 * @param {Boolean} props.showGoToToday
 * @param {Boolean} props.shouldFocusOnMount
 * @param {Boolean} props.strings
 * @param {Boolean} props.highlightCurrentMonth
 * @param {Boolean} props.highlightSelectedMonth
 * @param {{ leftNavigation: string, rightNavigation: string, closeIcon: string }} props.navigationIcons
 * @param {Boolean} props.showWeekNumbers
 * @param {Number} props.firstWeekOfYear
 * @param {Object} props.dateTimeFormatter
 * @param {Date} props.minDate
 * @param {Date} props.maxDate
 * @param {Date[]} props.restrictedDates
 * @param {Boolean} props.showSixWeeksByDefault
 * @param {Number[]} props.workWeekDays
 * @param {Boolean} props.selectDateOnClick
 * @param {Boolean} props.showCloseButton
 * @param {Boolean} props.allFocusable
 * @param {Boolean} props.yearPickerHidden
 */
const Calendar = ({ strings, style, ...props }) => {
  const classes = useStyles();
  return (
    <FluentCalendar
      className={classes.root}
      style={style}
      strings={strings ?? defaultStrings}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    />
  );
};

Calendar.propTypes = {
  strings: PropTypes.string,
  style: PropTypes.shape({}),
};

Calendar.defaultProps = {
  strings: undefined,
  style: {},
};

export default Calendar;
