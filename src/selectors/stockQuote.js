import { createSelector } from 'reselect'

const getStockQuoteByPropsId = (state, props) => state.stockQuote.get(props.id);

export const getStockQuote = createSelector(
  getStockQuoteByPropsId,
  stockQuote => stockQuote, // @todo: apply some fn identity solution, maybe RamdaJs.
);
