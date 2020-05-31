import {
  requestBooksSuccess,
  requestSearchedBooksSuccess,
  removeBooksSuccess,
  getServerItemsLengthSuccess,
  requestActiveBook,
  changeSearchModeSuccess,
  getSearchSuccess,
  toggleFavouriteAction,
  getCategoriesSuccess,
  addActiveCategoriesSuccess,
} from '../actions';
import * as types from '../actionTypes';
import { HttpService } from '../../../services/HttpService';

describe('actions (books): ', () => {
  // HttpService.get = jest.fn();
  const dispatch = jest.fn();

  beforeEach(() => {
    jest.resetAllMocks();
  });

  describe('requestBooks()', () => {
    const mockResult = [{ id: 1 }, { id: 2 }];
    // HttpService.get.mockReturnValue(Promise.resolve(mockResult));

    test('should return object with correct type and payload', async () => {
      await dispatch(requestBooksSuccess(mockResult));
      expect(dispatch).toHaveBeenCalledWith({ type: types.FETCH_BOOKS_SUCCESS, payload: mockResult });
    });
  });

  describe('requestSearchedBooks()', () => {
    const mockResult = [{ id: 1 }, { id: 2 }];
    // HttpService.get.mockReturnValue(Promise.resolve(mockResult));

    test('should return object with correct type and payload', async () => {
      await dispatch(requestSearchedBooksSuccess(mockResult));
      expect(dispatch).toHaveBeenCalledWith({ type: types.FETCH_SEARCHED_BOOKS_SUCCESS, payload: mockResult });
    });
  });

  describe('removeBooks()', () => {
    test('should return object with correct type and payload', async () => {
      await dispatch(removeBooksSuccess());
      expect(dispatch).toHaveBeenCalledWith({ type: types.REMOVE_BOOKS });
    });
  });

  describe('getServerItemsLength()', () => {
    const mockResult = 1000;
    HttpService.get.mockReturnValue(Promise.resolve(mockResult));

    test('should return object with correct type and payload', async () => {
      await dispatch(getServerItemsLengthSuccess(mockResult));
      expect(dispatch).toHaveBeenCalledWith({ type: types.GET_SERVER_ITEMS_LENGTH, payload: mockResult });
    });
  });

  describe('requestBook()', () => {
    const mockResult = 100;
    HttpService.get.mockReturnValue(Promise.resolve(mockResult));

    test('should return object with correct type and payload', async () => {
      await dispatch(requestActiveBook(mockResult));
      expect(dispatch).toHaveBeenCalledWith({ type: types.FETCH_ACTIVE_BOOK, payload: mockResult });
    });
  });

  describe('changeSearchMode()', () => {
    const mockResult = true;
    test('should return object with correct type and payload', () => {
      dispatch(changeSearchModeSuccess(mockResult));
      expect(dispatch).toHaveBeenCalledWith({ type: types.CHANGE_SEARCH_MODE, payload: mockResult });
    });
  });

  describe('getSearch()', () => {
    const mockResult = 'search';
    test('should return object with correct type and payload', () => {
      dispatch(getSearchSuccess(mockResult));
      expect(dispatch).toHaveBeenCalledWith({ type: types.GET_SEARCH_SUCCESS, payload: mockResult });
    });
  });

  describe('toggleFavourite()', () => {
    const mockResult = 1;
    test('should return object with correct type and payload', () => {
      dispatch(toggleFavouriteAction(mockResult));
      expect(dispatch).toHaveBeenCalledWith({ type: types.TOGGLE_FAVOURITE, payload: mockResult });
    });
  });

  describe('getCategories()', () => {
    const mockResult = ['1', '2', '3'];
    test('should return object with correct type and payload', async () => {
      await dispatch(getCategoriesSuccess(mockResult));
      expect(dispatch).toHaveBeenCalledWith({ type: types.GET_CATEGORIES, payload: mockResult });
    });
  });

  describe('addActiveCategories()', () => {
    const mockResult = ['1', '2', '3'];
    test('should return object with correct type and payload', async () => {
      await dispatch(addActiveCategoriesSuccess(mockResult));
      expect(dispatch).toHaveBeenCalledWith({ type: types.ADD_ACTIVE_CATEGORIES, payload: mockResult });
    });
  });
});
