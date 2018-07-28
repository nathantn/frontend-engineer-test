import React from 'react';
import StockItem from './StockItem';

const StockList = props => (
  <ul className="stock-list list">
    {props.stocks.map(item => (
      <li key={item.get('symbol')}>
        <StockItem stock={item} />
      </li>
    ))}
  </ul>
);

export default StockList;
