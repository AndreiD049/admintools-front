import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@fluentui/react-theme-provider';
import {
  Checkbox,
  ComboBox, Dropdown, Position, SpinButton, TextField,
} from '@fluentui/react';
import constants from '../../../../utils/constants';
import DatePicker from '../../../shared/date-picker';
import UserService from '../../../../services/UserService';
import Autocomplete from '../../../shared/autocomplete/Autocomplete';
import AddRuleType from '../add-rule-type/AddRuleType';
import TaskRuleService from '../../../../services/tasks/TaskRuleService';
import NotificationService from '../../../../services/NotificationService';
import { useFetch } from '../../../../services/hooks';

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
  const [users] = useFetch(UserService.teamUsersPath);
  const [userOptions, setUserOptions] = useState([]);
  const [data, setData] = useState({
    title: '',
    description: '',
    type: tasks.types.Daily,
    dailyType: tasks.DayTypes.Workday,
    isBackgroundTask: false,
    isSharedTask: false,
    taskStartTime: new Date(),
    validFrom: new Date(),
    taskDuration: 60,
    users: [],
    flows: [],
  });
  const typeOptions = useRef(Object.keys(tasks.types).map((t) => ({
    key: t,
    text: t,
  })));
  const timeOptions = useRef(constants.timeOptions);

  useEffect(() => {
    setUserOptions(users.map((user) => ({
      key: user.id,
      text: user.username,
      data: user,
    })));
  }, [users]);

  const setValue = (field) => (evt) => {
    setData((prev) => ({
      ...prev,
      [field]: evt.target.value,
    }));
  };

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

  const handleSelectTime = (evt, option) => {
    const [hours, minutes] = option.text.split(':').map((e) => +e);
    if (hours !== undefined && minutes !== undefined) {
      setData((prev) => {
        const copy = new Date(prev.taskStartTime);
        copy.setHours(hours);
        copy.setMinutes(minutes);
        copy.setSeconds(0);
        return {
          ...prev,
          taskStartTime: copy,
        };
      });
    }
  };

  const getNearestTime = (date) => `${(`0${date.getHours()}`).slice(-2)}:${(`0${Math.round(date.getMinutes() / 10) * 10}`).slice(-2)}`;

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    if (data.validFrom && data.validTo && data.validTo < data.validFrom) {
      await NotificationService.notifyError("'Valid From' cannot be bigger than 'Valid To'");
      return;
    }
    const result = await TaskRuleService.createTaskRule({
      ...data,
      users: data.users.map((u) => u.data.id),
    });
    setRules((prev) => [...prev, result]);
    setOpen(false);
  };

  return (
    <form className={classes.form} id="add-task-rule-form" onSubmit={handleSubmit}>
      <TextField
        required
        label="Title"
        value={data.title}
        onChange={setValue('title')}
        name="task-rule-title"
      />
      <TextField
        label="Description"
        multiline
        name="task-rule-description"
        onChange={setValue('description')}
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
      <ComboBox
        label="Start time"
        options={timeOptions.current}
        selectedKey={getNearestTime(data.taskStartTime)}
        autoComplete="on"
        onChange={handleSelectTime}
        calloutProps={{
          calloutMaxHeight: 400,
        }}
        useComboBoxAsMenuWidth
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
      <Autocomplete
        label="Assigned to (users)"
        options={userOptions}
        selected={data.users}
        onItemSelected={(user) => setData((prev) => ({
          ...prev,
          users: user(prev.users),
        }))}
        required
      />
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
