import reducer from '../../src/redux/counterSlice';

test('increment action works', () => {
  const previousState = { value: 0 };
  expect(reducer(previousState, { type: 'counter/increment' })).toEqual({ value: 1 });
});
