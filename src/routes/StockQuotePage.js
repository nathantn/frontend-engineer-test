import React from 'react';

import StockQuoteProvider from '../providers/StockQuoteProvider';

import AsyncStateRender from '../components/AsyncStateRender';
import StockQuoteItem from '../components/StockQuoteItem';

const StockQuotePage = props => (
  <div className="page-wrapper">
    <StockQuoteProvider id={props.match.params.symbol}>
      {state => state ? (
        <AsyncStateRender
          state={state}
          loading={() => <p>carregando...</p>}
          error={() => <p>{state.get('error')}</p>}
          render={() => <StockQuoteItem stockQuote={state.get('data')} />}
        />
      ) : (
        <p>carregando...</p>
      )}
    </StockQuoteProvider>
  </div>
);

export default StockQuotePage;
