import { Map, List } from 'immutable';

import {
  requestStocks,
  requestStocksSuccess,
  requestStocksError
} from '../actions/stocks';
import reducer from './stocks';

describe('reducers: stocks', () => {
  test('reducer starts with default state', () => {
    const expected = Map({ isFetching: false, data: null, error: null });
    expect(reducer(undefined, {})).toEqual(expected);
  });

  test('reducer update isFetching value when receive requestStocks action', () => {
    const expected = Map({ isFetching: true, data: null, error: null });
    expect(reducer(undefined, requestStocks())).toEqual(expected);
  });

  test('reducer update state when receive requestStocksSuccess action', () => {
    const data = [1, 2, 3];
    const expected = Map({ isFetching: false, data: List(data), error: null });
    expect(reducer(undefined, requestStocksSuccess(data))).toEqual(expected);
  });

  test('reducer update state when receive requestStocksError action', () => {
    const error = new Error();
    const expected = Map({ isFetching: false, data: null, error });
    expect(reducer(undefined, requestStocksError(error))).toEqual(expected);
  });
});
