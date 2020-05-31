import { handleActions } from 'redux-actions';

import {
  toggleCartAction,
  fetchCartBooksSuccess,
  incrementCountAction,
  decrementCountAction,
  resetCartSuccess,
  setLoading,
} from './actions';

const defaultState = {
  books: [],
  fetchedBooks: [],
  isLoading: false,
};

export const cartReducer = handleActions(
  {
    [setLoading]: (state, action) => ({
      ...state,
      isLoading: action.payload,
    }),
    [toggleCartAction]: (state, action) => {
      const arrOfKeys = [];

      state.books.forEach((item) => {
        arrOfKeys.push(Number(Object.keys(item)[0]));
      });

      return {
        ...state,
        books: arrOfKeys.includes(action.payload)
          ? state.books.filter((item) => Number(Object.keys(item)[0]) !== action.payload)
          : [...state.books, { [action.payload]: 1 }],
      };
    },
    [fetchCartBooksSuccess]: (state, action) => ({
      ...state,
      fetchedBooks: action.payload,
      isLoading: false,
    }),
    [incrementCountAction]: (state, action) => {
      const copiedArr = [...state.books];
      const book = copiedArr.find((item) => item[action.payload]);

      book[action.payload] = book[action.payload] + 1;

      return {
        ...state,
        books: copiedArr,
      };
    },
    [decrementCountAction]: (state, action) => {
      const copiedArr = [...state.books];
      const book = copiedArr.find((item) => item[action.payload]);

      book[action.payload] = book[action.payload] > 1 ? book[action.payload] - 1 : 1;

      return {
        ...state,
        books: copiedArr,
      };
    },
    [resetCartSuccess]: () => defaultState,
  },
  defaultState
);
