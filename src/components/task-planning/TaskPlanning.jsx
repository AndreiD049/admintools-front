import React, { useState } from 'react';
import { makeStyles } from '@fluentui/react-theme-provider';
import { Col, Container, Row } from 'react-grid-system';
import { CommandBar, DateRangeType, Separator } from '@fluentui/react';
import PageHeader from '../shared/page-header';
import Calendar from '../shared/Calendar';
import PlanningMatrix from './components/planning-matrix/PlanningMatrix';

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const TaskPlanning = () => {
  const classes = useStyles();
  const [date, setDate] = useState(new Date());
  const [dates, setDates] = useState([new Date()]);
  const [selectedCell, setSelectedCell] = useState(null);

  const handleSelectWeek = (selDate, selDates) => {
    setDate(selDate);
    setDates(selDates);
  };

  const data = {
    users: [
      {
        id: '_1234123',
        username: 'andrei.dimitrascu.94@gmailc.com',
      },
      {
        id: '_1234124',
        username: 'john.dimitrascu.94@gmailc.com',
      },
      {
        id: '66666666',
        username: 'jane.dimitrascu.94@gmailc.com',
      },
      {
        id: '66666667',
        username: 'jane.doe.94@gmailc.com',
      },
    ],
    dates,
    flows: [
      {
        id: '1234', date: new Date('2021-03-03').toLocaleDateString(), user: '_1234123', title: 'Inbound', color: 'yellowGreen',
      },
      {
        id: '1234', date: new Date('2021-03-03').toLocaleDateString(), user: '_1234123', title: 'Outbound', color: 'salmon',
      },
      {
        id: '1234', date: new Date('2021-03-03').toLocaleDateString(), user: '_1234124', title: 'Inbound', color: 'yellowGreen',
      },
      {
        id: '1234', date: new Date('2021-03-05').toLocaleDateString(), user: '_1234123', title: 'Inbound', color: 'yellowGreen',
      },
    ],
  };

  return (
    <Container md>
      <Row>
        <Col>
          <PageHeader text="Task Planning" />
        </Col>
      </Row>
      <Separator />
      <CommandBar
        items={[
          {
            key: 'add',
            text: 'Add',
            iconProps: {
              iconName: 'Add',
            },
            disabled: selectedCell === null,
          },
          {
            key: 'copy',
            text: 'Copy',
            iconProps: {
              iconName: 'Copy',
            },
            disabled: selectedCell === null,
          },
          {
            key: 'paste',
            text: 'Paste',
            iconProps: {
              iconName: 'Paste',
            },
            disabled: selectedCell === null,
          },
          {
            key: 'copymult',
            text: 'Copy mult.',
            iconProps: {
              iconName: 'Copy',
            },
            disabled: selectedCell === null,
          },
        ]}
      />
      <Separator />
      <Row>
        <Calendar
          isMonthPickerVisible={false}
          dateRangeType={DateRangeType.Week}
          showWeekNumbers
          showSixWeeksByDefault
          showGoToToday={false}
          value={date}
          onSelectDate={handleSelectWeek}
          firstDayOfWeek={1}
        />
        <Col>
          <PlanningMatrix
            data={data}
            selectedCell={selectedCell}
            setSelectedCell={setSelectedCell}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default TaskPlanning;
