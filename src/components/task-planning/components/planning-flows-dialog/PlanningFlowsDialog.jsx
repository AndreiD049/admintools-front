import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@fluentui/react';
import FlowPicker from '../flow-picker';

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

  const handleSelect = (item) => {
    addFlow(planning, item.data);
  };

  const handleRemove = (item) => {
    removeFlow(planning, item.data);
  };

  return (
    <div className={classes.root}>
      <input className={classes.focusPoint} />
      <FlowPicker
        options={validOptions}
        showCheckboxes={false}
        showDeleteIcon
        onSelect={handleSelect}
        onRemove={handleRemove}
        selected={planning ? planning?.flows?.map((f) => ({ key: f.id, data: f })) : []}
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
