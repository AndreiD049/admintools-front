import React from 'react';
import PropTypes from 'prop-types';
import {
  classNamesFunction, IconButton, Text,
} from '@fluentui/react';
import { useTheme } from '@fluentui/react-theme-provider';
import UserInfo from '../user-info/UserInfo';

const classNames = classNamesFunction();
const styles = (props) => ({
  root: {
    position: 'relative',
    backgroundColor: props.theme.palette.themeDark,
    height: '40px',
    width: '100vw',
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'space-between',
  },
  flex: {
    height: '40px',
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'start',
  },
  icon: {
    height: '40px',
    color: props.theme.palette.themeLight,
  },
  text: {
    width: '150px',
    alignSelf: 'center',
    textAlign: 'center',
    color: '#fff',
  },
});

const AppBar = ({toggleDrawer}) => {
  const theme = useTheme();
  const classes = classNames(styles, { theme });
  return (
    <div className={classes.root}>
      <div className={classes.flex}>
        <IconButton className={classes.icon} iconProps={{ iconName: 'GlobalNavButton' }} title="Global Nav" ariaLabel="Global Navigation" onClick={toggleDrawer} />
        <Text className={classes.text} variant="large" block>Admin Tools</Text>
      </div>
      <UserInfo />
    </div>
  );
};

AppBar.propTypes = {
  toggleDrawer: PropTypes.func.isRequired,
};

export default AppBar;
