import React from 'react';

const StockQuoteItem = props => (
  <section>
    <h1>
      {props.stockQuote.get('companyName')}
      <span>{props.stockQuote.get('symbol')}</span>
    </h1>
    <p>{props.stockQuote.get('sector')}</p>
    <div>
      <p>{props.stockQuote.get('latestPrice')}</p>
      <p>{props.stockQuote.get('change')}</p>
    </div>
  </section>
);

export default StockQuoteItem;
