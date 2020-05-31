import { connect } from 'react-redux';

import {
  requestBooks,
  requestSearchedBooks,
  removeBooks,
  changeSearchMode,
  getServerItemsLength,
  getSearch,
  removePages,
} from '../../redux/Books/actions';

import { Search } from './Search';

const mapStateToProps = (state) => {
  return {
    isSearching: state.shop.isSearching,
    activeCategories: state.shop.activeCategories,
    search: state.shop.search,
  };
};

const mapDispatchToProps = {
  requestBooks,
  requestSearchedBooks,
  removeBooks,
  changeSearchMode,
  getServerItemsLength,
  getSearch,
  removePages,
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
