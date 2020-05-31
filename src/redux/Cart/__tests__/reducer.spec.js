import { cartReducer } from '../reducer';
import * as types from '../actionTypes';

describe('Reducer (Cart): ', () => {
  describe('Handle SET_LOADING', () => {
    test('Should set state.isLoading to the given value: ', () => {
      const initialState = {
        isLoading: false,
      };
      const expectedRes = true;
      const action = { type: types.SET_LOADING, payload: expectedRes };
      expect(cartReducer(initialState, action)).toEqual({ isLoading: expectedRes });
    });
  });

  describe('Handle TOGGLE_CART', () => {
    test('Should add item if it is not in state.books: ', () => {
      const initialState = {
        books: [{ 1: 1 }, { 2: 1 }],
      };
      const expectedRes = [{ 1: 1 }, { 2: 1 }, { 3: 1 }];
      const action = { type: types.TOGGLE_CART, payload: 3 };
      expect(cartReducer(initialState, action)).toEqual({ books: expectedRes });
    });

    test('Should delete item if it is in state.books: ', () => {
      const initialState = {
        books: [{ 1: 1 }, { 2: 1 }, { 3: 1 }],
      };
      const expectedRes = [{ 1: 1 }, { 2: 1 }];
      const action = { type: types.TOGGLE_CART, payload: 3 };
      expect(cartReducer(initialState, action)).toEqual({ books: expectedRes });
    });
  });

  describe('Handle FETCH_CART_BOOKS', () => {
    test('Should set state.fetchedBooks to the objects with given ids: ', () => {
      const initialState = {
        fetchedBooks: [],
      };
      const expectedRes = [
        {
          id: 1,
        },
        {
          id: 2,
        },
      ];
      const action = { type: types.FETCH_CART_BOOKS, payload: expectedRes };
      expect(cartReducer(initialState, action)).toEqual({ fetchedBooks: expectedRes, isLoading: false });
    });
  });

  describe('Handle INCREMENT_COUNT', () => {
    test('Should increment state.books by id: ', () => {
      const initialState = {
        fetchedBooks: [],
        books: [{ 1: 1 }, { 2: 1 }],
      };
      const expectedRes = [{ 1: 2 }, { 2: 1 }];
      const action = { type: types.INCREMENT_COUNT, payload: 1 };
      expect(cartReducer(initialState, action)).toEqual({ fetchedBooks: [], books: expectedRes });
    });
  });

  describe('Handle DECREMENT_COUNT', () => {
    test('Should decrement state.books by id: ', () => {
      const initialState = {
        fetchedBooks: [],
        books: [{ 1: 2 }, { 2: 1 }],
      };
      const expectedRes = [{ 1: 1 }, { 2: 1 }];
      const action = { type: types.DECREMENT_COUNT, payload: 1 };
      expect(cartReducer(initialState, action)).toEqual({ fetchedBooks: [], books: expectedRes });
    });
  });

  describe('Handle ORDER_BOOKS', () => {
    test('Should reset state: ', () => {
      const initialState = {
        fetchedBooks: [{ id: 1 }, { id: 2 }],
        books: [{ 1: 2 }, { 2: 1 }],
        isLoading: true,
      };
      const expectedRes = { books: [], fetchedBooks: [], isLoading: false };
      const action = { type: types.ORDER_BOOKS };
      expect(cartReducer(initialState, action)).toEqual(expectedRes);
    });
  });
});
