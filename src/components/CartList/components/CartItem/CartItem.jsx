import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import { Container, Typography, Avatar, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { ButtonComponent } from '../../../_shared/Button';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    margin: '40px 30px',
    borderRadius: '10px',
    boxShadow: '-11px 11px 36px -2px rgba(72,72,72,0.4)',
    padding: '40px',
  },
  buttons: {
    display: 'flex',
    alignItems: 'center',
  },
  info: {
    margin: '0 15px',
  },
  infoContainer: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '10px',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '550px',
  },
  img: {
    marginRight: '20px',
    width: '70px',
    height: '70px',
  },
  price: {
    color: '#484848',
    fontWeight: 'bold',
  },
  accent: {
    color: '#484848',
  },
});

export const CartItem = ({ book, removeFromCart, count, incrementCount, decrementCount }) => {
  const classes = useStyles();

  const handleIncrement = useCallback(() => {
    incrementCount(book.id);
  }, []);

  const handleDecrement = useCallback(() => {
    decrementCount(book.id);
  }, []);

  const handleRemove = useCallback(() => {
    removeFromCart(book.id);
  });

  return (
    <Container component="div" className={classes.container}>
      <Typography variant="h4" color="primary">
        {book.title}
      </Typography>
      <Typography>{book.description}</Typography>
      <Container component="div" className={classes.buttons}>
        <Container component="div" className={classes.infoContainer}>
          <Avatar src={book.img} className={classes.img}></Avatar>
          <Typography variant="h6" color="primary" className={classes.info}>
            Price for one item:
            <Box component="span" className={classes.accent}>
              {` ${book.price}`} $
            </Box>
          </Typography>
          <Typography variant="h6" color="primary" className={classes.info}>
            Total:
            <Box component="span" className={classes.price}>
              {` ${count * book.price}`} $
            </Box>
          </Typography>
        </Container>
        <Container component="div" className={classes.buttonContainer}>
          <ButtonComponent onClick={handleDecrement} color="primary" disabled={count <= 1}>
            -
          </ButtonComponent>
          <Typography variant="h6" color="primary" className={classes.info}>
            {count}
          </Typography>
          <ButtonComponent onClick={handleIncrement} color="primary">
            +
          </ButtonComponent>
          <ButtonComponent onClick={handleRemove} className={classes.remove}>
            Remove
          </ButtonComponent>
        </Container>
      </Container>
    </Container>
  );
};

CartItem.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    price: PropTypes.number,
    description: PropTypes.string,
    img: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
  count: PropTypes.number,
  removeFromCart: PropTypes.func,
  incrementCount: PropTypes.func,
  decrementCount: PropTypes.func,
};

CartItem.defaultProps = {
  removeFromCart: () => {},
  count: 1,
  incrementCount: () => {},
  decrementCount: () => {},
};
