import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@fluentui/react-theme-provider';
import { Text } from '@fluentui/react';
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
}));

const PlanningCell = ({
  userinfo, date, flows, handleClick, isSelected,
}) => {
  const classes = useStyles();
  const [userFlows, setUserFlows] = useState([]);
  useEffect(() => {
    setUserFlows(flows.filter((flow) => flow.user === userinfo.id && flow.date === date));
  }, [userinfo, date, flows]);

  return (
    <div
      role="button"
      tabIndex={0}
      className={clsx([classes.root, isSelected && classes.selected])}
      onClick={handleClick}
      onKeyDown={(evt) => evt.code === 'Enter' && handleClick()}
    >
      {
        userFlows.length === 0
          ? <Text variant="medium">-</Text>
          : (
            <ul>
              {userFlows.map((f) => (
                <li className={classes.flowItem} key={f.id}>
                  <Chip
                    style={{
                      backgroundColor: f.color ?? 'transparent',
                      padding: 3,
                    }}
                  >
                    <Text variant="medium">{f.title}</Text>
                  </Chip>
                </li>
              ))}
            </ul>
          )
      }
    </div>
  );
};

PlanningCell.propTypes = {
  userinfo: PropTypes.shape({
    id: PropTypes.string,
    username: PropTypes.string,
  }).isRequired,
  date: PropTypes.string.isRequired,
  flows: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  handleClick: PropTypes.func.isRequired,
  isSelected: PropTypes.bool.isRequired,
};

export default PlanningCell;
