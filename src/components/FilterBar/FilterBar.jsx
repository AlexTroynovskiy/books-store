import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

import { FilterItem } from './components/';
import { ButtonComponent } from '../_shared/Button';

const useStyles = makeStyles({
  container: {
    position: 'fixed',
    left: '0',
    top: '64px',
    height: '100vh',
    padding: '70px 0',
    width: 'auto',
    zIndex: '4',
  },
});

export const FilterBar = ({
  getCategories,
  categories,
  requestSearchedBooks,
  search,
  addActiveCategories,
  removeActiveCategories,
  activeCategories,
  removeBooks,
  getServerItemsLength,
  requestBooks,
  isFavorite,
  removePages,
}) => {
  const classes = useStyles();

  useEffect(() => {
    getCategories();

    return () => {
      if (isFavorite) {
        removeBooks();
      }
    };
  }, []);

  const properties = {
    requestSearchedBooks,
    search,
    addActiveCategories,
    removeActiveCategories,
    activeCategories,
    removeBooks,
    getServerItemsLength,
    removePages,
  };

  const handleClick = () => {
    removeActiveCategories();
    removeBooks();
    removePages();

    if (search.length) {
      getServerItemsLength(search);
      requestSearchedBooks(search);
    } else {
      getServerItemsLength();
      requestBooks();
    }
  };

  return (
    <Container component="div" className={classes.container}>
      {categories.map((elem) => (
        <FilterItem key={elem} name={elem} properties={properties} isActive={activeCategories.includes(elem)} />
      ))}
      <ButtonComponent
        size="small"
        variant="outlined"
        color="primary"
        onClick={handleClick}
        disabled={!activeCategories.length}
      >
        Remove categories
      </ButtonComponent>
    </Container>
  );
};

FilterBar.propTypes = {
  getCategories: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  requestSearchedBooks: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired,
  addActiveCategories: PropTypes.func.isRequired,
  removeActiveCategories: PropTypes.func.isRequired,
  activeCategories: PropTypes.arrayOf(PropTypes.string).isRequired,
  removeBooks: PropTypes.func.isRequired,
  getServerItemsLength: PropTypes.func.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  requestBooks: PropTypes.func.isRequired,
  removePages: PropTypes.func.isRequired,
};
