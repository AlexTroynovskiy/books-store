import { connect } from 'react-redux';

import { CheckoutForm } from './CheckoutForm';
import { toggleCart, orderBooks } from '../../redux/Cart/actions';

const mapStateToProps = (state) => {
  return {
    cartBooks: state.cart.books,
  };
};

const mapDispatchToProps = {
  toggleCart,
  orderBooks,
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutForm);
