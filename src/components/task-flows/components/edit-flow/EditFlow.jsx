import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Checkbox,
  DefaultButton, Dropdown, Label, PrimaryButton, Stack, SwatchColorPicker, TextField,
} from '@fluentui/react';
import { useFetch } from '../../../../services/hooks';
import TaskFlowService from '../../../../services/tasks/TaskFlowService';
import TeamService from '../../../../services/TeamService';
import { PanelContext } from '../../../ui-hooks/usePanel';
import constants from '../../../../utils/constants';

const EditFlow = ({ id, setFlows }) => {
  const [flow, setFlow] = useFetch(TaskFlowService.singleUrl(id), null, {
    initialData: null,
    callback: (data) => ({
      name: data.name,
      color: data.color,
      isActive: data.isActive,
      teams: data.teams.map((team) => team.id),
    }),
  });
  const [teams] = useFetch(TeamService.baseUrl);
  const panel = useContext(PanelContext);

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    const result = await TaskFlowService.updateTaskFlow(id, flow);
    if (result) {
      setFlows((prev) => (prev.map((fl) => (fl.id === result.id ? result : fl))));
    }
    if (panel.isPanel) panel.setOpen(false);
  };

  const handleDataChange = (field, func = (args) => args[0].target.value) => (...args) => {
    setFlow((prev) => ({
      ...prev,
      [field]: func(args),
    }));
  };

  useEffect(() => {
    if (panel.isPanel) {
      panel.setOnRenderFooter(() => (() => (
        <Stack horizontal tokens={{ childrenGap: 2 }}>
          <PrimaryButton text="Update" type="submit" form="edit-flow-form" />
          <DefaultButton text="Close" onClick={() => panel.setOpen(false)} />
        </Stack>
      )));
    }
  }, [panel]);

  return flow !== null && (
    <form onSubmit={handleSubmit} id="edit-flow-form">
      <TextField
        label="Name"
        value={flow?.name}
        onChange={handleDataChange('name')}
        placeholder="Flow name"
      />
      <Dropdown
        placeholder="Flow teams"
        label="Teams"
        selectedKeys={flow?.teams}
        multiSelect
        options={teams.map((team) => ({
          key: team.id,
          text: team.name,
        }))}
        // eslint-disable-next-line no-unused-vars
        onChange={handleDataChange('teams', ([evt, option]) => {
          if (option.selected) return flow?.teams.concat(option.key);
          return flow?.teams?.filter((team) => team !== option.key);
        })}
      />
      <Label htmlFor="edit-flow-color-picker">Color</Label>
      <SwatchColorPicker
        id="edit-flow-color-picker"
        columnCount={6}
        cellHeight={35}
        cellWidth={35}
        cellShape="square"
        colorCells={constants.colors.map((color) => ({
          id: color,
          color,
        }))}
        selectedId={flow?.color}
        onColorChanged={handleDataChange('color', ([colorId]) => colorId)}
      />
      <Checkbox
        label="Active"
        checked={flow?.isActive}
        // eslint-disable-next-line no-unused-vars
        onChange={handleDataChange('isActive', ([ev, checked]) => checked)}
      />
    </form>
  );
};

EditFlow.propTypes = {
  id: PropTypes.string.isRequired,
  setFlows: PropTypes.func.isRequired,
};

export default EditFlow;
