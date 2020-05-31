import React from 'react';
import PropTypes from 'prop-types';

import { throttle } from 'throttle-debounce';

import { makeStyles } from '@material-ui/core/styles';
import { TextField, Container } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: '35px',
    position: 'absolute',
  },
  input: {
    textAlign: 'center',
    width: '500px',
    marginRight: '140px',
    padding: '0',
  },
});

export const Search = ({
  changeSearchMode,
  requestSearchedBooks,
  getServerItemsLength,
  removeBooks,
  requestBooks,
  getSearch,
  activeCategories,
  removePages,
  search,
}) => {
  const classes = useStyles();

  const handleSearch = (e) => {
    const { value } = e.target;

    if (value.length) {
      changeSearchMode(true);
      requestSearchedBooks(value, activeCategories);
      getServerItemsLength(value, activeCategories);
    } else {
      changeSearchMode(false);
      removeBooks();
      getServerItemsLength('', activeCategories);
      requestBooks(1, '', activeCategories);
      removePages();
    }
    getSearch(value);
  };

  return (
    <Container component="div" className={classes.root}>
      <TextField
        variant="outlined"
        className={classes.input}
        label="Search..."
        name="search"
        value={search}
        onChange={(e) => throttle(400, handleSearch(e))}
      />
    </Container>
  );
};

Search.propTypes = {
  changeSearchMode: PropTypes.func.isRequired,
  requestSearchedBooks: PropTypes.func.isRequired,
  getServerItemsLength: PropTypes.func.isRequired,
  removeBooks: PropTypes.func.isRequired,
  requestBooks: PropTypes.func.isRequired,
  getSearch: PropTypes.func.isRequired,
  activeCategories: PropTypes.arrayOf(PropTypes.string).isRequired,
  removePages: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired,
};
