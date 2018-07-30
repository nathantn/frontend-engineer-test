import React from 'react';

import StockQuoteProvider from '../providers/StockQuoteProvider';

import AsyncStateRender from '../components/AsyncStateRender';
import StockQuoteItem from '../components/StockQuoteItem';
import Loading from '../components/Loading';

const StockQuotePage = props => (
  <React.Fragment>
    <StockQuoteProvider id={props.match.params.symbol}>
      {state => state ? (
        <AsyncStateRender
          state={state}
          loading={() => <Loading />}
          error={() => <p>{state.get('error')}</p>}
          render={() => <StockQuoteItem stockQuote={state.get('data')} />}
        />
      ) : (
        <Loading />
      )}
    </StockQuoteProvider>
  </React.Fragment>
);

export default StockQuotePage;
