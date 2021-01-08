import React, { useState, useEffect } from 'react';
import { CSSTransition, Transition, TransitionGroup } from 'react-transition-group';
import { v4 as uuid } from 'uuid';
import Emitter from '../shared/Emitter';
import './styles.css';

const NotificationContainer = ({ timeout = 5000 }) => {
  const [items, setItems] = useState([]);

  const onDismiss = (idx) => () => {
    setItems((prev) => {
      const found = prev.find((i) => i.id === idx);
      if (found) {
        if (found.timer) clearTimeout(found.timer);
        return prev.filter((i) => i.id !== idx);
      }
      return prev;
    })
  }

  // Use below effect to start listening to Notification events
  // When element is unmounted, listener is removed
  useEffect(() => {
    const listener = (item) => {
      const idx = uuid();
      setItems((prev) => [...prev, {
        ...item,
        onRender: item.onRender.bind({}, onDismiss(idx)),
        id: idx,
        timer: setTimeout(() => setItems((prev) => prev.filter((i) => i.id !== idx)), timeout),
      }]);
    };

    Emitter.on('notification-add', listener);
    return () => {
      Emitter.off('notification-add');
    };
  }, []);

  return (
    <div className="container">
      <TransitionGroup>
        {items.map((item) => (
          <CSSTransition
            key={item.id}
            timeout={400}
            classNames="notification"
          >
            <div className="item-wrapper">
              {item.onRender()}
            </div>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default NotificationContainer;
