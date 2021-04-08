import React from 'react';
import PropTypes from 'prop-types';
import {
  DefaultButton, Modal, Stack, StackItem,
} from '@fluentui/react';
import SelectTheme from '../../../shared/select-theme/SelectTheme';

const ChooseThemeModal = ({ isOpen, setOpen }) => (
  <Modal
    isOpen={isOpen}
    onDismiss={() => setOpen(false)}
    isBlocking={false}
    styles={{
      scrollableContent: {
        minWidth: 300,
        minHeight: 300,
        height: 300,
      },
    }}
  >
    <Stack
      style={{
        height: '100%',
        padding: '16px',
      }}
      horizontalAlign="space-evenly"
      verticalAlign="center"
    >
      <StackItem grow={1}>
        <SelectTheme />
      </StackItem>
      <StackItem align="center">
        <DefaultButton onClick={() => setOpen(false)}>Close</DefaultButton>
      </StackItem>
    </Stack>
  </Modal>
);

ChooseThemeModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};

export default ChooseThemeModal;
