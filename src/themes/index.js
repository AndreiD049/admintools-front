import lightTheme from './lightTheme';
import darkTheme from './darkTheme';
import solarizedTheme from './solarizedTheme';
import blackWhiteTheme from './blackWhiteTheme';

const selectTheme = (theme) => {
  const localStorageTheme = theme || localStorage.getItem('theme');
  switch (localStorageTheme) {
    case 'light':
      return lightTheme;
    case 'dark':
      return darkTheme;
    case 'solarized':
      return solarizedTheme;
    case 'blackwhite':
      return blackWhiteTheme;
    default:
      return lightTheme;
  }
};

export {
  lightTheme,
  darkTheme,
  solarizedTheme,
  selectTheme,
};
