import React, { useState, useEffect } from 'react';
import {
  MessageBar, MessageBarType, Text,
} from '@fluentui/react';
import { Transition, TransitionGroup } from 'react-transition-group';
import { v4 as uuid } from 'uuid';
import Emitter from '../shared/Emitter';

const defaultStyles = {
  transition: 'all 1s',
  marginLeft: 100,
};

const transitionStyles = {
  entering: { opacity: 1, marginLeft: 0 },
  entered: { opacity: 1, marginLeft: 0 },
  exiting: { opacity: 0, marginLeft: 0 },
  exited: { opacity: 0, marginLeft: 0 },
};

const Notification = ({ item, setItems }) => (
  <MessageBar
    MessageBarType={MessageBarType.severeWarning}
  >
    <Text variant="mediumPlus">{item.title}</Text>
  </MessageBar>
);

const NotificationContainer = () => {
  const [items, setItems] = useState([]);

  // Use below effect to start listening to Notification events
  // When element is unmounted, listener is removed
  useEffect(() => {
    const listener = (item) => {
      const idx = uuid();
      setItems((prev) => [...prev, {
        title: `${item.title} ${idx}`,
        id: idx,
      }]);
      setTimeout(() => setItems((prev) => prev.filter((i) => i.id !== idx)), 5000);
    };

    Emitter.on('notification-add', listener);
    return () => {
      Emitter.off('notification-add');
    };
  }, []);

  return (
    <div style={{
      marginTop: '50px',
    }}
    >
      <TransitionGroup>
        {items.map((item) => (
          <Transition
            key={item.id}
            timeout={1000}
          >
            {(state) => (
              <div
                test={console.log(state)}
                style={{
                  ...defaultStyles,
                  ...transitionStyles[state],
                }}
              >
                <Notification item={item} />
              </div>
            )}
          </Transition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default NotificationContainer;
