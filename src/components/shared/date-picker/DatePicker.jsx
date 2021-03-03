import { makeStyles } from '@fluentui/react-theme-provider';
import React from 'react';
import { DatePicker as DatePickerFluent } from '@fluentui/react';

const useStyles = makeStyles((theme) => ({
  root: {
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

/**
 *
 * @param {Object} props
 * @param {Object} props.styles
 * @param {Object} props.calloutProps
 * @param {Object} props.calendarProps
 * @param {Function} props.onSelectDate
 * @param {String} props.label
 * @param {Boolean} props.isRequired
 * @param {Boolean} props.disabled
 * @param {Boolean} props.underlined
 * @param {Boolean} props.isMonthPickerVisible
 * @param {Boolean} props.showMonthPickerAsOverlay
 * @param {Boolean} props.allowTextInput
 * @param {Boolean} props.disableAutoFocus
 * @param {String} props.placeholder
 * @param {Date} props.today
 * @param {Date} props.value
 * @param {Function} props.formatDate
 * @param {Function} props.parseDateFromString
 * @param {Number} props.firstDayOfWeek
 * @param {Boolean} props.highlightCurrentMonth
 * @param {Boolean} props.highlightSelectedMonth
 * @param {Boolean} props.showWeekNumbers
 * @param {Number} props.firstWeekOfYear
 * @param {Boolean} props.showGoToToday
 * @param {Boolean} props.borderless
 * @param {Date} props.minDate
 * @param {Date} props.maxDate
 * @param {Date} props.initialPickerDate
 * @param {Boolean} props.allFocusable
 * @param {Function} props.onAfterMenuDismiss
 */
const DatePicker = (props) => {
  const classes = useStyles();
  return (
    <DatePickerFluent
      calendarProps={{
        className: classes.root,
      }}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    />
  );
};

export default DatePicker;
