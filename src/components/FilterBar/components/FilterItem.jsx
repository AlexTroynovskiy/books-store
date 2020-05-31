import React from 'react';
import PropTypes from 'prop-types';

import { Checkbox, Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export const FilterItem = ({ name, properties, isActive }) => {
  const classes = useStyles();

  const {
    requestSearchedBooks,
    search,
    addActiveCategories,
    removeActiveCategories,
    activeCategories,
    removeBooks,
    getServerItemsLength,
    removePages,
  } = properties;

  const handleChange = () => {
    let localActiveCategories;

    if (!isActive) {
      localActiveCategories = [...activeCategories, name];
      addActiveCategories(name);
    } else {
      localActiveCategories = activeCategories.filter((elem) => elem !== name);
      removeActiveCategories(name);
      if (!search.length) {
        removeBooks();
      }
    }
    removePages();
    getServerItemsLength(search, localActiveCategories);
    requestSearchedBooks(search, localActiveCategories);
  };
  return (
    <Container component="div" className={classes.container}>
      <Typography variant="body1">{name}</Typography>
      <Checkbox checked={isActive} onChange={handleChange} color="primary" />
    </Container>
  );
};

FilterItem.propTypes = {
  name: PropTypes.string.isRequired,
  properties: PropTypes.shape({
    requestSearchedBooks: PropTypes.func,
    page: PropTypes.number,
    search: PropTypes.string,
    addActiveCategories: PropTypes.func,
    removeActiveCategories: PropTypes.func,
    activeCategories: PropTypes.arrayOf(PropTypes.string),
    removeBooks: PropTypes.func,
    getServerItemsLength: PropTypes.func,
    removePages: PropTypes.func,
  }).isRequired,
  isActive: PropTypes.bool.isRequired,
};
