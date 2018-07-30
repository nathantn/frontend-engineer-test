import { Map, List } from 'immutable';

import {
  requestStockQuote,
  requestStockQuoteSuccess,
  requestStockQuoteError
} from '../actions/stockQuote';
import reducer from './stockQuote';

describe('reducers: stockQuote', () => {
  test('reducer starts with default state', () => {
    const expected = Map({});
    expect(reducer(undefined, {})).toEqual(expected);
  });

  test('reducer update isFetching value when receive requestStockQuote action', () => {
    const expected = Map({
      test: Map({
        isFetching: true,
        data: null,
        error: null
      })
    });
    expect(reducer(undefined, requestStockQuote('test'))).toEqual(expected);
  });

  test('reducer update state when receive requestStockQuoteSuccess action', () => {
    const data = { test: 'it' };
    const expected = Map({
      test: Map({
        isFetching: false,
        data: Map(data),
        error: null
      })
    });
    expect(reducer(undefined, requestStockQuoteSuccess('test', data))).toEqual(
      expected
    );
  });

  test('reducer update state when receive requestStockQuoteError action', () => {
    const error = new Error();
    const expected = Map({
      test: Map({
        isFetching: false,
        data: null,
        error
      })
    });
    expect(reducer(undefined, requestStockQuoteError('test', error))).toEqual(
      expected
    );
  });
});
