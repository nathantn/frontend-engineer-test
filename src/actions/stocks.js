export const REQUEST_STOCKS = '@stocks/request';
export const REQUEST_STOCKS_SUCCESS = '@stocks/request_success';
export const REQUEST_STOCKS_ERROR = '@stocks/request_error';

export const requestStocks = () => ({
  type: REQUEST_STOCKS,
});

export const requestStocksSuccess = data => ({
  type: REQUEST_STOCKS_SUCCESS,
  payload: data,
});

export const requestStocksError = data => ({
  type: REQUEST_STOCKS_ERROR,
  payload: data,
});

export const fetchStocks = () => async (dispatch, getState, { iexApi }) => {
  dispatch(requestStocks());
  const response = await iexApi.fetchStocks();

  if (response.ok) {
    dispatch(requestStocksSuccess(response.data));
  } else {
    dispatch(requestStocksError(response.data));
  }
}

const shouldFetchStocks = state => !state.isFetching && !state.data;

export const fetchStocksIfNeeded = () => async (disptach, getState, { iexApi }) => {
  const { stocks } = getState();

  if (shouldFetchStocks(stocks)) {
    return disptach(fetchStocks());
  }
}
