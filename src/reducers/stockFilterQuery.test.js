import reducer from './stockFilterQuery';
import { updateStockFilterQuery } from '../actions/stockFilterQuery';

describe('reducers: stockFilterQuery', () => {
  test('starts state with null value', () => {
    expect(reducer(undefined, {})).toBeNull();
  });

  test('empty string returns a null state', () => {
    expect(reducer(undefined, updateStockFilterQuery(''))).toBeNull();
  });

  test('update value when receive updateStockFilterQuery action', () => {
    const query = 'test';
    expect(reducer(undefined, updateStockFilterQuery(query))).toEqual(query);;
  })
});
