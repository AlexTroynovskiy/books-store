import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import { Router } from 'react-router';

import LoginFormConnect from '../';
import { LoginForm } from '../LoginForm';

describe('Component: LoginForm', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  describe('Should be properly connected to the store', () => {
    const initialState = { isLogged: false, changeStatus: jest.fn() };
    const mockStore = configureStore();
    let store, wrapper;
    store = mockStore(initialState);

    beforeEach(() => {
      wrapper = shallow(
        <Provider store={store}>
          <LoginFormConnect {...initialState} />
        </Provider>
      );
    });

    test('To be in DOM', () => {
      expect(wrapper.exists()).toBe(true);
    });
  });

  describe('Should have nested elements', () => {
    let wrapper;
    const props = { isLogged: false, changeStatus: jest.fn() };
    const historyMock = { push: jest.fn(), location: {}, listen: jest.fn() };

    test('To exist', () => {
      wrapper = shallow(
        <Router history={historyMock}>
          <LoginForm {...props} />
        </Router>
      );
      expect(wrapper.exists()).toBe(true);
    });

    test('To match snapshot', () => {
      wrapper = renderer
        .create(
          <Router history={historyMock}>
            <LoginForm {...props} />
          </Router>
        )
        .toJSON();

      expect(wrapper).toMatchSnapshot();
    });
  });
});
