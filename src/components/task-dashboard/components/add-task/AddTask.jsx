import {
  ComboBox,
  Position,
  SpinButton,
  TextField,
  DatePicker,
} from '@fluentui/react';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { DateTime } from 'luxon';
import TaskService from '../../../../services/tasks/TaskService';
import UserService from '../../../../services/UserService';
import Autocomplete from '../../../shared/autocomplete/Autocomplete';
import constants from '../../../../utils/constants';
import { useFetch } from '../../../../services/hooks';

const AddTask = ({ setOpen, setTasks }) => {
  const [options] = useState(constants.timeOptions);
  const [users] = useFetch(UserService.teamUsersPath);
  const [userOptions, setUserOptions] = useState([]);
  const [values, setValues] = useState({
    title: '',
    description: '',
    remarks: '',
    expectedStartDate: new Date(),
    expectedStartTime: '00:00',
    duration: 60,
    isBackgroundTask: false,
    selectedUsers: [],
  });

  useEffect(() => {
    setUserOptions(users.map((user) => ({
      key: user.id,
      text: user.username,
      data: user,
    })));
  }, [users]);

  const handleUpdate = (key) => (evt) => {
    setValues((prev) => ({ ...prev, [key]: evt.target.value }));
  };

  const handleSubmit = async (evt) => {
    evt.persist();
    evt.preventDefault();
    const dt = DateTime.fromJSDate(values.expectedStartDate);
    const [hr, min] = values.expectedStartTime.split(':');
    const expDate = DateTime.utc(dt.year, dt.month, dt.day, +hr, +min, 0, 0);
    const result = await TaskService.createTask({
      title: values.title,
      description: values.description,
      remarks: values.remarks,
      expectedStartDate: expDate.toJSDate(),
      expectedFinishDate: expDate.plus({ minute: values.duration }).toJSDate(),
      assignedTo: values.selectedUsers.map((u) => u.data.id),
      isBackgroundTask: values.isBackgroundTask,
      zone: DateTime.local().zoneName,
    });
    if (result) {
      setTasks((prev) => {
        if (prev.length) {
          return prev.concat(TaskService.createTaskObject(result));
        }
        return prev;
      });
    }
    if (setOpen) {
      setOpen(false);
    }
  };

  return (
    <>
      <form id="create-task-form" onSubmit={handleSubmit}>
        <TextField
          required
          label="Title"
          value={values.title}
          onChange={handleUpdate('title')}
        />
        <TextField
          label="Description"
          value={values.description}
          onChange={handleUpdate('description')}
        />
        <TextField
          label="Remarks"
          value={values.remarks}
          multiline
          onChange={handleUpdate('remarks')}
        />
        <DatePicker
          label="Start date"
          value={values.expectedStartDate}
          onSelectDate={(date) => setValues((prev) => ({ ...prev, expectedStartDate: date }))}
        />
        <ComboBox
          label="Start time"
          options={options}
          selectedKey={values.expectedStartTime}
          autoComplete="on"
          onChange={
            (evt, option) => setValues((prev) => ({ ...prev, expectedStartTime: option.text }))
          }
          calloutProps={{
            calloutMaxHeight: 400,
          }}
          useComboBoxAsMenuWidth
        />
        <SpinButton
          label="Duration (min)"
          value={values.duration}
          onChange={(evt) => {
            let val = +evt.target.value;
            if (Number.isNaN(val)) val = 0;
            setValues((prev) => ({ ...prev, duration: val }));
          }}
          onIncrement={(val) => setValues((prev) => ({ ...prev, duration: (+val + 10) }))}
          onDecrement={(val) => {
            if (val > 10) setValues((prev) => ({ ...prev, duration: (+val - 10) }));
          }}
          min={0}
          step={10}
          incrementButtonAriaLabel="Increase value by 10"
          decrementButtonAriaLabel="Decrease value by 10"
          labelPosition={Position.top}
        />
        <Autocomplete
          label="Assigned to"
          options={userOptions}
          selected={values.selectedUsers}
          onItemSelected={(data) => setValues((prev) => ({
            ...prev,
            selectedUsers: data(prev.selectedUsers),
          }))}
          required
        />
      </form>
    </>
  );
};

AddTask.propTypes = {
  setOpen: PropTypes.func,
  setTasks: PropTypes.func.isRequired,
};

AddTask.defaultProps = {
  setOpen: null,
};

export default AddTask;
