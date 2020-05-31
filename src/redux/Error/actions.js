import { createAction } from 'redux-actions';

import { FETCH_FAILURE } from './actionTypes';

export const requestFailure = createAction(FETCH_FAILURE);
