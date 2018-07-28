import { updateStockFilterQuery, UPDATE_FILTER_QUERY } from './stockFilterQuery';

describe('actions: updateStockFilterQuery', () => {
  test('updateFilterQuery return right object', () => {
    const query = 'test';
    expect(updateStockFilterQuery(query)).toEqual({ type: UPDATE_FILTER_QUERY, payload: query });
  })
});
