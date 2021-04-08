import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  DefaultButton,
  Dropdown,
  Label,
  PrimaryButton,
  Stack,
  SwatchColorPicker,
  TextField,
} from '@fluentui/react';
import { PanelContext } from '../../../ui-hooks/usePanel';
import { useFetch } from '../../../../services/hooks';
import TeamService from '../../../../services/TeamService';
import NotificationService from '../../../../services/NotificationService';
import TaskFlowService from '../../../../services/tasks/TaskFlowService';
import constants from '../../../../utils/constants';

const AddFlow = ({ setFlows }) => {
  const [teams] = useFetch(TeamService.baseUrl);
  const [data, setData] = useState({
    name: '',
    teams: [],
    color: '',
  });
  const panel = useContext(PanelContext);

  const handleDataChange = (field, func = (args) => args[0].target.value) => (
    ...args
  ) => {
    setData((prev) => ({
      ...prev,
      [field]: func(args),
    }));
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    if (!data.name) {
      return NotificationService.notifyError('Flow Name is missing');
    }
    if (data.teams.length === 0) {
      return NotificationService.notifyError('Please choose at least one team');
    }
    if (!data.color) {
      return NotificationService.notifyError('Color must be provided');
    }
    const createdFlow = await TaskFlowService.createTaskFlow(data);
    if (createdFlow) {
      setFlows((prev) => prev.concat(createdFlow));
    }
    if (panel.isPanel) panel.setOpen(false);
    return null;
  };

  useEffect(() => {
    if (panel.isPanel) {
      panel.setOnRenderFooter(() => () => (
        <Stack horizontal tokens={{ childrenGap: 2 }}>
          <PrimaryButton text="Create" type="submit" form="add-flow-form" />
          <DefaultButton text="Close" onClick={() => panel.setOpen(false)} />
        </Stack>
      ));
    }
  }, [panel]);

  return (
    <form onSubmit={handleSubmit} id="add-flow-form">
      <TextField
        label="Name"
        value={data.name}
        onChange={handleDataChange('name')}
        placeholder="Flow name"
      />
      <Dropdown
        placeholder="Flow teams"
        label="Teams"
        selectedKeys={data.teams}
        multiSelect
        options={teams.map((team) => ({
          key: team.id,
          text: team.name,
        }))}
        // eslint-disable-next-line no-unused-vars
        onChange={handleDataChange('teams', ([evt, option]) => {
          if (option.selected) return data.teams.concat(option.key);
          return data.teams.filter((team) => team !== option.key);
        })}
      />
      <Label htmlFor="add-flow-color-picker">Color</Label>
      <SwatchColorPicker
        id="add-flow-color-picker"
        columnCount={6}
        cellHeight={35}
        cellWidth={35}
        cellShape="square"
        colorCells={constants.colors.map((color) => ({
          id: color,
          color,
        }))}
        selectedId={data.color}
        onColorChanged={handleDataChange('color', ([id]) => id)}
      />
    </form>
  );
};

AddFlow.propTypes = {
  setFlows: PropTypes.func.isRequired,
};

export default AddFlow;
