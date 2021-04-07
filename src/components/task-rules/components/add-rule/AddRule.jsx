import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Checkbox,
  Dropdown,
  makeStyles,
  Position,
  SpinButton,
  TextField,
  DatePicker,
  Separator,
  MaskedTextField,
  TooltipHost,
} from '@fluentui/react';
import { DateTime } from 'luxon';
import constants from '../../../../utils/constants';
import UserService from '../../../../services/UserService';
import AddRuleType from '../add-rule-type/AddRuleType';
import TaskRuleService from '../../../../services/tasks/TaskRuleService';
import NotificationService from '../../../../services/NotificationService';
import { useFetch } from '../../../../services/hooks';
import DateUtils from '../../../../utils/date';
import PeoplePicker from '../../../shared/people-picker/PeoplePicker';
import FlowPicker from '../../../task-planning/components/flow-picker';
import TaskFlowService from '../../../../services/tasks/TaskFlowService';

const { tasks } = constants;

const useStyles = makeStyles((theme) => ({
  form: {
    '& > * + *': {
      paddingTop: theme.spacing.s1,
    },
  },
}));

const AddRule = ({ setRules, setOpen }) => {
  const classes = useStyles();
  const [users] = useFetch(UserService.teamUsersPath,
    null, {
      callback: (dt) => dt.map((user) => ({
        key: user.id,
        data: user,
      })),
    });
  const [flows] = useFetch(TaskFlowService.baseUrl,
    null, {
      callback: (dt) => dt.map((flow) => ({
        key: flow.id,
        data: flow,
      })),
    });
  const [data, setData] = useState({
    title: '',
    description: '',
    type: tasks.types.Daily,
    dailyType: tasks.DayTypes.Workday,
    isBackgroundTask: false,
    isSharedTask: false,
    taskStartTime: DateUtils.getNearestTimeUTC(DateUtils.transform2UTCDate(new Date())).toJSDate(),
    validFrom: new Date(),
    taskDuration: 60,
    users: [],
    flows: [],
    zone: DateTime.local().zoneName,
  });
  const typeOptions = useRef(Object.keys(tasks.types).map((t) => ({
    key: t,
    text: t,
  })));

  const handleTypeChange = (evt, item) => {
    setData((prev) => ({
      ...prev,
      type: item.key,
    }));
  };

  const handleSelectDate = (field) => (date) => {
    setData((prev) => ({
      ...prev,
      [field]: new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0)),
    }));
  };

  const handleDataChange = (field, func = (args) => args[0].target.value) => (...args) => {
    setData((prev) => ({
      ...prev,
      [field]: func(args),
    }));
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    if (data.validFrom && data.validTo && data.validTo < data.validFrom) {
      await NotificationService.notifyError("'Valid From' cannot be bigger than 'Valid To'");
      return;
    }
    // Send weeklyDays as an Array of dates instead of numbers
    if (data.weeklyDays && data.weeklyDays.length) {
      data.weeklyDays = data.weeklyDays.map((day) => {
        const date = DateTime.local().toUTC().set({
          weekday: day,
        });
        return date;
      });
    }
    if (data.monthlyMonths && data.monthlyMonths.length) {
      data.monthlyMonths = data.monthlyMonths.map((month) => {
        const date = new Date(2020, 1, 1);
        date.setMonth(month);
        date.setHours(data.taskStartTime.getHours());
        date.setMinutes(data.taskStartTime.getMinutes());
        return date;
      });
    }
    const payload = {
      ...data,
    };
    delete payload.flows;
    delete payload.users;
    if (data.users.length > 0) payload.users = data.users.map((u) => u.id);
    if (data.flows.length > 0) payload.flows = data.flows.map((f) => f.id);
    const result = await TaskRuleService.createTaskRule(payload);
    setRules((prev) => [...prev, result]);
    setOpen(false);
  };

  return (
    <form className={classes.form} id="add-task-rule-form" onSubmit={handleSubmit}>
      <TextField
        required
        label="Title"
        value={data.title}
        onChange={handleDataChange('title')}
        name="task-rule-title"
      />
      <TextField
        label="Description"
        multiline
        name="task-rule-description"
        onChange={handleDataChange('description')}
        value={data.description}
      />
      <Dropdown
        label="Type"
        selectedKey={data.type}
        onChange={handleTypeChange}
        options={typeOptions.current}
        name="task-rule-type"
      />
      <AddRuleType data={data} setData={setData} />
      <MaskedTextField
        label="Start time"
        mask="99:99"
        maskChar="0"
        value={DateTime.fromJSDate(data.taskStartTime).toUTC().toFormat('HH:mm')}
        onChange={handleDataChange('taskStartTime', (args) => DateTime.fromISO(DateUtils.getValidTimeStringUTC(args[1])).toJSDate())}
      />
      <MaskedTextField
        label="End time"
        mask="99:99"
        maskChar="0"
        value={DateUtils.getEndTimeTextUTC(
          data.taskStartTime,
          data.taskDuration,
        )}
        onChange={
              handleDataChange('taskDuration', (args) => {
                const validTime = DateUtils.getValidTimeStringUTC(args[1]);
                // Check if end time is after start time
                const startDT = DateTime.fromJSDate(data.taskStartTime);
                const endDT = DateTime.fromISO(validTime);
                if (endDT < startDT) return 0;
                return endDT.diff(startDT, 'minute')?.values?.minutes ?? 0;
              })
        }
      />
      <SpinButton
        label="Duration (min)"
        value={data.taskDuration}
        onChange={(evt) => {
          let val = +evt.target.value;
          if (Number.isNaN(val)) val = 0;
          setData((prev) => ({ ...prev, taskDuration: val }));
        }}
        onIncrement={(val) => setData((prev) => ({ ...prev, taskDuration: (+val + 10) }))}
        onDecrement={(val) => {
          if (val > 10) setData((prev) => ({ ...prev, taskDuration: (+val - 10) }));
        }}
        min={0}
        step={10}
        incrementButtonAriaLabel="Increase value by 10"
        decrementButtonAriaLabel="Decrease value by 10"
        labelPosition={Position.top}
      />
      <DatePicker
        required
        label="Valid From"
        value={data.validFrom}
        onSelectDate={handleSelectDate('validFrom')}
      />
      <DatePicker
        label="Valid To"
        value={data.validTo}
        onSelectDate={handleSelectDate('validTo')}
      />
      <Checkbox
        className={classes.checkbox}
        label="Background"
        value={data.isBackgroundTask}
        onChange={(ev, checked) => setData((prev) => ({
          ...prev,
          isBackgroundTask: checked,
        }))}
      />
      <Checkbox
        className={classes.checkbox}
        label="Shared"
        value={data.isSharedTask}
        onChange={(ev, checked) => setData((prev) => ({
          ...prev,
          isSharedTask: checked,
        }))}
      />
      <TooltipHost
        styles={{
          root: {
            width: '90%',
          },
        }}
        content={
          data.flows?.length > 0
            ? 'Rule can be assigned to users or flows, but not both'
            : ''
          }
      >
        <PeoplePicker
          label="Assigned to (Users)"
          options={users}
          disabled={data.flows?.length > 0}
          onSelect={(u) => setData((prev) => ({
            ...prev,
            users: prev.users.concat(u.data),
          }))}
          onRemove={(u) => setData((prev) => ({
            ...prev,
            users: prev.users.filter((user) => user.id !== u.data.id),
          }))}
          selected={data.users?.map((u) => ({ key: u.id, data: u }))}
        />
      </TooltipHost>
      <Separator />
      <TooltipHost
        styles={{
          root: {
            width: '90%',
          },
        }}
        content={
          data.users?.length > 0
            ? 'Rule can be assigned to users or flows, but not both'
            : ''
          }
      >
        <FlowPicker
          label="Assigned to (Flows)"
          options={flows}
          disabled={data.users?.length > 0}
          onSelect={(f) => setData((prev) => ({
            ...prev,
            flows: prev.flows?.concat(f.data),
          }))}
          onRemove={(u) => setData((prev) => ({
            ...prev,
            flows: prev.flows?.filter((flow) => flow.id !== u.data.id),
          }))}
          selected={data.flows?.map((f) => ({ key: f.id, data: f }))}
        />
      </TooltipHost>
    </form>
  );
};

AddRule.propTypes = {
  setRules: PropTypes.func.isRequired,
  setOpen: PropTypes.func,
};

AddRule.defaultProps = {
  setOpen: null,
};

export default AddRule;
