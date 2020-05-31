import React from 'react';

import { Typography, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '80vh',
  },
});

export const ContactsPage = () => {
  const classes = useStyles();

  return (
    <Container component="div" className={classes.root}>
      <Typography variant="h2" color="primary">
        Contacts Page
      </Typography>
    </Container>
  );
};
