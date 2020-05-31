import React from 'react';
import { Link } from 'react-router-dom';

import { Typography, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { ButtonComponent } from '../_shared/Button';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '80vh',
  },
  button: {
    textDecoration: 'none',
    marginTop: '40px',
  },
});

export const NotFound = () => {
  const classes = useStyles();

  return (
    <Container component="div" className={classes.root}>
      <Typography variant="h1" color="primary">
        Page Not Found
      </Typography>
      <Link to="/books" className={classes.button}>
        <ButtonComponent variant="outlined" color="primary">
          Click to return to the main page
        </ButtonComponent>
      </Link>
    </Container>
  );
};
