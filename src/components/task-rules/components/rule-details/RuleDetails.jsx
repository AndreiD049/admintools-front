import React, {
  useCallback, useContext, useEffect, useState,
} from 'react';
import PropTypes from 'prop-types';
import {
  Checkbox,
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
  MaskedTextField,
  TooltipHost,
} from '@fluentui/react';
import { DateTime } from 'luxon';
import { useFetch } from '../../../../services/hooks';
import TaskRuleService from '../../../../services/tasks/TaskRuleService';
import TaskFlowService from '../../../../services/tasks/TaskFlowService';
import constants from '../../../../utils/constants';
import { PanelContext } from '../../../ui-hooks/usePanel';
import DateUtils from '../../../../utils/date';
import PeoplePicker from '../../../shared/people-picker/PeoplePicker';
import UserService from '../../../../services/UserService';
import GlobalContext from '../../../../services/GlobalContext';
import FlowPicker from '../../../task-planning/components/flow-picker';
import Chip from '../../../shared/chip';

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
    "& div[role='separator']": {
      backgroundColor: theme.palette.themePrimary,
      padding: '3px',
      borderRadius: '5px',
      minWidth: 60,
    },
  },
  weekDay: {
    backgroundColor: theme.palette.themePrimary,
    color: theme.palette.black,
    padding: '5px 10px',
    marginRight: theme.spacing.s2,
  },
  month: {
    backgroundColor: theme.palette.themePrimary,
    color: theme.palette.black,
    padding: '5px 10px',
    marginRight: theme.spacing.s2,
    marginTop: theme.spacing.s2,
  },
}));

const weekDays = [
  null,
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];
const months = [
  null,
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const getOrdinalSuffix = (number) => {
  switch (number) {
    case 1:
      return 'st';
    case 2:
      return 'nd';
    case 3:
      return 'rd';
    default:
      return 'th';
  }
};

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
          <Stack horizontalAlign="center" verticalAlign="center">
            <Label style={{ display: 'block' }}>Days: </Label>
            <Stack horizontal horizontalAlign="center">
              {rule.weeklyDays.map((day) => (
                <Chip className={classes.weekDay}>
                  <Text variant="medium">
                    {weekDays[new Date(day).getDay()]}
                  </Text>
                </Chip>
              ))}
            </Stack>
          </Stack>
        );
      case constants.tasks.types.Monthly:
        return (
          <Stack horizontalAlign="center" verticalAlign="center">
            <Label>Occurs on: </Label>
            <Text variant="medium">
              {`${rule.monthlyOn}${getOrdinalSuffix(rule.monthlyOn)} ${
                rule.monthlyOnType
              } of the month`}
            </Text>
            <Label>Months:</Label>
            <Stack
              horizontal
              horizontalAlign="center"
              wrap
              tokens={{
                childrenGap: 4,
              }}
            >
              {rule.monthlyMonths.map((month) => (
                <Chip className={classes.month}>
                  <Text variant="medium">{months[month]}</Text>
                </Chip>
              ))}
            </Stack>
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
    weeklyDays: PropTypes.arrayOf(PropTypes.number),
    monthlyOn: PropTypes.number,
    monthlyOnType: PropTypes.string,
    monthlyMonths: PropTypes.arrayOf(PropTypes.number),
  }).isRequired,
};

