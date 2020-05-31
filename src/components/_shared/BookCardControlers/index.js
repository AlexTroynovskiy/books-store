import { connect } from 'react-redux';

import { BookCardControllers } from './BookCardControlers';
import { toggleFavourite } from '../../../redux/Books/actions';
import { toggleCart } from '../../../redux/Cart/actions';
import { bookIsFavourite, bookIsInCart } from './BookCardControlersSelector';

const mapStateToProps = (state, props) => ({
  isFavourite: bookIsFavourite(state, props),
  isInCart: bookIsInCart(state, props),
});

const mapDispatchToProps = {
  toggleFavourite,
  toggleCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(BookCardControllers);
