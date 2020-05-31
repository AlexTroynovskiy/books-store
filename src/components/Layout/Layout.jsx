import React from 'react';
import PropTypes from 'prop-types';

import { CssBaseline, Grid } from '@material-ui/core';

export const Layout = (props) => {
  return (
    <>
      <CssBaseline />
      <Grid container>{props.children}</Grid>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};
