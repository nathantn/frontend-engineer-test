import { createSelector } from 'reselect'

const getStocks = state => state.stocks.data;
const getStockFilterQuery = state => state.stockFilterQuery;

const filterTopTwentyStocks = list => list.slice(0, 20);

const stockSymbolChecker = (query = '') => stock => stock.symbol.indexOf(query.toUpperCase()) > -1;
const filterStocksBySymbol = (list, query) => list.filter(stockSymbolChecker(query));

export const getVisibleStocks = createSelector(
  [getStocks, getStockFilterQuery],
  (stocks, query) => {
    if (query) {
      return filterStocksBySymbol(stocks, query);
    }

    return filterTopTwentyStocks(stocks);
  }
);
