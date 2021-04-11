import { makeStyles } from '@fluentui/react';

const styles = makeStyles((theme) => ({
  root: {
    minHeight: '75px',
    position: 'relative',
    '& .task-new': {
      minHeight: 'inherit',
      border: '1px solid #87D7A1',
      borderLeft: '10px solid #87D7A1',
      '& .task-new-status': {
        backgroundColor: '#87D7A1',
      },
    },
    '& .task-inprogress': {
      minHeight: 'inherit',
      border: '1px solid #F4C884',
      borderLeft: '10px solid #F4C884',
      '& .task-inprogress-status': {
        backgroundColor: '#F4C884',
      },
    },
    '& .task-finished': {
      minHeight: 'inherit',
      border: '1px solid #C4C4C4',
      borderLeft: '10px solid #C4C4C4',
      '& .task-finished-status': {
        backgroundColor: '#C4C4C4',
      },
    },
    '& .task-cancelled': {
      minHeight: 'inherit',
      border: '1px solid #FF6B59',
      borderLeft: '10px solid #FF6B59',
      '& .task-cancelled-status': {
        backgroundColor: '#FF6B59',
      },
    },
    '& .task-paused': {
      minHeight: 'inherit',
      border: '1px solid #66aee8',
      borderLeft: '10px solid #66aee8',
      '& .task-paused-status': {
        backgroundColor: '#66aee8',
      },
    },
  },
  rootSelected: {
    backgroundColor: theme.palette.themeLighterAlt,
  },
  status: {
    alignSelf: 'center',
    display: 'inline',
    minWidth: '80px',
    position: 'absolute',
    textAlign: 'center',
    color: theme.palette.neutralLighterAlt,
    padding: '2px 0',
  },
  collapse: {
    width: '100%',
    textAlign: 'center',
    cursor: 'pointer',
    outline: 'none',
    marginBottom: theme.spacing.s2,
  },
  chevron: {
    height: '100%',
  },
  chevronIcon: {
    color: `${theme.palette.black} !important`,
  },
  rows: {
    display: 'flex',
    flexFlow: 'column nowrap',
    flexGrow: '1',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 'inherit',
    maxWidth: '75%',
  },
  taskDescription: {
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'space-between',
    width: '100%',
    margin: '25px 0',
  },
  nowrap: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  prewrap: {
    whiteSpace: 'pre-wrap',
  },
  title: {
    paddingLeft: theme.spacing.s1,
  },
  description: {
    color: theme.palette.neutralSecondaryAlt,
    paddingLeft: theme.spacing.s1,
  },
  column: {
    display: 'flex',
    flexFlow: 'column nowrap',
  },
}));

export default styles;
