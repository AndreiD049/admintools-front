import {
  Position,
  SpinButton,
  TextField,
  DatePicker,
  MaskedTextField,
} from '@fluentui/react';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { DateTime } from 'luxon';
import DateUtils from '../../../../utils/date';
import TaskService from '../../../../services/tasks/TaskService';
import UserService from '../../../../services/UserService';
import { useFetch } from '../../../../services/hooks';
import PeoplePicker from '../../../shared/people-picker/PeoplePicker';
import NotificationService from '../../../../services/NotificationService';

const AddTask = ({ setOpen, handleAdd }) => {
  const [users] = useFetch(UserService.teamUsersPath, null, {
    callback: (dt) => dt.map((user) => ({
      key: user.id,
      data: user,
    })),
  });
  const [data, setData] = useState({
    title: '',
    description: '',
    remarks: '',
    expectedStartDate: DateUtils.getNearestTimeUTC(
      DateUtils.transform2UTCDate(new Date()),
    ).toJSDate(),
    duration: 60,
    isBackgroundTask: false,
    assignedTo: [],
  });

  const handleDataChange = (field, func = (args) => args[0].target.value) => (
    ...args
  ) => {
    setData((prev) => ({
      ...prev,
      [field]: func(args),
    }));
  };

  const handleSubmit = async (evt) => {
    evt.persist();
    evt.preventDefault();
    if (data.assignedTo.length < 1) {
      NotificationService.notifyInfo('At least one assigned person is required');
      return;
    }
    const result = await TaskService.createTask({
      title: data.title,
      description: data.description,
      remarks: data.remarks,
      expectedStartDate: data.expectedStartDate,
      duration: data.duration,
      assignedTo: data.assignedTo.map((u) => u.id),
      isBackgroundTask: data.isBackgroundTask,
      zone: DateTime.local().zoneName,
    });
    if (result) {
      handleAdd(result);
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
          value={data.title}
          onChange={handleDataChange('title')}
        />
        <TextField
          label="Description"
          value={data.description}
          onChange={handleDataChange('description')}
        />
        <TextField
          label="Remarks"
          value={data.remarks}
          multiline
          onChange={handleDataChange('remarks')}
        />
        <DatePicker
          label="Start date"
          value={data.expectedStartDate}
          onSelectDate={(date) => setData((prev) => ({
            ...prev,
            expectedStartDate: DateUtils.setDateFromTo(
              date,
              prev.expectedStartDate,
            ),
          }))}
        />
        <MaskedTextField
          label="Start time"
          mask="99:99"
          maskChar="0"
          value={DateTime.fromJSDate(data.expectedStartDate)
            .toUTC()
            .toFormat('HH:mm')}
          onChange={handleDataChange('expectedStartDate', (args) => DateTime.fromISO(
            DateUtils.getValidTimeStringUTC(args[1], data.expectedStartDate),
          ).toJSDate())}
        />
        <MaskedTextField
          label="End time"
          mask="99:99"
          maskChar="0"
          value={DateUtils.getEndTimeTextUTC(
            data.expectedStartDate,
            data.duration,
          )}
          onChange={handleDataChange('duration', (args) => {
            const validTime = DateUtils.getValidTimeStringUTC(args[1], data.expectedStartDate);
            // Check if end time is after start time
            const startDT = DateTime.fromJSDate(data.expectedStartDate);
            const endDT = DateTime.fromISO(validTime);
            if (endDT < startDT) return 0;
            return endDT.diff(startDT, 'minute')?.values?.minutes ?? 0;
          })}
        />
        <SpinButton
          label="Duration (min)"
          value={data.duration}
          onChange={(evt) => {
            let val = +evt.target.value;
            if (Number.isNaN(val)) val = 0;
            setData((prev) => ({ ...prev, duration: val }));
          }}
          onIncrement={(val) => setData((prev) => ({ ...prev, duration: +val + 10 }))}
          onDecrement={(val) => {
            if (val > 10) {
              setData((prev) => ({
                ...prev,
                duration: +val - 10,
              }));
            }
          }}
          min={0}
          step={10}
          incrementButtonAriaLabel="Increase value by 10"
          decrementButtonAriaLabel="Decrease value by 10"
          labelPosition={Position.top}
        />
        <PeoplePicker
          label="Assigned to"
          options={users}
          onSelect={(u) => setData((prev) => ({
            ...prev,
            assignedTo: prev.assignedTo.concat(u.data),
          }))}
          onRemove={(u) => setData((prev) => ({
            ...prev,
            assignedTo: prev.assignedTo.filter(
              (user) => user.id !== u.data.id,
            ),
          }))}
          selected={data.assignedTo?.map((u) => ({
            key: u.id,
            data: u,
          }))}
        />
      </form>
    </>
  );
};

AddTask.propTypes = {
  setOpen: PropTypes.func,
  handleAdd: PropTypes.func.isRequired,
};

AddTask.defaultProps = {
  setOpen: null,
};

export default AddTask;
