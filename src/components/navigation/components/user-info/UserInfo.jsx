import React, { useContext, useState } from 'react';
import {
  classNamesFunction,
  Persona,
  PersonaSize,
  Stack,
  Text,
  Link as FluidLink,
  Callout,
  Separator,
} from '@fluentui/react';
import { Link } from 'react-router-dom';
import GlobalContext from '../../../../services/GlobalContext';

const classNames = classNamesFunction();
const styles = {
  root: {
    height: '40px',
    width: '200px',
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'center',
  },
  link: {
    color: '#fff',
    textAlign: 'center',
    display: 'block',
    paddingRight: '16px',
  },
  usernameText: {
    overflow: 'hidden',
    paddingRight: '8px',
    textDecoration: 'none',
    color: '#fff',
  },
  callout: {
    minWidth: '200px',
    minHeight: '100px',
    padding: '16px',
  },
};

const UserInfo = (props) => {
  const classes = classNames(styles);
  const [calloutVisible, setCalloutVisible] = useState(false);
  const global = useContext(GlobalContext);
  const displayName = global.user
    ? (global.user.displayName || global.user.username)
    : 'Unknown';

  const handleCalloutToggle = () => setCalloutVisible((prev) => !prev);

  return (
    <div className={classes.root}>
      {
        global.user
          ? (
            <FluidLink onClick={handleCalloutToggle} id="persona">
              <Stack verticalAlign="center" wrap={false} horizontal>
                <Text className={classes.usernameText}>{global.user.username}</Text>
                <Persona size={PersonaSize.size32} />
              </Stack>
              {
                calloutVisible && (
                <Callout
                  role="alertdialog"
                  gapSpace={0}
                  target="#persona"
                  setInitialFocus
                  isBeakVisible={false}
                  onDismiss={handleCalloutToggle}
                >
                  <Stack className={classes.callout}>
                    <Stack horizontalAlign="space-between" horizontal>
                      <Text variant="medium">Admin Tools</Text>
                      <FluidLink href="/api/logout">
                        <Text variant="medium">Sign Out</Text>
                      </FluidLink>
                    </Stack>
                    <Separator />
                    <Stack horizontal horizontalAlign="space-evenly" wrap>
                      <Persona size={PersonaSize.size56} />
                      <Text variant="mediumPlus">{global.user.username}</Text>
                    </Stack>
                    <Separator />
                  </Stack>
                </Callout>
                )
              }
            </FluidLink>
          )
          : (
            <div>
              {
                global.userLoaded
                  ? (
                    <FluidLink className={classes.link} href="/api/login">
                      <Text variant="mediumPlus">
                        Login
                      </Text>
                    </FluidLink>
                  )
                  : null
              }
            </div>
          )
      }
    </div>
  );
};

export default UserInfo;
