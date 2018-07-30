import { Map, List } from 'immutable';

import {
  fetchStocks,
  fetchStocksIfNeeded,
  requestStocks,
  requestStocksSuccess,
  requestStocksError
} from './stocks';
import iexApi from '../resources/iexApi';

// Mock functions
const dispatchMock = jest.fn();
const getStateMock = jest.fn();
const fetchStocksMock = jest.spyOn(iexApi, 'fetchStocks');

describe('actions: stocks', () => {
  beforeEach(() => {
    dispatchMock.mockReset();
    fetchStocksMock.mockReset();
  });

  test('fetchStocks dispatch requestStock action before start the request', () => {
    fetchStocks()(dispatchMock, getStateMock, { iexApi });

    expect(dispatchMock).toHaveBeenCalledWith(requestStocks());
    expect(iexApi.fetchStocks).toHaveBeenCalled();
  });

  test('fetchStocks dispatch requestStockSuccess when request have been done without error', async () => {
    expect.assertions(3);

    const data = [1, 2, 3];
    iexApi.fetchStocks.mockResolvedValue({ ok: true, data });

    await fetchStocks()(dispatchMock, getStateMock, { iexApi });

    expect(dispatchMock).toHaveBeenCalledWith(requestStocks());
    expect(iexApi.fetchStocks).toHaveBeenCalled();
    expect(dispatchMock).toHaveBeenLastCalledWith(requestStocksSuccess(data));
  });

  test('fetchStocks dispatch requestStockError when request fail', async () => {
    expect.assertions(3);

    const data = new Error();
    iexApi.fetchStocks.mockResolvedValue({ ok: false, data });

    await fetchStocks()(dispatchMock, getStateMock, { iexApi });

    expect(dispatchMock).toHaveBeenCalledWith(requestStocks());
    expect(iexApi.fetchStocks).toHaveBeenCalled();
    expect(dispatchMock).toHaveBeenLastCalledWith(requestStocksError(data));
  });

  test('fetchStocksIfNeeded should not dispatch fetchStocks action if isFetching attribute from stocks state is true', () => {
    getStateMock.mockReturnValue({ stocks: Map({ isFetching: true }) });

    fetchStocksIfNeeded()(dispatchMock, getStateMock, { iexApi });

    expect(getStateMock).toHaveBeenCalled();
    expect(dispatchMock).not.toHaveBeenCalled();
  });

  test('fetchStocksIfNeeded should not dispatch fetchStocks action if data attribute from stocks state have some value', () => {
    getStateMock.mockReturnValue({ stocks: Map({ data: List([]) }) });

    fetchStocksIfNeeded()(dispatchMock, getStateMock, { iexApi });

    expect(getStateMock).toHaveBeenCalled();
    expect(dispatchMock).not.toHaveBeenCalled();
  });

  test('fetchStocksIfNeeded should dispatch fetchStocks when isFetching and data attribute from stocks states have falsy value', () => {
    getStateMock.mockReturnValue({
      stocks: Map({ isFetching: false, data: null })
    });

    fetchStocksIfNeeded()(dispatchMock, getStateMock, { iexApi });

    expect(getStateMock).toHaveBeenCalled();
    expect(dispatchMock).toHaveBeenCalled();
  });
});
