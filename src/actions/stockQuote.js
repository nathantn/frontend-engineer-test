export const REQUEST_STOCK_QUOTE = '@stockQuote/request';
export const REQUEST_STOCK_QUOTE_SUCCESS = '@stockQuote/requestSuccess';
export const REQUEST_STOCK_QUOTE_ERROR = '@stockQuote/requestError';

export const requestStockQuote = key => ({
  type: REQUEST_STOCK_QUOTE,
  key,
});

export const requestStockQuoteSuccess = (key, data) => ({
  type: REQUEST_STOCK_QUOTE_SUCCESS,
  payload: data,
  key,
});

export const requestStockQuoteError = (key, data) => ({
  type: REQUEST_STOCK_QUOTE_ERROR,
  payload: data,
  key
});

export const fetchStockQuote = stockSymbol => async (dispatch, getState, { iexApi }) => {
  dispatch(requestStockQuote(stockSymbol));
  const response = await iexApi.getStockQuote(stockSymbol);

  if (response.ok) {
    dispatch(requestStockQuoteSuccess(response.data))
  } else {
    dispatch(requestStockQuoteError(response.data))
  }
}
