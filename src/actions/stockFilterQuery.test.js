import { updateFilterQuery, UPDATE_FILTER_QUERY } from './stockFilterQuery';

describe('actions: stockFilterQuery', () => {
  test('updateFilterQuery return right object', () => {
    const query = 'test';
    expect(updateFilterQuery(query)).toEqual({ type: UPDATE_FILTER_QUERY, payload: query });
  })
});
