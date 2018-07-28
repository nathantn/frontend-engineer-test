import reducer from './stockFilterQuery';
import { updateFilterQuery } from '../actions/stockFilterQuery';

describe('reducers: stockFilterQuery', () => {
  test('starts state with null value', () => {
    expect(reducer(undefined, {})).toBeNull();
  });

  test('empty string returns a null state', () => {
    expect(reducer(undefined, updateFilterQuery(''))).toBeNull();
  });

  test('update value when receive updateFilterQuery action', () => {
    const query = 'test';
    expect(reducer(undefined, updateFilterQuery(query))).toEqual(query);;
  })
});
