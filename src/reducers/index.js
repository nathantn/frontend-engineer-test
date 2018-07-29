import { combineReducers } from 'redux';

import stockFilterQuery from './stockFilterQuery';
import stocks from './stocks';
import stockQuote from './stockQuote';

export default combineReducers({
  stockFilterQuery,
  stocks,
  stockQuote,
});
