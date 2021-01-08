import React from 'react';
import { MessageBar, MessageBarType, Text } from '@fluentui/react';

const Notification = ({ type, text, actions, onDismiss }) => {
  let typeMessage;
  switch (type) {
    case 'success':
      typeMessage = MessageBarType.success;
      break;
    case 'warning':
      typeMessage = MessageBarType.warning;
      break;
    case 'error':
      typeMessage = MessageBarType.error;
      break;
    case 'info':
      typeMessage = MessageBarType.info;
      break;
    case 'blocked':
      typeMessage = MessageBarType.blocked;
      break;
    case 'severeWarning':
      typeMessage = MessageBarType.severeWarning;
      break;
    default:
      typeMessage = MessageBarType.info;
      break;
  }
  return (
    <MessageBar
      messageBarType={typeMessage}
      actions={actions || null}
      onDismiss={onDismiss}
    >
      <Text variant="medium">{text}</Text>
    </MessageBar>
  );
}

export default Notification;