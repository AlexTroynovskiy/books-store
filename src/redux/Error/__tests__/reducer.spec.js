import { errorReducer } from '../reducer';
import * as types from '../actionTypes';

describe('Reducer (Error): ', () => {
  describe('Handle FETCH_FAILURE', () => {
    test('Should set state.errors to true: ', () => {
      const initialState = {
        errors: false,
      };
      const expectedRes = { errors: true };
      const action = { type: types.FETCH_FAILURE };
      expect(errorReducer(initialState, action)).toEqual(expectedRes);
    });
  });
});
