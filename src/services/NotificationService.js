import React from 'react';
import { Notification } from '../components/notification';
import Emitter from '../components/shared/Emitter';

const NotificationService = {
  notify(text, type, actions) {
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

  notifyError(text) {
    this.notify(text, 'error');
  },

  notifySuccess(text) {
    this.notify(text, 'success');
  },

  notifyInfo(text) {
    this.notify(text, 'info');
  },

  notifySevereWarning(text) {
    this.notify(text, 'severeWarning');
  },
};

export default NotificationService;
