import { Map } from 'immutable';

import { REQUEST_STOCK_QUOTE, REQUEST_STOCK_QUOTE_SUCCESS, REQUEST_STOCK_QUOTE_ERROR } from "../actions/stockQuote";

const defaultState = Map({
  isFetching: false,
  data: null,
  error: null,
});

const stockQuoteReducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case REQUEST_STOCK_QUOTE:
      return state.merge({
        isFetching: true,
        data: null,
        error: null,
      });
    case REQUEST_STOCK_QUOTE_SUCCESS:
      return state.merge({
        isFetching: false,
        data: payload,
        error: null,
      });
    case REQUEST_STOCK_QUOTE_ERROR:
      return state.merge({
        isFetching: false,
        data: null,
        error: payload,
      });
    default:
      return state;
  }
};

const rootReducer = (state = Map({}), { key, ...action }) => {
  switch (action.type) {
    case REQUEST_STOCK_QUOTE:
    case REQUEST_STOCK_QUOTE_SUCCESS:
    case REQUEST_STOCK_QUOTE_ERROR:
      return state.set(
        key,
        stockQuoteReducer(state.get(key), action),
      );
    default:
      return state;
  }
}

export default rootReducer;
