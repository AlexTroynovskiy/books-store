import { handleActions } from 'redux-actions';

import { changeStatusSuccess } from './actions';

const defaultState = {
  isLogged: false,
};

export const userReducer = handleActions(
  {
    [changeStatusSuccess]: (state, action) => ({ ...state, isLogged: action.payload }),
  },
  defaultState
);
