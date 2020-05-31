import { createAction } from 'redux-actions';

import {
  TOGGLE_CART,
  FETCH_CART_BOOKS,
  INCREMENT_COUNT,
  DECREMENT_COUNT,
  ORDER_BOOKS,
  SET_LOADING,
  RESET_CART,
} from './actionTypes';
import { requestFailure } from '../Error/actions';
import { HttpService } from '../../services/HttpService';
import { cartPath } from '../../constants/apiPathes';

export const toggleCartAction = createAction(TOGGLE_CART);
export const fetchCartBooksSuccess = createAction(FETCH_CART_BOOKS);
export const incrementCountAction = createAction(INCREMENT_COUNT);
export const decrementCountAction = createAction(DECREMENT_COUNT);
export const orderBooksSuccess = createAction(ORDER_BOOKS);
export const setLoading = createAction(SET_LOADING);
export const resetCartSuccess = createAction(RESET_CART);

export const toggleCart = (id) => (dispatch) => {
  return dispatch(toggleCartAction(id));
};

export const fetchCartBooks = (books) => (dispatch) => {
  if (!books.length) {
    return dispatch(fetchCartBooksSuccess([]));
  }

  const ids = [];

  books.forEach((item) => {
    ids.push(Number(Object.keys(item)[0]));
  });

  dispatch(setLoading(true));

  return HttpService.get(cartPath(ids))
    .then((response) => response.json())
    .then((result) => dispatch(fetchCartBooksSuccess(result)))
    .catch((error) => {
      dispatch(setLoading(false));
      return dispatch(requestFailure(error));
    });
};

export const incrementCount = (id) => (dispatch) => {
  return dispatch(incrementCountAction(id));
};

export const decrementCount = (id) => (dispatch) => {
  return dispatch(decrementCountAction(id));
};

export const orderBooks = (books, info) => (dispatch) => {
  dispatch(setLoading(true));

  return HttpService.post('orders', { products: books, info: info })
    .then((response) => response.json())
    .then(() => dispatch(resetCartSuccess()))
    .catch((error) => {
      dispatch(setLoading(false));
      return dispatch(requestFailure(error));
    });
};

export const removeCartBooks = () => (dispatch) => dispatch(resetCartSuccess());
