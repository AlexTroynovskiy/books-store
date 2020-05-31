import { connect } from 'react-redux';

import { Header } from './Header';
import { removeFavouritesId } from '../../redux/Books/actions';
import { removeCartBooks } from '../../redux/Cart/actions';

const mapStateToProps = (state) => ({
  selectedBooksAmount: state.cart.books.length,
});

const mapDispatchToProps = {
  removeFavouritesId,
  removeCartBooks,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
