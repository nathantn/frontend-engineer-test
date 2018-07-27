import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.iextrading.com/1.0',
});

export default {
  fetchStocks(options = {}) {
    return api.get('/tops', options);
  },

  getStock(stockSymbol, options) {
    return api.get(`/${stockSymbol}/quote`, options);
  },
};
