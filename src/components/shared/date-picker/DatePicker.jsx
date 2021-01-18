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
