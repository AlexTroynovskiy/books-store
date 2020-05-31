import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { ContactsPage } from '../components/ContactsPage';
import { BooksPage } from '../components/BooksPage';
import CartPage from '../components/CartPage';
import SingleBook from '../components/SingleBook';
import { NotFound } from '../components/NotFound';

export const PrivateRoutes = ({ isLogged }) => {
  const Routes = (
    <Switch>
      <Route exact path="/" component={BooksPage} />
      <Route exact path="/books" component={BooksPage} />
      <Route exact path="/books/:bookId" component={SingleBook} />
      <Route exact path="/contacts" component={ContactsPage} />
      <Route exact path="/cart" component={CartPage} />
      <Route exact path="/cart/checkout" component={CartPage} />
      <Route exact path="*" component={NotFound} />
    </Switch>
  );

  const RedirectToLogin = <Redirect to="/login" />;

  return isLogged ? Routes : RedirectToLogin;
};

PrivateRoutes.propTypes = {
  isLogged: PropTypes.bool.isRequired,
};
