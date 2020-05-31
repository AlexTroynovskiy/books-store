import { connect } from 'react-redux';

import { FilterBar } from './FilterBar';
import {
  getCategories,
  requestSearchedBooks,
  addActiveCategories,
  removeActiveCategories,
  removeBooks,
  getServerItemsLength,
  requestBooks,
  removePages,
} from '../../redux/Books/actions';

const mapStateToProps = (state) => ({
  categories: state.shop.categories,
  search: state.shop.search,
  activeCategories: state.shop.activeCategories,
});

const mapDispatchToProps = {
  getCategories,
  requestSearchedBooks,
  addActiveCategories,
  removeActiveCategories,
  removeBooks,
  getServerItemsLength,
  requestBooks,
  removePages,
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterBar);
