import { booksReducer } from '../reducer';
import * as types from '../actionTypes';

describe('Reducer (Books): ', () => {
  describe('Handle FETCH_SEARCHED_BOOKS_SUCCESS: ', () => {
    test('Should change items in the state.books: ', () => {
      const initialState = {
        books: [],
      };
      const expectedRes = ['1', '2', '3'];
      const action = { type: types.FETCH_SEARCHED_BOOKS_SUCCESS, payload: expectedRes };
      expect(booksReducer(initialState, action)).toEqual({ books: expectedRes });
    });
  });

  describe('Handle REMOVE_BOOKS: ', () => {
    test('Should remove items in state.books and reset pages: ', () => {
      const initialState = {
        books: ['1', '2', '3'],
      };
      const expectedRes = [];
      const action = { type: types.REMOVE_BOOKS, payload: expectedRes };
      expect(booksReducer(initialState, action)).toEqual({ books: expectedRes, page: 1 });
    });
  });

  describe('Handle FETCH_BOOKS_SUCCESS: ', () => {
    test('Should add items to state.books and increment pages: ', () => {
      const initialState = {
        books: ['1', '2'],
        page: 1,
      };
      const expectedRes = ['3', '4'];
      const action = { type: types.FETCH_BOOKS_SUCCESS, payload: expectedRes };
      expect(booksReducer(initialState, action)).toEqual({
        books: [...initialState.books, ...expectedRes],
        page: initialState.page + 1,
      });
    });
  });

  describe('Handle CHANGE_SEARCH_MODE: ', () => {
    test('Should change state.isSearching: ', () => {
      const initialState = {
        isSearching: false,
      };
      const expectedRes = true;
      const action = { type: types.CHANGE_SEARCH_MODE, payload: expectedRes };
      expect(booksReducer(initialState, action)).toEqual({
        isSearching: expectedRes,
      });
    });
  });

  describe('Handle GET_SERVER_ITEMS_LENGTH: ', () => {
    test('Should change state.serverItemsLength: ', () => {
      const initialState = {
        serverItemslength: 0,
      };
      const expectedRes = 1000;
      const action = { type: types.GET_SERVER_ITEMS_LENGTH, payload: expectedRes };
      expect(booksReducer(initialState, action)).toEqual({
        serverItemslength: expectedRes,
      });
    });
  });

  describe('Handle FETCH_ACTIVE_BOOK: ', () => {
    test('Should change state.activeBook: ', () => {
      const initialState = {
        activeBook: {},
      };
      const expectedRes = {
        name: '1',
        description: 'Lorem',
      };
      const action = { type: types.FETCH_ACTIVE_BOOK, payload: expectedRes };
      expect(booksReducer(initialState, action)).toEqual({
        activeBook: { ...expectedRes },
      });
    });
  });

  describe('Handle GET_SEARCH_SUCCESS: ', () => {
    test('Should change state.search: ', () => {
      const initialState = {
        search: '',
      };
      const expectedRes = 'search';
      const action = { type: types.GET_SEARCH_SUCCESS, payload: expectedRes };
      expect(booksReducer(initialState, action)).toEqual({
        search: expectedRes,
      });
    });
  });

  describe('Handle TOGGLE_FAVOURITE: ', () => {
    test('Should delete item if it is in state.favourites: ', () => {
      const initialState = {
        favourites: ['1', '2', '3'],
      };
      const expectedRes = ['1', '3'];
      const action = { type: types.TOGGLE_FAVOURITE, payload: '2' };
      expect(booksReducer(initialState, action)).toEqual({
        favourites: expectedRes,
      });
    });

    test('Should add item if it is not in state.favourites: ', () => {
      const initialState = {
        favourites: ['1', '2', '3'],
      };
      const expectedRes = ['1', '2', '3', '4'];
      const action = { type: types.TOGGLE_FAVOURITE, payload: '4' };
      expect(booksReducer(initialState, action)).toEqual({
        favourites: expectedRes,
      });
    });
  });

  describe('Handle GET_CATEGORIES: ', () => {
    test('Should add to state.categories: ', () => {
      const initialState = {
        categories: [],
      };
      const expectedRes = ['1', '2', '3'];
      const action = { type: types.GET_CATEGORIES, payload: expectedRes };
      expect(booksReducer(initialState, action)).toEqual({
        categories: [...expectedRes],
      });
    });
  });

  describe('Handle ADD_ACTIVE_CATEGORIES: ', () => {
    test('Should add items to state.activeCategories: ', () => {
      const initialState = {
        activeCategories: ['1', '2'],
      };
      const expectedRes = ['1', '2', '3'];
      const action = { type: types.ADD_ACTIVE_CATEGORIES, payload: '3' };
      expect(booksReducer(initialState, action)).toEqual({
        activeCategories: expectedRes,
      });
    });
  });

  describe('Handle REMOVE_ACTIVE_CATEGORIES: ', () => {
    test('Should delete items from state.activeCategories if something is passed: ', () => {
      const initialState = {
        activeCategories: ['1', '2', '3'],
      };
      const expectedRes = ['1', '3'];
      const action = { type: types.REMOVE_ACTIVE_CATEGORIES, payload: '2' };
      expect(booksReducer(initialState, action)).toEqual({
        activeCategories: expectedRes,
      });
    });

    test('Should delete all items from state.activeCategories if nothing is passed: ', () => {
      const initialState = {
        activeCategories: ['1', '2', '3'],
      };
      const expectedRes = [];
      const action = { type: types.REMOVE_ACTIVE_CATEGORIES, payload: '' };
      expect(booksReducer(initialState, action)).toEqual({
        activeCategories: expectedRes,
      });
    });
  });

  describe('Handle GET_FAVOURITES: ', () => {
    test('Should add items to state.favouritesBooks: ', () => {
      const initialState = {
        favouritesBooks: [],
      };
      const expectedRes = ['1', '2', '3'];
      const action = { type: types.GET_FAVOURITES, payload: expectedRes };
      expect(booksReducer(initialState, action)).toEqual({
        favouritesBooks: expectedRes,
      });
    });
  });

  describe('Handle REMOVE_FAVOURITES: ', () => {
    test('Should delete all the items from state.favouritesBooks: ', () => {
      const initialState = {
        favouritesBooks: ['1', '2', '3'],
      };
      const expectedRes = [];
      const action = { type: types.REMOVE_FAVOURITES };
      expect(booksReducer(initialState, action)).toEqual({
        favouritesBooks: expectedRes,
      });
    });
  });

  describe('Handle REMOVE_FAVOURITES_ID: ', () => {
    test('Should delete all the items from state.favourites: ', () => {
      const initialState = {
        favourites: ['1', '2', '3'],
      };
      const expectedRes = [];
      const action = { type: types.REMOVE_FAVOURITES_ID };
      expect(booksReducer(initialState, action)).toEqual({
        favourites: expectedRes,
      });
    });
  });

  describe('Handle REMOVE_PAGES: ', () => {
    test('Should set state.page to 2: ', () => {
      const initialState = {
        page: 6,
      };
      const expectedRes = 2;
      const action = { type: types.REMOVE_PAGES };
      expect(booksReducer(initialState, action)).toEqual({
        page: expectedRes,
      });
    });
  });
});
