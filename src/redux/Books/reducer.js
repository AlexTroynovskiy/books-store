import { handleActions } from 'redux-actions';
import {
  requestBooksSuccess,
  removeBooksSuccess,
  requestActiveBook,
  removeActiveBook,
  getSearchSuccess,
  changeSearchModeSuccess,
  toggleFavouriteAction,
  getServerItemsLengthSuccess,
  requestSearchedBooksSuccess,
  getCategoriesSuccess,
  addActiveCategoriesSuccess,
  removeActiveCategoriesSuccess,
  requestGetFavouritesAction,
  removeFavouritesAction,
  removeFavouritesIdAction,
  removePagesAction,
} from './actions';

const defaultState = {
  books: [],
  page: 1,
  isSearching: false,
  serverItemslength: 0,
  activeBook: {},
  search: '',
  favourites: [],
  categories: [],
  activeCategories: [],
  favouritesBooks: [],
};

export const booksReducer = handleActions(
  {
    [requestSearchedBooksSuccess]: (state, action) => ({ ...state, books: [...action.payload] }),
    [removeBooksSuccess]: (state) => ({ ...state, books: [], page: 1 }),
    [requestBooksSuccess]: (state, action) => ({
      ...state,
      books: [...state.books, ...action.payload],
      page: state.page + 1,
    }),
    [changeSearchModeSuccess]: (state, action) => {
      return {
        ...state,
        isSearching: action.payload,
      };
    },
    [getServerItemsLengthSuccess]: (state, action) => {
      return {
        ...state,
        serverItemslength: action.payload,
      };
    },
    [requestActiveBook]: (state, action) => ({ ...state, activeBook: { ...action.payload } }),
    [removeActiveBook]: (state) => ({ ...state, activeBook: {} }),
    [getSearchSuccess]: (state, action) => {
      return {
        ...state,
        search: action.payload,
      };
    },
    [toggleFavouriteAction]: (state, action) => ({
      ...state,
      favourites: state.favourites.includes(action.payload)
        ? state.favourites.filter((item) => item !== action.payload)
        : [...state.favourites, action.payload],
    }),
    [getCategoriesSuccess]: (state, action) => ({
      ...state,
      categories: [...action.payload],
    }),
    [addActiveCategoriesSuccess]: (state, action) => ({
      ...state,
      activeCategories: [...state.activeCategories, action.payload],
    }),
    [removeActiveCategoriesSuccess]: (state, action) => {
      return action.payload === ''
        ? { ...state, activeCategories: [] }
        : {
            ...state,
            activeCategories: [...state.activeCategories.filter((category) => category !== action.payload)],
          };
    },
    [requestGetFavouritesAction]: (state, action) => ({
      ...state,
      favouritesBooks: [...action.payload],
    }),
    [removeFavouritesAction]: (state) => ({ ...state, favouritesBooks: [] }),
    [removeFavouritesIdAction]: (state) => ({ ...state, favourites: [] }),
    [removePagesAction]: (state) => ({ ...state, page: 2 }),
  },
  defaultState
);
