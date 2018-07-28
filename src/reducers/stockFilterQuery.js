import { UPDATE_FILTER_QUERY } from '../actions/stockFilterQuery';

const nullIfStringIsEmpty = (str = '') => str.length ? str : null;

const reducer = (state = null, { type, payload }) => {
  switch (type) {
    case UPDATE_FILTER_QUERY:
      return nullIfStringIsEmpty(payload);
    default:
      return state;
  }
}

export default reducer;