const RuleDetails = ({
  id, editing, setEditing, setRules,
}) => {
  const classes = useStyles();
  const global = useContext(GlobalContext);
  const [rule] = useFetch(id && TaskRuleService.taskRulePath(id), null, {
    initialData: null,
  });
  const panel = useContext(PanelContext);
  const [data, setData] = useState({});
  const [users] = useFetch(
    UserService.baseUrl,
    {
      params: {
        teams: global.user.teams.map((t) => t.id),
      },
    },
    {
      callback: (dt) => dt.map((u) => ({
        key: u.id,
        data: u,
      })),
    },
  );
  const [flows] = useFetch(TaskFlowService.baseUrl, null, {
    callback: (flowsData) => flowsData.map((flow) => ({
      key: flow.id,
      data: flow,
    })),
  });

  const handleUpdate = useCallback(async () => {
    const update = { ...data };
    // If we changed users, map them to their id's
    if (data.users) {
      update.users = data.users.map((u) => u.id);
    }
    // If we changed flows, map them to the ids
    if (data.flows) {
      update.flows = data.flows.map((f) => f.id);
    }
    const result = await TaskRuleService.updateTaskRule(rule.id, update);
    setRules((prev) => prev.map((r) => (r.id === result.id ? result : r)));
    panel.setOpen(false);
    setEditing(false);
  }, [rule, data]);

  const handleDataChange = (field, func = (args) => args[0].target.value) => (
    ...args
  ) => {
    setData((prev) => ({
      ...prev,
      [field]: func(args),
    }));
  };

  const renderFooter = useCallback(
    () => (
      <>
        {editing ? (
          <PrimaryButton onClick={handleUpdate}>Save</PrimaryButton>
        ) : (
          <PrimaryButton onClick={() => setEditing(true)}>Edit</PrimaryButton>
        )}
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
    ),
    [panel, editing, handleUpdate],
  );

  /**
   * In case it's opened in a panel
   */
  useEffect(() => {
    if (panel.isPanel) {
      panel.setOnRenderFooter(() => renderFooter);
    }
  }, [panel, renderFooter]);

  return (
    rule && (
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
        <MaskedTextField
          label="Start time"
          disabled={!editing}
          mask="99:99"
          maskChar="0"
          value={DateUtils.getTimeText(
            data.taskStartTime ?? new Date(rule.taskStartTime),
          )}
          onChange={
            editing
              ? handleDataChange(
                'taskStartTime',
                (args) => new Date(DateUtils.getValidTimeStringUTC(args[1])),
              )
              : null
          }
        />
        <MaskedTextField
          label="End time"
          disabled={!editing}
          mask="99:99"
          maskChar="0"
          value={DateUtils.getEndTimeTextUTC(
            data.taskStartTime ?? new Date(rule.taskStartTime),
            data.taskDuration ?? rule.taskDuration,
          )}
          onChange={
            editing
              ? handleDataChange('taskDuration', (args) => {
                const validTime = DateUtils.getValidTimeStringUTC(args[1]);
                // Check if end time is after start time
                const startDT = DateTime.fromJSDate(
                  data.taskStartTime ?? new Date(rule.taskStartTime),
                );
                const endDT = DateTime.fromISO(validTime);
                if (endDT < startDT) return 0;
                return endDT.diff(startDT, 'minute').values.minutes;
              })
              : null
          }
        />
        {editing ? (
          <SpinButton
            label="Duration"
            labelPosition={Position.top}
            value={data.taskDuration ?? rule.taskDuration}
            onChange={handleDataChange('taskDuration', (args) => (Number.isNaN(+args[0].target.value) ? 0 : +args[0].target.value))}
            onIncrement={(val) => setData((prev) => ({
              ...prev,
              taskDuration: +val + 10,
            }))}
            onDecrement={(val) => {
              if (val > 10) {
                setData((prev) => ({
                  ...prev,
                  taskDuration: +val - 10,
                }));
              }
            }}
            type="number"
            min={0}
            max={1440}
            step={10}
          />
        ) : (
          <TextField
            label="Duration"
            disabled={!editing}
            value={data.taskDuration ?? rule.taskDuration}
            onChange={handleDataChange('taskDuration')}
            min="1"
            max="1440"
            type="number"
          />
        )}
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
              {editing ? (
                <TooltipHost
                  styles={{
                    root: {
                      width: '90%',
                    },
                  }}
                  content={
                    (
                      data.flows
                        ? data.flows?.length > 0
                        : rule.flows?.length > 0
                    )
                      ? 'Rule can be assigned to users or flows, but not both'
                      : ''
                  }
                >
                  <PeoplePicker
                    options={users}
                    disabled={
                      data.flows
                        ? data.flows?.length > 0
                        : rule.flows?.length > 0
                    }
                    onSelect={(item) => setData((prev) => {
                      if (prev.users) {
                        return {
                          ...prev,
                          users: prev.users.concat(item.data),
                        };
                      }
                      return {
                        ...prev,
                        users: rule.users.concat(item.data),
                      };
                    })}
                    onRemove={(item) => setData((prev) => {
                      if (prev.users) {
                        return {
                          ...prev,
                          users: prev.users.filter(
                            (u) => u.id !== item.data.id,
                          ),
                        };
                      }
                      return {
                        ...prev,
                        users: rule.users.filter(
                          (u) => u.id !== item.data.id,
                        ),
                      };
                    })}
                    selected={
                      data.users
                        ? data.users.map((u) => ({
                          key: u.id,
                          data: u,
                        }))
                        : rule.users.map((u) => ({
                          key: u.id,
                          data: u,
                        }))
                    }
                  />
                </TooltipHost>
              ) : (
                rule.users?.map((user) => (
                  <StackItem align="start" key={user.id}>
                    <Persona text={user.username} size={PersonaSize.size24} />
                  </StackItem>
                ))
              )}
            </Stack>
          </StackItem>
          <Separator vertical />
          <StackItem className={classes.userColumn} grow={1}>
            <Stack horizontalAlign="center">
              <Label>Flows</Label>
              {editing ? (
                <TooltipHost
                  styles={{
                    root: {
                      width: '90%',
                    },
                  }}
                  content={
                    (
                      data.users
                        ? data.users?.length > 0
                        : rule.users?.length > 0
                    )
                      ? 'Rule can be assigned to users or flows, but not both'
                      : ''
                  }
                >
                  <FlowPicker
                    style={{ width: '90%' }}
                    options={flows}
                    disabled={
                      data.users
                        ? data.users?.length > 0
                        : rule.users?.length > 0
                    }
                    showCheckboxes
                    showDeleteIcon={false}
                    onSelect={(item) => setData((prev) => {
                      if (prev.flows) {
                        return {
                          ...prev,
                          flows: prev.flows.concat(item.data),
                        };
                      }
                      return {
                        ...prev,
                        flows: rule.flows.concat(item.data),
                      };
                    })}
                    onRemove={(item) => setData((prev) => {
                      if (prev.flows) {
                        return {
                          ...prev,
                          flows: prev.flows.filter(
                            (u) => u.id !== item.data.id,
                          ),
                        };
                      }
                      return {
                        ...prev,
                        flows: rule.flows.filter(
                          (u) => u.id !== item.data.id,
                        ),
                      };
                    })}
                    selected={
                      data.flows
                        ? data.flows.map((u) => ({
                          key: u.id,
                          data: u,
                        }))
                        : rule.flows.map((u) => ({
                          key: u.id,
                          data: u,
                        }))
                    }
                  />
                </TooltipHost>
              ) : (
                rule.flows.map((f) => (
                  <Chip
                    style={{
                      backgroundColor: f.color ?? 'transparent',
                      padding: 3,
                      whiteSpace: 'pre-wrap',
                      width: '50%',
                      marginLeft: 32,
                      marginTop: 4,
                    }}
                  >
                    <Text variant="medium">{f.name}</Text>
                  </Chip>
                ))
              )}
            </Stack>
          </StackItem>
        </Stack>
        <Separator className={classes.separator}>Flags</Separator>
        <Checkbox
          checked={data.isBackgroundTask ?? rule.isBackgroundTask}
          label="Background"
          disabled={!editing}
          onChange={handleDataChange(
            'isBackgroundTask',
            (args) => args[0].target.checked,
          )}
        />
        <Checkbox checked={rule.isSharedTask} label="Shared" disabled />
        <Separator className={classes.separator}>Created</Separator>
        <Stack horizontalAlign="center">
          <Text variant="medium">{rule.createdUser?.username}</Text>
          <Text variant="medium">
            {new Date(rule.createdDate).toLocaleString()}
          </Text>
        </Stack>
      </Stack>
    )
  );
};

RuleDetails.propTypes = {
  id: PropTypes.string.isRequired,
  editing: PropTypes.bool.isRequired,
  setEditing: PropTypes.func.isRequired,
  setRules: PropTypes.func.isRequired,
};

export default RuleDetails;
