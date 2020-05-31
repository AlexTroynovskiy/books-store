import { handleActions } from 'redux-actions';

import { requestFailure } from './actions';

const defaultState = {
  errors: false,
};

export const errorReducer = handleActions(
  {
    [requestFailure]: (state, action) => ({ ...state, errors: true }),
  },
  defaultState
);
