import { createSelector } from 'reselect'

const getStockQuoteByPropsKey = (state, props) => state.get('stockQuote').get(props.key);

export const getStockQuote = createSelector(
  getStockQuoteByPropsKey,
  stockQuote => stockQuote, // @todo: apply some fn identity solution, maybe RamdaJs.
);
