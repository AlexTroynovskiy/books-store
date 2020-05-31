import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { PrivateRoutes } from './PrivateRoutes';
import { LoginPage } from '../components/LoginPage';

export const AppRouter = ({ isLogged }) => {
  return (
    <Switch>
      <Route exact path="/login" component={LoginPage} />
      <PrivateRoutes isLogged={isLogged} />
      <Route path="*">
        <Redirect to="/login" />
      </Route>
    </Switch>
  );
};

AppRouter.propTypes = {
  isLogged: PropTypes.bool.isRequired,
};
