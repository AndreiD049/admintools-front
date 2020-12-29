import React from 'react';

// Global context will store the everything that should be shared across all
// components but i don't want to pass it around as props.
const GlobalContext = React.createContext({
  user: null,
  Authorize: () => false,
  setContext: () => null,
  userPreferences: {
    theme: null,
  },
});

export default GlobalContext;
