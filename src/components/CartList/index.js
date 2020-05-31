import { connect } from 'react-redux';

import { CartList } from './CartList';
import { toggleCart, orderBooks } from '../../redux/Cart/actions';

const mapStateToProps = (state) => ({
  cartBooks: state.cart.books,
});

const mapDispatchToProps = {
  toggleCart,
  orderBooks,
};

export default connect(mapStateToProps, mapDispatchToProps)(CartList);
