import React from 'react';

import StockQuoteProvider from '../providers/StockQuoteProvider';

import AsyncStateRender from '../components/AsyncStateRender';
import StockQuoteItem from '../components/StockQuoteItem';
import Loading from '../components/Loading';

const StockQuotePage = props => (
  <div className="page-wrapper">
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
  </div>
);

export default StockQuotePage;
