import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography, CardMedia, Card, Container } from '@material-ui/core';

import { Loading } from '../_shared/Loading/';
import { ButtonComponent } from '../../components/_shared/Button';
import BookCardControllers from '../../components/_shared/BookCardControlers';
import { ErrorFetch } from '../../components/_shared/ErrorFetch';

const useStyles = makeStyles({
  container: {
    paddingTop: '70px',
    paddingLeft: '50px',
    paddingRight: '50px',
    paddingBottom: '100px',
  },
  root: {
    position: 'relative',
    marginTop: '60px',
    display: 'flex',
    justifyContent: 'center',
  },
  media: {
    display: 'flex',
    width: '600px',
    height: '350px',
  },
  text: {
    display: 'flex',
    flexDirection: 'column',
    padding: '20px',
  },
  price: {
    marginTop: '15px',
    fontSize: '20px',
    fontWeight: '600',
    marginBottom: '60px',
  },
  description: {
    marginTop: '10px',
    fontSize: '18px',
    color: 'grey',
  },
  category: {
    position: 'absolute',
    bottom: '20px',
  },
  priceSum: {
    color: '#484848',
  },
});

export const SingleBook = ({ activeBook, errors, requestBook, removeBook }) => {
  const classes = useStyles();
  const { goBack } = useHistory();
  const { bookId } = useParams();

  useEffect(() => {
    requestBook(Number(bookId));
    return () => {
      removeBook();
    };
  }, []);

  const id = Number(bookId);

  return activeBook && !errors ? (
    <Container component="div" className={classes.container}>
      <ButtonComponent type="button" onClick={goBack} color="primary">
        Return back
      </ButtonComponent>
      <Card component="div" className={classes.root}>
        <Box component="div" className={classes.media}>
          <CardMedia component="div" className={classes.media} image={activeBook.img} />
        </Box>
        <Box component="div" className={classes.text}>
          <Typography variant="h4" color="primary">
            {activeBook.title}
          </Typography>
          <Typography className={classes.description} variant="h6">
            {activeBook.description}
          </Typography>
          <Typography variant="h4" className={classes.price} color="primary">
            Price:
            <Box component="span" className={classes.priceSum}>
              {` ${activeBook.price}`} $
            </Box>
          </Typography>
          <Typography variant="h6" color="primary" className={classes.category}>
            Category: <Box component="span" className={classes.priceSum}>{` ${activeBook.category}`}</Box>
          </Typography>
          <BookCardControllers bookId={id} />
        </Box>
      </Card>
    </Container>
  ) : errors ? (
    <ErrorFetch />
  ) : (
    <Loading />
  );
};

SingleBook.propTypes = {
  activeBook: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    price: PropTypes.number,
    description: PropTypes.string,
    img: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
  requestBook: PropTypes.func.isRequired,
  errors: PropTypes.bool,
  removeBook: PropTypes.func.isRequired,
};

SingleBook.defaultProps = {
  errors: false,
  id: 1,
  title: 'title',
  price: 100,
  description: 'text',
  img: 'src',
  category: 'text',
};
