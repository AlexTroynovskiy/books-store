import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, AppBar, Toolbar, Link, Typography, Box, Divider } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  footer: {
    position: 'relative',
  },
  appBar: {
    top: 'auto',
    bottom: 0,
  },
  getBooks: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

export const Footer = () => {
  const classes = useStyles();
  const preventMockClick = (event) => event.preventDefault();

  return (
    <Grid item xs={12} className={classes.footer}>
      <AppBar position="fixed" className={classes.appBar} color="default" component="footer">
        <Divider />
        <Toolbar disableGutters>
          <Container maxWidth="lg">
            <Grid container>
              <Grid item xs={4} container spacing={2}>
                <Grid item xs={6}>
                  <Typography>
                    <Link href="#" onClick={preventMockClick}>
                      Privacy
                    </Link>
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography>
                    <Link href="#" onClick={preventMockClick}>
                      Terms
                    </Link>
                  </Typography>
                </Grid>
              </Grid>
              <Grid item xs={4} container>
                <Grid item xs={12}>
                  <Box component="div" className={classes.getBooks}>
                    <Box component="div">GetBooks</Box>
                    <Box component="div">
                      <Box component="span">2019-2020 GetBooks, Inc</Box>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
              <Grid item xs={4} container spacing={2}>
                <Grid item xs={4}>
                  <Typography>
                    <Link href="#" onClick={preventMockClick}>
                      Support
                    </Link>
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography>
                    <Link href="#" onClick={preventMockClick}>
                      Sign Up
                    </Link>
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography>
                    <Link href="#" onClick={preventMockClick}>
                      Sign In
                    </Link>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
    </Grid>
  );
};
