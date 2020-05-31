import React from 'react';
import PropTypes from 'prop-types';

import { CardActions, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import GradeIcon from '@material-ui/icons/Grade';

const useStyles = makeStyles({
  buttons: {
    position: 'absolute',
    bottom: '0',
    right: '0',
  },
});

export const BookCardControllers = ({ bookId, toggleFavourite, toggleCart, isFavourite, isInCart }) => {
  const classes = useStyles();

  const setFavourite = () => {
    toggleFavourite(bookId);
  };

  const setCart = () => {
    toggleCart(bookId);
  };

  return (
    <CardActions className={classes.buttons}>
      <IconButton color={isFavourite ? 'primary' : 'default'} aria-label="add to favourites" onClick={setFavourite}>
        <GradeIcon />
      </IconButton>
      <IconButton color={isInCart ? 'primary' : 'default'} aria-label="add to shopping cart" onClick={setCart}>
        <AddShoppingCartIcon />
      </IconButton>
    </CardActions>
  );
};

BookCardControllers.propTypes = {
  bookId: PropTypes.number.isRequired,
  toggleFavourite: PropTypes.func,
  toggleCart: PropTypes.func,
  isFavourite: PropTypes.bool,
  isInCart: PropTypes.bool,
};

BookCardControllers.defaultProps = {
  isFavourite: false,
  isInCart: false,
  toggleFavourite: () => {},
  toggleCart: () => {},
};
