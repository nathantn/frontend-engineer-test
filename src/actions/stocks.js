export const REQUEST_STOCKS = '@stocks/request';
export const REQUEST_STOCKS_SUCCESS = '@stocks/requestSuccess';
export const REQUEST_STOCKS_ERROR = '@stocks/requestError';

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
    const sortByPrice = ({ price: aPrice}, { price: bPrice }) => bPrice - aPrice;
    dispatch(requestStocksSuccess(response.data.sort(sortByPrice)));
  } else {
    dispatch(requestStocksError(response.data));
  }
}

const shouldFetchStocks = state => !state.get('isFetching') && !state.get('data');

export const fetchStocksIfNeeded = () => async (disptach, getState, { iexApi }) => {
  const { stocks } = getState();

  if (shouldFetchStocks(stocks)) {
    return disptach(fetchStocks());
  }
}
