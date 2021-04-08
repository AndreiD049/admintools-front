import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  DefaultButton,
  Panel,
  PanelType,
  PrimaryButton,
  Stack,
  TextField,
} from '@fluentui/react';

const PanelEdit = ({
  item, isOpen, setOpen, handleEdit,
}) => {
  const [val, setVal] = useState(item ? item.name : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    handleEdit(item.id, val).finally(() => {
      setVal('');
      setOpen(false);
    });
  };

  useEffect(() => {
    setVal(item ? item.name : '');
  }, [item]);

  return (
    <Panel
      isOpen={isOpen}
      onDismiss={() => setOpen(false)}
      type={PanelType.smallFixedFar}
      headerText="Edit period"
    >
      <form onSubmit={handleSubmit}>
        <Stack verticalAlign="start">
          <Stack.Item
            tokens={{
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
            <PrimaryButton type="submit">Update</PrimaryButton>
            <DefaultButton onClick={() => setOpen(false)}>Cancel</DefaultButton>
          </Stack>
        </Stack>
      </form>
    </Panel>
  );
};

PanelEdit.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  }),
  isOpen: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
};

PanelEdit.defaultProps = {
  item: null,
};

export default PanelEdit;
