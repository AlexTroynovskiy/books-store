import { createAction } from 'redux-actions';

import {
  FETCH_BOOKS_SUCCESS,
  FETCH_SEARCHED_BOOKS_SUCCESS,
  GET_SERVER_ITEMS_LENGTH,
  REMOVE_BOOKS,
  CHANGE_SEARCH_MODE,
  GET_SEARCH_SUCCESS,
  TOGGLE_FAVOURITE,
  FETCH_ACTIVE_BOOK,
  REMOVE_ACTIVE_BOOK,
  GET_CATEGORIES,
  ADD_ACTIVE_CATEGORIES,
  REMOVE_ACTIVE_CATEGORIES,
  GET_FAVOURITES,
  REMOVE_FAVOURITES,
  REMOVE_FAVOURITES_ID,
  REMOVE_PAGES,
} from './actionTypes';

import { bookPath, categoriesPath, favouritesPath } from '../../constants/apiPathes';

import { requestFailure } from '../Error/actions';

import { HttpService } from '../../services/HttpService';

export const requestBooksSuccess = createAction(FETCH_BOOKS_SUCCESS);
export const requestSearchedBooksSuccess = createAction(FETCH_SEARCHED_BOOKS_SUCCESS);
export const removeBooksSuccess = createAction(REMOVE_BOOKS);
export const changeSearchModeSuccess = createAction(CHANGE_SEARCH_MODE);
export const getServerItemsLengthSuccess = createAction(GET_SERVER_ITEMS_LENGTH);
export const getSearchSuccess = createAction(GET_SEARCH_SUCCESS);
export const toggleFavouriteAction = createAction(TOGGLE_FAVOURITE);
export const requestActiveBook = createAction(FETCH_ACTIVE_BOOK);
export const removeActiveBook = createAction(REMOVE_ACTIVE_BOOK);
export const getCategoriesSuccess = createAction(GET_CATEGORIES);
export const addActiveCategoriesSuccess = createAction(ADD_ACTIVE_CATEGORIES);
export const removeActiveCategoriesSuccess = createAction(REMOVE_ACTIVE_CATEGORIES);
export const requestGetFavouritesAction = createAction(GET_FAVOURITES);
export const removeFavouritesAction = createAction(REMOVE_FAVOURITES);
export const removeFavouritesIdAction = createAction(REMOVE_FAVOURITES_ID);
export const removePagesAction = createAction(REMOVE_PAGES);

export const requestBooks = (page = 1, search = '', category = [], limit = 24) => (dispatch) => {
  return HttpService.get(bookPath(page, search, limit, category))
    .then((response) => response.json())
    .then((result) => {
      return dispatch(requestBooksSuccess(result));
    })
    .catch((error) => dispatch(requestFailure(error)));
};

export const requestSearchedBooks = (search, categories = [], page = 1, limit = 24) => (dispatch) => {
  return HttpService.get(bookPath(page, search, limit, categories))
    .then((response) => response.json())
    .then((result) => dispatch(requestSearchedBooksSuccess(result)))
    .catch((error) => dispatch(requestFailure(error)));
};

export const removeBooks = () => (dispatch) => dispatch(removeBooksSuccess());

export const getServerItemsLength = (search = '', category = [], page = 1, limit = 24) => (dispatch) => {
  return HttpService.get(bookPath(page, search, limit, category)).then((response) =>
    dispatch(getServerItemsLengthSuccess(Number(response.headers.get('X-Total-Count'))))
  );
};

export const requestBook = (id) => (dispatch) => {
  return HttpService.get(`products/${id}`)
    .then((response) => response.json())
    .then((result) => dispatch(requestActiveBook(result)))
    .catch((error) => dispatch(requestFailure(error)));
};

export const removeBook = () => (dispatch) => dispatch(removeActiveBook());

export const changeSearchMode = (status) => (dispatch) => {
  return dispatch(changeSearchModeSuccess(status));
};

export const getSearch = (search) => (dispatch) => {
  return dispatch(getSearchSuccess(search));
};

export const toggleFavourite = (id) => (dispatch) => {
  return dispatch(toggleFavouriteAction(id));
};

export const getCategories = () => (dispatch) => {
  return HttpService.get(categoriesPath)
    .then((response) => response.json())
    .then((result) => {
      return dispatch(getCategoriesSuccess(result));
    })
    .catch((error) => dispatch(requestFailure(error)));
};

export const addActiveCategories = (category) => (dispatch) => {
  return dispatch(addActiveCategoriesSuccess(category));
};

export const removeActiveCategories = (category = '') => (dispatch) => {
  return dispatch(removeActiveCategoriesSuccess(category));
};

export const getFavorites = (ids) => (dispatch) => {
  return HttpService.get(`products?${favouritesPath(ids)}`)
    .then((response) => response.json())
    .then((result) => dispatch(requestGetFavouritesAction(result)))
    .catch((error) => dispatch(requestFailure(error)));
};

export const removeFavourites = () => (dispatch) => dispatch(removeFavouritesAction());

export const removeFavouritesId = () => (dispatch) => dispatch(removeFavouritesIdAction());

export const removePages = () => (dispatch) => dispatch(removePagesAction());
