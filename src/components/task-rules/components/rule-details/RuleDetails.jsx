import React, {
  useCallback, useContext, useEffect, useState,
} from 'react';
import PropTypes from 'prop-types';
import {
  Checkbox,
  ComboBox,
  DefaultButton,
  Icon,
  Label,
  makeStyles,
  Persona,
  PersonaSize,
  Position,
  PrimaryButton,
  Separator,
  SpinButton,
  Stack,
  StackItem,
  Text,
  TextField,
  DatePicker,
} from '@fluentui/react';
import { useFetch } from '../../../../services/hooks';
import TaskRuleService from '../../../../services/tasks/TaskRuleService';
import constants from '../../../../utils/constants';
import { PanelContext } from '../../../ui-hooks/usePanel';
import DateUtils from '../../../../utils/date';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginTop: `${theme.spacing.s2} !important`,
    },
  },
  description: {
    color: theme.palette.neutralSecondaryAlt,
    '& textarea': {
      color: 'inherit',
    },
  },
  typeIcon: {
    fontSize: 50,
    height: 50,
    width: 50,
  },
  typeDetails: {
    width: '50%',
    borderTop: `1px solid ${theme.palette.themeSecondary}`,
    borderBottom: `1px solid ${theme.palette.themeSecondary}`,
    marginTop: `${theme.spacing.s2} !important`,
    paddingTop: theme.spacing.m,
    paddingBottom: theme.spacing.m,
  },
  paddingLeft: {
    paddingLeft: theme.spacing.s2,
  },
  userColumn: {
    width: '50%',
  },
  separator: {
    margin: `${theme.spacing.m} 0`,
    '& div[role=\'separator\']': {
      backgroundColor: theme.palette.themePrimary,
      padding: '3px',
      borderRadius: '5px',
      minWidth: 60,
    },
  },
}));

