import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@fluentui/react-theme-provider';

const useStyles = makeStyles((theme) => ({
  chip: {
    borderRadius: '16px',
    textAlign: 'center',
    verticalAlign: 'middle',
  },
}));

const Chip = ({ style, children, className }) => {
  const classes = useStyles();
  return (
    <div className={`${className} ${classes.chip}`} style={style}>
      {children}
    </div>
  );
};

Chip.propTypes = {
  style: PropTypes.shape({}),
  className: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.any.isRequired,
};

Chip.defaultProps = {
  className: '',
  style: {},
};

export default Chip;
