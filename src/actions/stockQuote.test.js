import { Map, List } from 'immutable';

import iexApi from '../resources/iexApi';
import {
  fetchStockQuote,
  requestStockQuote,
  requestStockQuoteError,
  requestStockQuoteSuccess
} from './stockQuote';

// Mock functions
const dispatchMock = jest.fn();
const getStateMock = jest.fn();
const getStockQuoteMock = jest.spyOn(iexApi, 'getStockQuote');

describe('actions: stockQuote', () => {
  beforeEach(() => {
    dispatchMock.mockReset();
    getStockQuoteMock.mockReset();
  });

  test('fetchStockQuote dispatch requestStockQuote action before start the request', async () => {
    expect.assertions(2);
    iexApi.getStockQuote.mockResolvedValue(true);
    await fetchStockQuote('test')(dispatchMock, getStateMock, { iexApi });

    expect(dispatchMock).toHaveBeenCalledWith(requestStockQuote('test'));
    expect(iexApi.getStockQuote).toHaveBeenCalled();
  });

  test('fetchStockQuote dispatch requestStockQuoteSuccess when request have been done without error', async () => {
    expect.assertions(3);

    const data = [1, 2, 3];
    iexApi.getStockQuote.mockResolvedValue({ ok: true, data });

    await fetchStockQuote('test')(dispatchMock, getStateMock, { iexApi });

    expect(dispatchMock).toHaveBeenCalledWith(requestStockQuote('test'));
    expect(iexApi.getStockQuote).toHaveBeenCalled();
    expect(dispatchMock).toHaveBeenLastCalledWith(
      requestStockQuoteSuccess('test', data)
    );
  });

  test('fetchStockQuote dispatch requestStockQuoteError when request fail', async () => {
    expect.assertions(3);

    const data = new Error();
    iexApi.getStockQuote.mockResolvedValue({ ok: false, data });

    await fetchStockQuote('test')(dispatchMock, getStateMock, { iexApi });

    expect(dispatchMock).toHaveBeenCalledWith(requestStockQuote('test'));
    expect(iexApi.getStockQuote).toHaveBeenCalled();
    expect(dispatchMock).toHaveBeenLastCalledWith(
      requestStockQuoteError('test', data)
    );
  });
});
