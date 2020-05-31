import { createAction } from 'redux-actions';

import { IS_LOGGED } from './actionTypes';

export const changeStatusSuccess = createAction(IS_LOGGED);

export const changeStatus = (status) => (dispatch) => {
  return dispatch(changeStatusSuccess(status));
};
