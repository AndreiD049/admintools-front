import lightTheme from './lightTheme';
import darkTheme from './darkTheme';
import warmTheme from './warmTheme';
import blackWhiteTheme from './blackWhiteTheme';

const selectTheme = (theme) => {
  const localStorageTheme = theme || localStorage.getItem('theme');
  switch (localStorageTheme) {
    case 'light':
      return lightTheme;
    case 'dark':
      return darkTheme;
    case 'warm':
      return warmTheme;
    case 'blackwhite':
      return blackWhiteTheme;
    default:
      return lightTheme;
  }
};

export {
  lightTheme,
  darkTheme,
  warmTheme,
  selectTheme,
};
