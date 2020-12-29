import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@fluentui/react-theme-provider';

const useStyles = makeStyles((theme) => ({
  box: {
    padding: theme.spacing.l2,
  },
}));

const Box = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.box}>
      {children}
    </div>
  );
};

Box.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Box;
