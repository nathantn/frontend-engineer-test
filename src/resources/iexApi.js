import { create } from 'apisauce';

const api = create({
  baseURL: 'https://api.iextrading.com/1.0',
});

export default {
  fetchStocks(options) {
    return api.get('/tops/last', options);
  },

  getStockQuote(stockSymbol, options) {
    return api.get(`/${stockSymbol}/quote`, options);
  },
};
