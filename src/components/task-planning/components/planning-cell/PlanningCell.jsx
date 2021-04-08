import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Text } from '@fluentui/react';
import clsx from 'clsx';
import Chip from '../../../shared/chip/Chip';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.neutralLighter,
    height: '100%',
    textAlign: 'center',
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'center',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: theme.palette.themePrimary,
    },
  },
  selected: {
    backgroundColor: theme.palette.themeDark,
  },
  flowItem: {
    padding: 3,
  },
  noSelect: {
    userSelect: 'none',
  },
}));

const PlanningCell = ({
  userFlows, handleClick, handleInvoke, isSelected,
}) => {
  const classes = useStyles();

  return (
    <div
      role="button"
      tabIndex={0}
      className={clsx([classes.root, isSelected && classes.selected])}
      onClick={handleClick}
      onKeyDown={(evt) => evt.code === 'Enter' && handleClick()}
      onDoubleClick={handleInvoke}
    >
      {!userFlows?.flows || userFlows?.flows?.length === 0 ? (
        <Text className={classes.noSelect} variant="medium">
          -
        </Text>
      ) : (
        <ul>
          {Array.from(userFlows?.flows)?.map((f) => (
            <li className={classes.flowItem} key={f.id}>
              <Chip
                className={classes.noSelect}
                style={{
                  backgroundColor: f.color ?? 'transparent',
                  padding: 3,
                  whiteSpace: 'pre-wrap',
                }}
              >
                <Text variant="medium">{f.name}</Text>
              </Chip>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

PlanningCell.propTypes = {
  userFlows: PropTypes.shape({
    flows: PropTypes.arrayOf(PropTypes.shape({})),
  }),
  handleClick: PropTypes.func.isRequired,
  handleInvoke: PropTypes.func.isRequired,
  isSelected: PropTypes.bool.isRequired,
};

PlanningCell.defaultProps = {
  userFlows: null,
};

export default PlanningCell;
