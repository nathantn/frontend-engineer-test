import { createSelector } from 'reselect'

const getStocks = state => state.stocks;
const getStockFilterQuery = state => state.stockFilterQuery;

const filterTopTwentyStocks = list => list.slice(0, 20);

const stockSymbolChecker = (query = '') => stock => stock.get('symbol').indexOf(query.toUpperCase()) > -1;
const filterStocksBySymbol = (list, query) => list.filter(stockSymbolChecker(query));

export const getVisibleStocks = createSelector(
  [getStocks, getStockFilterQuery],
  (stocks, query) => {
    if (stocks.get('isFetching') || !stocks.get('data')) {
      return stocks;
    }

    const stockList = stocks.get('data');
    const data = query
      ? filterStocksBySymbol(stockList, query)
      : filterTopTwentyStocks(stockList);

    return stocks.merge({ data })
  }
);
