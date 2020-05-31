import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import CartItemConnect from '../';
import { CartItem } from '../CartItem';

describe('Component: CartItem', () => {
  const initialState = {
    book: {},
    removeFromCart: jest.fn(),
    count: 1,
    incrementCount: jest.fn(),
    decrementCount: jest.fn(),
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
          <CartItemConnect {...initialState} />
        </Provider>
      );
    });

    test('To be in DOM', () => {
      expect(wrapper.exists()).toBe(true);
    });
  });

  describe('To have nested elements', () => {
    let wrapper;

    test('To exist', () => {
      wrapper = shallow(<CartItem {...initialState} />);
      expect(wrapper.exists()).toBe(true);
    });

    test('To match snapshot', () => {
      wrapper = renderer.create(<CartItem {...initialState} />).toJSON();
      expect(wrapper).toMatchSnapshot();
    });
  });
});
