import { connect } from 'react-redux';

import { BookList } from './BookList';
import {
  requestBooks,
  getServerItemsLength,
  changeSearchMode,
  getFavorites,
  removeFavourites,
} from '../../redux/Books/actions';

const mapStateToProps = (state) => {
  return {
    books: state.shop.books,
    errors: state.error.errors,
    page: state.shop.page,
    isSearching: state.shop.isSearching,
    serverItemslength: state.shop.serverItemslength,
    search: state.shop.search,
    activeCategories: state.shop.activeCategories,
    favourites: state.shop.favourites,
    favouritesBooks: state.shop.favouritesBooks,
  };
};

const mapDispatchToProps = {
  requestBooks,
  getServerItemsLength,
  changeSearchMode,
  getFavorites,
  removeFavourites,
};

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
