import React, { useMemo, useState } from 'react';
import { Col, Container, Row } from 'react-grid-system';
import {
  Calendar,
  ComboBox,
  CommandBar,
  DateRangeType,
  DialogType,
  Icon,
  makeStyles,
  PrimaryButton,
  Separator,
  Stack,
} from '@fluentui/react';
import { DateTime } from 'luxon';
import PageHeader from '../shared/page-header';
import PlanningMatrix from './components/planning-matrix/PlanningMatrix';
import { useFetch } from '../../services/hooks';
import TeamService from '../../services/TeamService';
import TaskPlanningService from '../../services/tasks/TaskPlanningService';
import useLocalStorageState from '../ui-hooks/useLocalStorage';
import UserService from '../../services/UserService';
import DateUtils from '../../utils/date';
import useDialog from '../ui-hooks/useDialog';
import PlanningFlowsDialog from './components/planning-flows-dialog';
import TaskFlowService from '../../services/tasks/TaskFlowService';

const useStyles = makeStyles((theme) => ({
  searchIcon: {
    color: theme.palette.themePrimary,
    marginLeft: theme.spacing.s1,
    marginRight: theme.spacing.s1,
  },
}));

const TaskPlanning = () => {
  const classes = useStyles();
  const [date, setDate] = useState(new Date());
  const [dates, setDates] = useState(DateUtils.getWeekFromDate(date, 1));
  const [flows] = useFetch(TaskFlowService.baseUrl);
  const [selectedCell, setSelectedCell] = useState(null);
  const [teams] = useFetch(
    TeamService.baseUrl,
    null, [], [],
    (data) => data.map((team) => ({
      key: team.id,
      text: team.name,
      data: team,
    })),
  );
  const [selectedTeam, setSelectedTeam] = useLocalStorageState('TaskPlanningSelectedTeam', null);
  const [users] = useFetch(
    UserService.baseUrl,
    {
      params: {
        teams: [selectedTeam],
      },
    }, [], [selectedTeam],
  );
  const [data, setData] = useFetch(
    TaskPlanningService.baseUrl,
    {
      params: {
        dateFrom: DateUtils.makeUTCDateOnly(dates[0]),
        dateTo: DateUtils.makeUTCDateOnly(dates[dates.length - 1]),
        teams: [selectedTeam],
      },
    },
    [],
    [selectedTeam, dates],
  );

  const userFlowMap = useMemo(() => {
    const result = new Map();
    // Insert all users in the map
    users.forEach((user) => result.set(user.id, new Map()));
    // For each planning item, assign info to the appropriate user
    data.forEach((item) => {
      if (result.has(item.user?.id)) {
        result.get(item.user.id).set(DateTime.fromISO(item.date).toUTC().toISODate(), item);
      }
    });
    return result;
  }, [data, users]);

  const handleAddFlow = async (planning, flow) => {
    if (!planning) {
      const result = await TaskPlanningService
        .createPlanning(selectedCell.date, selectedCell.user, [flow]);
      setData((prev) => prev.concat(result));
    } else {
      const result = await TaskPlanningService
        .addFlowToPlanning(planning.id, flow.id);
      setData((prev) => prev.map((plan) => (plan.id === result.id ? result : plan)));
    }
  };

  const handleRemoveFlow = async (planning, flow) => {
    if (planning?.id) {
      const result = await TaskPlanningService.removeFromFromPlanning(planning.id, flow.id);
      setData((prev) => prev.map((plan) => (plan.id === result.id ? result : plan)));
    }
  };

  const flowsDialog = useDialog(
    PlanningFlowsDialog,
    {
      title: 'Details',
      type: DialogType.largeHeader,
      dialogFooter: () => (
        // eslint-disable-next-line jsx-a11y/tabindex-no-positive
        <PrimaryButton tabIndex={1} onClick={() => flowsDialog.setVisible(false)} text="Close" />
      ),
    }, {
      planning: userFlowMap.get(selectedCell?.user)?.get(selectedCell?.date),
      options: flows.map((f) => ({
        key: f.id,
        data: f,
      })),
      addFlow: handleAddFlow,
      removeFlow: handleRemoveFlow,
      users,
      user: selectedCell?.user,
    },
  );

  const handleInvoke = () => {
    flowsDialog.setVisible(true);
  };

  const handleSelectWeek = (selDate, selDates) => {
    setDate(selDate);
    setDates(selDates);
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
          {
            key: 'teams',
            text: 'Teams',
            iconProps: {
              iconName: 'Search',
            },
            onRender: () => (
              <Stack horizontal horizontalAlign="center" verticalAlign="center">
                <Icon className={classes.searchIcon} iconName="ProfileSearch" />
                <ComboBox
                  placeholder="Teams"
                  autoComplete="on"
                  options={teams}
                  selectedKey={selectedTeam}
                  openOnKeyboardFocus
                  onChange={(evt, option) => setSelectedTeam(option.key)}
                  calloutProps={{
                    calloutMaxHeight: 500,
                  }}
                  useComboBoxAsMenuWidth
                />
              </Stack>
            ),
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
          showGoToToday
          value={date}
          onSelectDate={handleSelectWeek}
          firstDayOfWeek={1}
        />
        <Col>
          <PlanningMatrix
            userFlowMap={userFlowMap}
            users={users}
            dates={dates}
            selectedCell={selectedCell}
            setSelectedCell={setSelectedCell}
            handleInvoke={handleInvoke}
          />
        </Col>
      </Row>
      {flowsDialog.render}
    </Container>
  );
};

export default TaskPlanning;
