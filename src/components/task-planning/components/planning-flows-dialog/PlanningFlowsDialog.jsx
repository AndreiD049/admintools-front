import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import {
  BasePickerListBelow, IconButton, Label, makeStyles, Stack, Text,
} from '@fluentui/react';
import Chip from '../../../shared/chip';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 300,
    minHeight: 200,
  },
  picker: {
    '& input': {
      backgroundColor: theme.palette.neutralLight,
      color: theme.palette.neutralPrimary,
    },
  },
  secondaryText: {
    color: theme.palette.neutralSecondaryAlt,
  },
  suggestion: {
    padding: theme.spacing.s1,
  },
  item: {
    marginTop: theme.spacing.s1,
  },
  colorBox: {
    width: 20,
    height: 20,
    marginRight: theme.spacing.s1,
  },
  focusPoint: {
    visibility: 'hidden',
    height: 0,
    width: 0,
    margin: 0,
    padding: 0,
    border: 'none',
  },
  removeIcon: {
    width: 32,
    height: 32,
  },
}));

const PlanningFlowsDialog = ({
  planning, options, addFlow, removeFlow, users, user,
}) => {
  const classes = useStyles();

  const validOptions = useMemo(() => {
    const selected = new Set(planning?.flows?.map((f) => f.id));
    const userTeams = new Set(
      users.find((u) => u.id === user)?.teams?.map((t) => t.id),
    );
    const active = options.filter((o) => o.data.isActive);
    const teamFlows = active.filter(
      (o) => o.data.teams.filter((t) => userTeams.has(t.id)).length > 0,
    );
    return teamFlows.filter((o) => !selected.has(o.data.id));
  }, [options, planning, users, user]);

  const renderSuggestionsItem = (item) => (
    <Stack key={item.key} className={classes.suggestion} horizontal verticalAlign="center">
      <div
        className={classes.colorBox}
        style={{
          backgroundColor: item?.data?.color ?? 'transparent',
        }}
      />
      <Stack horizontalAlign="start">
        <Text variant="mediumPlus">{item.data.name}</Text>
        <Text className={classes.secondaryText} variant="xSmall">{item.data.teams.map((t) => t.name).join(', ')}</Text>
      </Stack>
    </Stack>
  );

  const renderItem = (details) => (
    <Stack
      key={details.item.id}
      className={classes.item}
      horizontalAlign="center"
      verticalAlign="center"
      horizontal
    >
      <Chip
        style={{
          backgroundColor: details.item.color ?? 'transparent',
          padding: 3,
          whiteSpace: 'pre-wrap',
          width: '50%',
          marginLeft: 32,
        }}
      >
        <Text variant="medium">{details.item.name}</Text>
      </Chip>
      <IconButton
        className={classes.removeIcon}
        iconProps={{
          iconName: 'Delete',
        }}
        onClick={() => removeFlow(planning, details.item)}
      />
    </Stack>
  );

  const handleSelect = (item) => {
    addFlow(planning, item.data);
  };

  return (
    <div className={classes.root}>
      <input className={classes.focusPoint} />
      <Label>Select flows</Label>
      <BasePickerListBelow
        className={classes.picker}
        onRenderSuggestionsItem={renderSuggestionsItem}
        onResolveSuggestions={(filter) => validOptions
          .filter((o) => o.data.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1)}
        onRenderItem={renderItem}
        selectedItems={planning ? planning?.flows : []}
        onEmptyResolveSuggestions={() => validOptions}
        onItemSelected={handleSelect}
      />
    </div>
  );
};

PlanningFlowsDialog.propTypes = {
  planning: PropTypes.shape({
    flows: PropTypes.arrayOf(PropTypes.shape({})),
    user: PropTypes.shape({
      id: PropTypes.string,
    }).isRequired,
  }).isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  addFlow: PropTypes.func.isRequired,
  removeFlow: PropTypes.func.isRequired,
  users: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  user: PropTypes.string.isRequired,
};

export default PlanningFlowsDialog;
