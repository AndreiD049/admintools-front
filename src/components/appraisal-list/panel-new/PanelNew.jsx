import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  DefaultButton, Panel, PanelType, PrimaryButton, Stack, TextField,
} from '@fluentui/react';

const PanelNew = ({ isOpen, setOpen, handleCreate }) => {
  const [val, setVal] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCreate(val).finally(() => {
      setVal('');
      setOpen(false);
    });
  };

  return (
    <Panel
      isOpen={isOpen}
      onDismiss={() => setOpen(false)}
      type={PanelType.smallFixedFar}
      headerText="Create period"
    >
      <form onSubmit={handleSubmit}>
        <Stack verticalAlign="start">
          <Stack.Item tokens={{
            margin: '10px 0',
          }}
          >
            <TextField
              label="Name"
              value={val}
              autoFocus
              onChange={(e) => {
                const result = e.target.value;
                setVal(result);
              }}
            />
          </Stack.Item>
          <Stack horizontal horizontalAlign="space-evenly">
            <PrimaryButton type="submit">Create</PrimaryButton>
            <DefaultButton onClick={() => setOpen(false)}>Cancel</DefaultButton>
          </Stack>
        </Stack>
      </form>
    </Panel>
  );
};

PanelNew.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  handleCreate: PropTypes.func.isRequired,
};

export default PanelNew;
