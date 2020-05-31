import React, { useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import CartItem from './components/CartItem';
import CheckoutForm from '../CheckoutForm';
import { ButtonComponent } from '../_shared/Button';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '150px',
    alignItems: 'center',
  },
  total: {
    fontWeight: 'bold',
    margin: '30px ',
  },
  totalSum: {
    color: '#484848',
  },
  title: {
    marginTop: '60px',
  },
});

export const CartList = ({ books, toggleCart, cartBooks }) => {
  const classes = useStyles();
  const history = useHistory();

  const [isOpen, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
    history.push('/cart/checkout');
  };

  const handleClose = () => {
    history.push('/cart');
    setOpen(false);
  };

  const handleRemoveFromCart = useCallback((id) => {
    toggleCart(id);
  }, []);

  return (
    <Container component="div" className={classes.root}>
      <Typography variant="h3" color="primary" className={classes.title}>
        Your Order:
      </Typography>
      {books.map((book) => (
        <CartItem key={book.id} book={book} bookId={book.id} removeFromCart={handleRemoveFromCart} />
      ))}
      <ButtonComponent variant="outlined" color="primary" size="large" onClick={handleOpen}>
        Checkout
      </ButtonComponent>
      {isOpen && <CheckoutForm isOpen={isOpen} onClose={handleClose} />}
    </Container>
  );
};

CartList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      price: PropTypes.number,
      description: PropTypes.string,
      img: PropTypes.string,
      category: PropTypes.string,
    })
  ),
  toggleCart: PropTypes.func,
  cartBooks: PropTypes.arrayOf(PropTypes.object),
};

CartList.defaultProps = {
  books: [],
  toggleCart: () => {},
  cartBooks: [],
};
