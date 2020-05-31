import { connect } from 'react-redux';

import { SingleBook } from './SingleBook';
import { requestBook, removeBook } from '../../redux/Books/actions';

const mapStateToProps = (state, props) => ({
  activeBook: state.shop.activeBook,
  errors: state.error.errors,
});

const mapDispatchToProps = {
  requestBook,
  removeBook,
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleBook);
