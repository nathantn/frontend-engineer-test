export const REQUEST_STOCKS = '@stocks/request';
export const REQUEST_STOCKS_SUCCESS = '@stocks/requestSuccess';
export const REQUEST_STOCKS_ERROR = '@stocks/requestError';

export const requestStocks = () => ({
  type: REQUEST_STOCKS
});

export const requestStocksSuccess = data => ({
  type: REQUEST_STOCKS_SUCCESS,
  payload: data
});

export const requestStocksError = data => ({
  type: REQUEST_STOCKS_ERROR,
  payload: data
});

export const fetchStocks = () => async (dispatch, getState, { iexApi }) => {
  dispatch(requestStocks());
  const response = await iexApi.fetchStocks({
    filter: 'symbol,lastSalePrice,volume'
  });

  if (response.ok) {
    const marketCap = stock => stock.lastSalePrice * stock.volume;
    const sortByMarketCap = (a, b) => marketCap(a) - marketCap(b);
    // Sort stocks by market cap
    const sortedData = response.data.sort(sortByMarketCap);

    dispatch(requestStocksSuccess(sortedData));
  } else {
    dispatch(requestStocksError(response.data));
  }
};

const shouldFetchStocks = state =>
  !state.get('isFetching') && !state.get('data');

export const fetchStocksIfNeeded = () => (disptach, getState, { iexApi }) => {
  const { stocks } = getState();

  if (shouldFetchStocks(stocks)) {
    return disptach(fetchStocks());
  }
};
