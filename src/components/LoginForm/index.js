import { connect } from 'react-redux';

import { LoginForm } from './LoginForm';
import { changeStatus } from '../../redux/UserSpecific/actions';

const mapStateToProps = (state) => {
  return {
    isLogged: state.user.isLogged,
  };
};

const mapDispatchToProps = {
  changeStatus,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
