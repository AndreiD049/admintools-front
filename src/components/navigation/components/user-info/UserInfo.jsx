import React, { useContext, useState } from 'react';
import {
  Persona,
  PersonaSize,
  Stack,
  Text,
  Link as FluidLink,
  Callout,
  Separator,
  ActionButton,
  makeStyles,
  useKeytipRef,
} from '@fluentui/react';
import keytipStyles from '../../../../styles/keytipStyles';
import GlobalContext from '../../../../services/GlobalContext';
import ChooseThemeModal from '../choose-theme-modal/ChooseThemeModal';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '40px',
    width: '200px',
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'center',
  },
  link: {
    color: theme.palette.accent,
    textAlign: 'center',
    display: 'block',
    paddingRight: '16px',
  },
  fluidLink: {
    color: theme.palette.accent,
  },
  usernameText: {
    overflow: 'hidden',
    paddingRight: '8px',
    textDecoration: 'none',
    color: theme.palette.accent,
  },
  callout: {
    minWidth: '200px',
    minHeight: '100px',
    padding: '16px',
  },
}));

const UserInfo = () => {
  const classes = useStyles();
  const [calloutVisible, setCalloutVisible] = useState(false);
  const [themeModalOpen, setThemeModalOpen] = useState(false);
  const global = useContext(GlobalContext);
  const userLinkRef = useKeytipRef({
    keytipProps: {
      styles: keytipStyles,
      content: 'I',
      keySequences: ['i'],
      onExecute: (el) => el.click(),
    },
  });
  const displayName = global.user
    ? (global.user.displayName || global.user.username)
    : 'Unknown';

  const handleCalloutToggle = () => setCalloutVisible((prev) => !prev);

  return (
    <div className={classes.root}>
      {
        global.user
          ? (
            <FluidLink
              ref={userLinkRef}
              onClick={handleCalloutToggle}
              style={{
                textDecoration: 'none',
              }}
              id="persona"
            >
              <Stack verticalAlign="center" wrap={false} horizontal>
                <Text className={classes.usernameText}>{global.user.username}</Text>
                <Persona
                  size={PersonaSize.size32}
                  text={displayName}
                  hidePersonaDetails
                  className={classes.fluidLink}
                  styles={{
                    root: {
                      marginRight: '18px',
                    },
                  }}
                />
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
                      <FluidLink href="/auth/logout">
                        <Text variant="medium">Sign Out</Text>
                      </FluidLink>
                    </Stack>
                    <Separator />
                    <Stack horizontal horizontalAlign="space-evenly" wrap>
                      <Persona size={PersonaSize.size56} />
                      <Text variant="mediumPlus">{global.user.username}</Text>
                    </Stack>
                    <Separator />
                    <ActionButton
                      onClick={() => setThemeModalOpen(true)}
                      iconProps={{
                        iconName: 'Brush',
                      }}
                    >
                      Chgange Layout
                    </ActionButton>
                    <Separator />
                  </Stack>
                  <ChooseThemeModal
                    isOpen={themeModalOpen}
                    setOpen={setThemeModalOpen}
                  />
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
                    <FluidLink className={classes.link} href="/auth/login">
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
