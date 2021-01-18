import { createTheme } from '@fluentui/react';

const theme = createTheme({
  palette: {
    themePrimary: '#0078d7',
    themeLighterAlt: '#000509',
    themeLighter: '#001322',
    themeLight: '#002340',
    themeTertiary: '#004781',
    themeSecondary: '#0068bc',
    themeDarkAlt: '#1682da',
    themeDark: '#3693e0',
    themeDarker: '#66aee8',
    neutralLighterAlt: '#212121',
    neutralLighter: '#2a2a2a',
    neutralLight: '#393939',
    neutralQuaternaryAlt: '#424242',
    neutralQuaternary: '#494949',
    neutralTertiaryAlt: '#686868',
    neutralTertiary: '#c8c8c8',
    neutralSecondary: '#d0d0d0',
    neutralPrimaryAlt: '#dadada',
    neutralPrimary: '#ffffff',
    neutralDark: '#f4f4f4',
    black: '#f8f8f8',
    white: '#171717',
    accent: '#ffffff',
  },
  type: 'dark',
  isInverted: true,
});

export default theme;
