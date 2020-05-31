import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { CircularProgress } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    height: '100vh',
    width: '100%',
    position: 'fixed',
    top: 0,
    right: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
    overflow: 'hidden',
  },
});

export const Loading = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress variant="indeterminate" color="primary" />
    </div>
  );
};
