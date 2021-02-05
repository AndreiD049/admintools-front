import React from 'react';
import { Notification } from '../components/notification';
import Emitter from '../components/shared/Emitter';

// Global context will store the everything that should be shared across all
// components but i don't want to pass it around as props.
const GlobalContext = React.createContext({
  user: null,
  // eslint-disable-next-line no-unused-vars
  Authorize: (code, grant, notification) => false,
  setContext: () => null,
  userPreferences: {
    theme: null,
  },
  notify: (text, type, actions = null) => {
    Emitter.emit('notification-add', {
      onRender: (onDismiss) => (
        // eslint-disable-next-line react/jsx-filename-extension
        <Notification
          text={text}
          type={type}
          actions={actions}
          onDismiss={onDismiss}
        />
      ),
    });
  },
});

export default GlobalContext;
