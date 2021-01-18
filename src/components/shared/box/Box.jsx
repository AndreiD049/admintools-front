import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@fluentui/react-theme-provider';

const useStyles = makeStyles((theme) => ({
  box: {
    padding: theme.spacing.l2,
  },
}));

const Box = ({ children, style, className }) => {
  const classes = useStyles();
  return (
    <div style={style} className={`${classes.box} ${className}`}>
      {children}
    </div>
  );
};

Box.propTypes = {
  style: PropTypes.shape({}),
  className: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

Box.defaultProps = {
  style: {},
  className: '',
};

export default Box;
