import { connect } from 'react-redux';

import { CartItem } from './CartItem';
import { incrementCount, decrementCount } from '../../../../redux/Cart/actions';
import { bookCount } from '../../../../components/_shared/BookCardControlers/BookCardControlersSelector';

const mapStateToProps = (state, props) => ({
  count: bookCount(state, props),
});

const mapDispatchToProps = {
  incrementCount,
  decrementCount,
};

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);
