import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid } from '@material-ui/core';

const useStyles = makeStyles({
  main: {
    height: 'calc(100vh - 128px)',
  },
});

export const Main = (props) => {
  const classes = useStyles();

  return (
    <Grid item xs={12}>
      <Container component="main" maxWidth="lg" className={classes.main}>
        {props.children}
      </Container>
    </Grid>
  );
};

Main.propTypes = {
  children: PropTypes.element.isRequired,
};
