import { connect } from 'react-redux';

import { CartPage } from './CartPage';
import { fetchCartBooks } from '../../redux/Cart/actions';

const mapStateToProps = (state) => {
  return {
    books: state.cart.books,
    fetchedBooks: state.cart.fetchedBooks,
    isLoading: state.cart.isLoading,
    errors: state.error.errors,
  };
};

const mapDispatchToProps = {
  fetchCartBooks,
};

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
