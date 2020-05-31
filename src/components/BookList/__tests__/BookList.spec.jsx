import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import BookListConnect from '../';
import { BookList } from '../BookList';

describe('Component: BookList', () => {
  const initialState = {
    books: [],
    requestBooks: jest.fn(),
    errors: false,
    page: 1,
    serverItemslength: 0,
    getServerItemsLength: jest.fn(),
    isSearching: false,
    changeSearchMode: jest.fn(),
    search: '',
    activeCategories: [],
    getFavorites: jest.fn(),
    favourites: [],
    favouritesBooks: [],
    removeFavourites: jest.fn(),
  };

  beforeEach(() => {
    jest.resetAllMocks();
  });

  describe('Should be properly connected to the store', () => {
    const mockStore = configureStore();
    let store, wrapper;
    store = mockStore(initialState);

    beforeEach(() => {
      wrapper = shallow(
        <Provider store={store}>
          <BookListConnect {...initialState} />
        </Provider>
      );
    });

    test('To be in DOM', () => {
      expect(wrapper.exists()).toBe(true);
    });
  });

  describe('To have nested elements', () => {
    let wrapper;
    const props = { ...initialState, isFavorite: false, setIsFavorite: jest.fn() };

    test('To exist', () => {
      wrapper = shallow(<BookList {...props} />);
      expect(wrapper.exists()).toBe(true);
    });

    test('To match snapshot', () => {
      wrapper = renderer.create(<BookList {...props} />).toJSON();
      expect(wrapper).toMatchSnapshot();
    });
  });
});
