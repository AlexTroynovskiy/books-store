import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Container, Grid, AppBar, Toolbar, Typography, Badge } from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { makeStyles } from '@material-ui/core/styles';

import { ButtonComponent } from '../_shared/Button';

const useStyles = makeStyles({
  badge: {
    top: '7px',
  },
  image: {
    width: '40px',
  },
  links: {
    textDecoration: 'none',
  },
  icon: {
    color: '#484848',
  },
});

export const Header = ({ isLogged, changeStatus, selectedBooksAmount, removeFavouritesId, removeCartBooks }) => {
  const classes = useStyles();

  const logOut = () => {
    changeStatus(false);
    removeFavouritesId();
    removeCartBooks();
  };

  return (
    <Grid item xs={12}>
      <AppBar position="fixed" color="default">
        <Toolbar disableGutters>
          <Container maxWidth="lg">
            <Grid container>
              <Grid item xs={4} container spacing={2}>
                <Grid item xs={3}>
                  <NavLink exact to="/books" className={classes.links}>
                    <img src="./book.png" alt="logo" className={classes.image} />
                  </NavLink>
                </Grid>
                <Grid item xs={9}>
                  <NavLink exact to="/books" className={classes.links}>
                    <Typography variant="h5" color="primary">
                      GetBooks
                    </Typography>
                  </NavLink>
                </Grid>
              </Grid>
              <Grid item xs={4} />
              <Grid item xs={4} container spacing={2}>
                <Grid item xs={4}>
                  <NavLink exact to="/contacts" className={classes.links}>
                    <ButtonComponent variant="text">Contacts</ButtonComponent>
                  </NavLink>
                </Grid>
                <Grid item xs={4}>
                  <NavLink exact to="/cart" className={classes.links}>
                    <Badge badgeContent={selectedBooksAmount} color="primary" className={classes.badge}>
                      <AddShoppingCartIcon className={classes.icon} />
                    </Badge>
                  </NavLink>
                </Grid>
                <Grid item xs={4}>
                  <NavLink exact to="/" className={classes.links}>
                    <ButtonComponent onClick={logOut} color="primary" disabled={!isLogged}>
                      {isLogged ? 'Log Out' : 'Log In'}
                    </ButtonComponent>
                  </NavLink>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </Grid>
  );
};

Header.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  changeStatus: PropTypes.func.isRequired,
  selectedBooksAmount: PropTypes.number,
  removeFavouritesId: PropTypes.func.isRequired,
  removeCartBooks: PropTypes.func.isRequired,
};

Header.defaultProps = {
  selectedBooksAmount: 0,
};
