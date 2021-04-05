import {
  makeStyles, Text, Stack, PrimaryButton,
} from '@fluentui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-grid-system';
import { ReactComponent as BoredImage } from './assets/bored.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    '& #cat_bg': {
      fill: theme.palette.themePrimary,
    },
  },
  image: {
    width: '35%',
    height: '400px',
    '@media (max-width: 768px)': {
      width: '80%',
      height: '200px',
    },
  },
  loginBtn: {
    marginTop: '10px !important',
  },
}));

const LoginPage = () => {
  const classes = useStyles();

  return (
    <Container md className={classes.root}>
      <Stack verticalAlign="center" horizontalAlign="center">
        <BoredImage className={classes.image} />
        <Text block variant="xLarge">You are not logged in</Text>
        <Link className={classes.loginBtn} to="/auth/login" component={PrimaryButton}>Log In</Link>
      </Stack>
    </Container>
  );
};

export default LoginPage;
