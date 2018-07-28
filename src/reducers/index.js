import { combineReducers } from 'redux';

import stockFilterQuery from './stockFilterQuery';
import stocks from './stocks';

export default combineReducers({
  stockFilterQuery,
  stocks,
});
