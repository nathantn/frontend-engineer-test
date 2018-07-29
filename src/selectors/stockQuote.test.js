import { Map, List } from 'immutable';

import { getStockQuote } from './stockQuote';

describe('selectors: stockQuote', () => {
  test('getStockQuote return right stock quote using the key in the prop object', () => {
    const stockQuote = { isFetching: false, data: null, error: null };
    const state = {
      stockQuote: Map({
        test: stockQuote
      })
    };
    const props = { key: 'test' };

    expect(getStockQuote(state, props)).toEqual(stockQuote);
  });
});
