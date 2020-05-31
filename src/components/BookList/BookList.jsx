import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Switch, FormGroup, FormControlLabel, FormControl } from '@material-ui/core';

import { BookCard } from './components/BookCard';
import { Loading } from '../_shared/Loading';
import { ButtonComponent } from '../_shared/Button';
import { ErrorFetch } from '../_shared/ErrorFetch';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '140px 0 100px 0',
    position: 'relative',
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: '20px',
    justifyContent: 'center',
  },
  form: {
    position: 'absolute',
    top: '-70px',
    left: '130px',
  },
});

export const BookList = ({
  books,
  requestBooks,
  errors,
  page,
  serverItemslength,
  getServerItemsLength,
  isSearching,
  changeSearchMode,
  search,
  activeCategories,
  getFavorites,
  favourites,
  isFavorite,
  setIsFavorite,
  favouritesBooks,
  removeFavourites,
}) => {
  const classes = useStyles();

  useEffect(() => {
    if (!books.length) {
      getServerItemsLength();
      requestBooks();
    }
  }, []);

  const handleClick = () => {
    requestBooks(page, search, activeCategories);
  };

  const showFavorites = () => {
    setIsFavorite(!isFavorite);
    if (favourites.length && !isFavorite) {
      getFavorites(favourites);
    } else if (isFavorite) {
      removeFavourites();
    }
  };

  const booksArr = isFavorite ? favouritesBooks : books;

  return (
    <Container component="div" className={classes.container}>
      <FormControl component="fieldset" className={classes.form}>
        <FormGroup aria-label="position" row>
          <FormControlLabel
            value="start"
            control={<Switch onChange={showFavorites} color="primary" />}
            label={isFavorite ? 'Show All' : 'Show Only Favourites'}
            labelPlacement="start"
          />
        </FormGroup>
      </FormControl>
      <Container component="div" className={classes.root}>
        {booksArr.length && !errors ? (
          <>
            {booksArr.map((book) => (
              <BookCard key={book.id} book={book} changeSearchMode={changeSearchMode} />
            ))}
          </>
        ) : isFavorite && !favourites.length ? (
          <Typography color="primary" variant="h3">
            You do not have any favourites!
          </Typography>
        ) : isSearching ? (
          <Typography variant="h3" color="primary">
            No results
          </Typography>
        ) : errors ? (
          <ErrorFetch />
        ) : (
          <Loading />
        )}
      </Container>
      {books.length && books.length < serverItemslength && !errors && !isFavorite ? (
        <ButtonComponent variant="contained" color="primary" onClick={handleClick}>
          Load more
        </ButtonComponent>
      ) : null}
    </Container>
  );
};

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    })
  ).isRequired,
  favourites: PropTypes.arrayOf(PropTypes.number).isRequired,
  favouritesBooks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    })
  ).isRequired,
  requestBooks: PropTypes.func.isRequired,
  getServerItemsLength: PropTypes.func.isRequired,
  serverItemslength: PropTypes.number,
  page: PropTypes.number,
  errors: PropTypes.bool,
  isSearching: PropTypes.bool,
  isFavorite: PropTypes.bool,
  setIsFavorite: PropTypes.func.isRequired,
  changeSearchMode: PropTypes.func.isRequired,
  search: PropTypes.string,
  activeCategories: PropTypes.arrayOf(PropTypes.string).isRequired,
  getFavorites: PropTypes.func.isRequired,
  removeFavourites: PropTypes.func.isRequired,
};

BookList.defaultProps = {
  errors: false,
  serverItemslength: 24,
  page: 1,
  isSearching: false,
  isFavorite: false,
  search: '',
  favouritesBooks: [],
};
