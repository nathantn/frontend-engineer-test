import { create } from 'apisauce';

const api = create({
  baseURL: 'https://api.iextrading.com/1.0'
});

export default {
  fetchStocks(options) {
    return api.get('/tops', options);
  },

  getStockQuote(stockSymbol, options) {
    return api.get(`/stock/${stockSymbol}/quote`, options);
  }
};
