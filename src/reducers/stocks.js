import { Map, List } from 'immutable';
import {
  REQUEST_STOCKS,
  REQUEST_STOCKS_SUCCESS,
  REQUEST_STOCKS_ERROR
} from '../actions/stocks';

const defaultState = Map({
  isFetching: false,
  data: null,
  error: null
});

const reducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case REQUEST_STOCKS:
      return state.merge({
        isFetching: true,
        data: null,
        error: null
      });
    case REQUEST_STOCKS_SUCCESS:
      return state.merge({
        isFetching: false,
        data: payload,
        error: null
      });
    case REQUEST_STOCKS_ERROR:
      return state.merge({
        isFetching: false,
        data: null,
        error: payload
      });
    default:
      return state;
  }
};

export default reducer;
