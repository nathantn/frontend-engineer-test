import React from 'react';

import './StockQuoteItem.scss';
import ToBRL from './ToBRL';

const StockQuoteItem = props => (
  <section className="stock-quote-item">
    <h1 className="title">
      {props.stockQuote.get('companyName')}
      <span>{props.stockQuote.get('symbol')}</span>
    </h1>
    <p>{props.stockQuote.get('sector')}</p>
    <div>
      <p>
        <ToBRL>{props.stockQuote.get('latestPrice')}</ToBRL>
      </p>
      <p>
        <ToBRL>{props.stockQuote.get('change')}</ToBRL>
      </p>
    </div>
  </section>
);

export default StockQuoteItem;
