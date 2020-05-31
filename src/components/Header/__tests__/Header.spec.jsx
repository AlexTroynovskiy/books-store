import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { Router } from 'react-router';

import HeaderConnect from '../';
import { Header } from '../Header';

describe('Component: Header', () => {
  const initialState = {
    isLogged: false,
    changeStatus: jest.fn(),
    selectedBooksAmount: 0,
    removeFavouritesId: jest.fn(),
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
          <HeaderConnect {...initialState} />
        </Provider>
      );
    });

    test('To be in DOM', () => {
      expect(wrapper.exists()).toBe(true);
    });
  });

  describe('To have nested elements', () => {
    let wrapper;
    const historyMock = {
      push: jest.fn(),
      location: {},
      listen: jest.fn(),
      createHref: jest.fn(),
    };

    test('To exist', () => {
      wrapper = shallow(
        <Router history={historyMock}>
          <Header {...initialState} />
        </Router>
      );
      expect(wrapper.exists()).toBe(true);
    });

    test('To match snapshot', () => {
      wrapper = renderer
        .create(
          <Router history={historyMock}>
            <Header {...initialState} />
          </Router>
        )
        .toJSON();
      expect(wrapper).toMatchSnapshot();
    });
  });
});
