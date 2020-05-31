import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { Loading } from '../_shared/Loading';
import CartList from '../CartList';
import { ErrorFetch } from '../_shared/ErrorFetch';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '80vh',
  },
});

export const CartPage = ({ books, fetchedBooks, fetchCartBooks, isLoading, errors }) => {
  const classes = useStyles();

  useEffect(() => {
    fetchCartBooks(books);
  }, [books.length]);

  return (
    <Container component="div" className={classes.root}>
      {isLoading ? (
        <Loading />
      ) : fetchedBooks.length && !errors ? (
        <>
          <CartList books={fetchedBooks} />
        </>
      ) : errors ? (
        <ErrorFetch />
      ) : (
        <Typography variant="h3" color="primary">
          Your Cart is Empty
        </Typography>
      )}
    </Container>
  );
};

CartPage.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape),
  fetchedBooks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      price: PropTypes.number,
      description: PropTypes.string,
      img: PropTypes.string,
      category: PropTypes.string,
    })
  ),
  fetchCartBooks: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  errors: PropTypes.bool,
};

CartPage.defaultProps = {
  books: [],
  fetchedBooks: [],
  isLoading: false,
  errors: false,
};
