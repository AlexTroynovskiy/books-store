import { userReducer } from '../reducer';
import * as types from '../actionTypes';

describe('Reducer (User): ', () => {
  describe('Handle IS_LOGGED', () => {
    test('Should set state.isLogged to the given value: ', () => {
      const initialState = {
        isLogged: false,
      };
      const expectedRes = { isLogged: true };
      const action = { type: types.IS_LOGGED, payload: true };
      expect(userReducer(initialState, action)).toEqual(expectedRes);
    });
  });
});
