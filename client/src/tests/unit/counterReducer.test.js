import { counterReducer } from '../../reducers/counterReducer';

test('increments count', () => {
  const initialState = { count: 0 };
  const action = { type: 'increment' };
  const state = counterReducer(initialState, action);
  expect(state.count).toBe(1);
});