const RuleTypeDetails = ({ rule }) => {
  const classes = useStyles();

  const getTypeIcon = (type) => {
    switch (type) {
      case constants.tasks.types.Daily:
        return 'CalendarDay';
      case constants.tasks.types.Weekly:
        return 'CalendarWorkWeek';
      case constants.tasks.types.Monthly:
        return 'Calendar';
      default:
        return 'Unknown';
    }
  };

  const getRenderDetails = (ruleDetails) => {
    switch (ruleDetails.type) {
      case constants.tasks.types.Daily:
        return (
          <Stack horizontal horizontalAlign="center" verticalAlign="center">
            <Label>Day type: </Label>
            <Text block className={classes.paddingLeft} variant="medium">
              {rule.dailyType}
            </Text>
          </Stack>
        );
      case constants.tasks.types.Weekly:
        return (
          <Stack horizontal horizontalAlign="center" verticalAlign="center">
            <Label>Day type: </Label>
            <Text block className={classes.paddingLeft} variant="medium">
              {rule.dailyType}
            </Text>
          </Stack>
        );
      case constants.tasks.types.Monthly:
        return (
          <Stack horizontal horizontalAlign="center" verticalAlign="center">
            <Label>Day type: </Label>
            <Text block className={classes.paddingLeft} variant="medium">
              {rule.dailyType}
            </Text>
          </Stack>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Separator className={classes.separator}>Type</Separator>
      <Stack horizontalAlign="center">
        <Icon className={classes.typeIcon} iconName={getTypeIcon(rule.type)} />
        <Text variant="medium">{rule.type}</Text>
        <StackItem className={classes.typeDetails}>
          {getRenderDetails(rule)}
        </StackItem>
      </Stack>
    </>
  );
};

RuleTypeDetails.propTypes = {
  rule: PropTypes.shape({
    type: PropTypes.string,
    dailyType: PropTypes.string,
  }).isRequired,
};

const RuleDetails = ({
  id, editing, setEditing, setRules,
}) => {
  const classes = useStyles();
  const [rule] = useFetch(id && TaskRuleService.taskRulePath(id), null, null);
  const panel = useContext(PanelContext);
  const [data, setData] = useState({});

  const handleUpdate = useCallback(async () => {
    const result = await TaskRuleService.updateTaskRule(rule.id, data);
    setRules((prev) => prev.map((r) => (r.id === result.id ? result : r)));
    panel.setOpen(false);
    setEditing(false);
  }, [rule, data]);

  const handleDataChange = (field, func = (args) => args[0].target.value) => (...args) => {
    setData((prev) => ({
      ...prev,
      [field]: func(args),
    }));
  };

  const renderFooter = useCallback(() => (
    <>
      {
        editing
          ? (<PrimaryButton onClick={handleUpdate}>Save</PrimaryButton>)
          : (<PrimaryButton onClick={() => setEditing(true)}>Edit</PrimaryButton>)
      }
      <DefaultButton
        style={{ marginLeft: '8px' }}
        onClick={() => {
          setEditing(false);
          panel.setOpen(false);
        }}
      >
        Close
      </DefaultButton>
    </>
  ), [panel, editing, handleUpdate]);

  /**
   * In case it's opened in a panel
   */
  useEffect(() => {
    if (panel.isPanel) {
      panel.setOnRenderFooter(() => (renderFooter));
    }
  }, [panel, renderFooter]);

  return rule && (
    <Stack className={classes.root} verticalAlign="start">
      <Separator className={classes.separator}>General</Separator>
      <TextField
        borderless={!editing}
        label="Title"
        readOnly={!editing}
        value={data.title ?? rule.title}
        onChange={handleDataChange('title')}
      />
      <TextField
        autoAdjustHeight
        borderless={!editing}
        className={classes.description}
        label="Description"
        multiline
        readOnly={!editing}
        resizable={false}
        value={data.description ?? rule.description ?? '-'}
        onChange={handleDataChange('description')}
      />
      <ComboBox
        label="Start time"
        options={constants.timeOptions}
        selectedKey={DateUtils.getNearestTime(
          data.taskStartTime
            ? new Date(data.taskStartTime)
            : new Date(rule.taskStartTime),
        )}
        autoComplete="on"
        disabled={!editing}
        onChange={handleDataChange('taskStartTime', (args) => {
          const time = DateUtils.getHoursFromText(args[1].text);
          const result = new Date();
          result.setHours(time.h);
          result.setMinutes(time.m);
          return result;
        })}
        calloutProps={{
          calloutMaxHeight: 400,
        }}
        useComboBoxAsMenuWidth
      />
      {
        editing
          ? (
            <SpinButton
              label="Duration"
              labelPosition={Position.top}
              value={data.taskDuration ?? rule.taskDuration}
              onChange={handleDataChange('taskDuration', (args) => (Number.isNaN(+args[0].target.value) ? 0 : +args[0].target.value))}
              onIncrement={(val) => setData((prev) => ({ ...prev, taskDuration: (+val + 10) }))}
              onDecrement={(val) => {
                if (val > 10) setData((prev) => ({ ...prev, taskDuration: (+val - 10) }));
              }}
              type="number"
              min={0}
              max={1440}
              step={10}
            />
          )
          : (
            <TextField
              borderless={!editing}
              label="Duration"
              readOnly={!editing}
              value={data.taskDuration ?? rule.taskDuration}
              onChange={handleDataChange('taskDuration')}
              min="1"
              max="1440"
              type="number"
            />
          )
      }
      <DatePicker
        borderless={!editing}
        value={data.validFrom ?? new Date(rule.validFrom)}
        disabled={!editing}
        label="Valid from"
        onSelectDate={handleDataChange('validFrom', (args) => DateUtils.makeUTC(args[0]))}
      />
      <DatePicker
        borderless={!editing}
        value={data.validTo ?? (rule.validTo && new Date(rule.validTo))}
        disabled={!editing}
        onSelectDate={handleDataChange('validTo', (args) => DateUtils.makeUTC(args[0]))}
        label="Valid to"
        allowTextInput
      />
      <RuleTypeDetails rule={rule} />
      <Separator className={classes.separator}>Assigned</Separator>
      <Stack horizontal horizontalAlign="stretch" verticalAlign="stretch">
        <StackItem className={classes.userColumn} grow={1}>
          <Stack horizontalAlign="center">
            <Label>Users</Label>
            { rule.users?.map((user) => (
              <StackItem align="start" key={user.id}>
                <Persona text={user.username} size={PersonaSize.size24} />
              </StackItem>
            )) }
          </Stack>
        </StackItem>
        <Separator vertical />
        <StackItem className={classes.userColumn} grow={1}>
          <Stack horizontalAlign="center">
            <Label>Flows</Label>
          </Stack>
        </StackItem>
      </Stack>
      <Separator className={classes.separator}>Flags</Separator>
      <Checkbox
        checked={data.isBackgroundTask ?? rule.isBackgroundTask}
        label="Background"
        disabled={!editing}
        onChange={handleDataChange('isBackgroundTask', (args) => args[0].target.checked)}
      />
      <Checkbox
        checked={rule.isSharedTask}
        label="Shared"
        disabled
      />
      <Separator className={classes.separator}>Created</Separator>
      <Stack horizontalAlign="center">
        <Text variant="medium">{rule.createdUser?.username}</Text>
        <Text variant="medium">{new Date(rule.createdDate).toLocaleString()}</Text>
      </Stack>
    </Stack>
  );
};

RuleDetails.propTypes = {
  id: PropTypes.string.isRequired,
  editing: PropTypes.bool.isRequired,
  setEditing: PropTypes.bool.isRequired,
  setRules: PropTypes.bool.isRequired,
};

export default RuleDetails;
