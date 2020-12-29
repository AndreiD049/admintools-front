import React from 'react';
import PropTypes from 'prop-types';
import {
  Icon, IconButton, Text,
} from '@fluentui/react';
import { useTheme, makeStyles } from '@fluentui/react-theme-provider';
import UserInfo from '../user-info/UserInfo';
import keytipStyles from '../../../../styles/keytipStyles';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    backgroundColor: theme.palette.themeDark,
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
    color: theme.palette.accent,
  },
  text: {
    width: '150px',
    alignSelf: 'center',
    textAlign: 'center',
    color: theme.palette.accent,
  },
}));

const AppBar = ({ toggleDrawer }) => {
  const theme = useTheme();
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.flex}>
        <IconButton
          className={classes.icon}
          iconProps={{ iconName: 'GlobalNavButton' }}
          title="Global Nav"
          ariaLabel="Global Navigation"
          onClick={toggleDrawer}
          keytipProps={{
            styles: keytipStyles,
            content: 'M',
            keySequences: ['m'],
            onExecute: toggleDrawer,
            hasMenu: true,
          }}
        />
        <Text className={classes.text} variant="large" block nowrap>
          <Icon
            iconName="Glasses"
            styles={{
              root: {
                fontSize: '25px',
                padding: theme.spacing.s2,
              },
            }}
          />
          Admin Tools
        </Text>
      </div>
      <UserInfo />
    </div>
  );
};

AppBar.propTypes = {
  toggleDrawer: PropTypes.func.isRequired,
};

export default AppBar;
