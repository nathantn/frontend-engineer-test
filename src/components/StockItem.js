import React from 'react';
import { Link } from 'react-router-dom';

import './StockItem.scss';
import ToBRL from './ToBRL';

const StockItem = props => (
  <div className="stock-item">
    <Link
      className="stock-item link"
      to={`/stock/${props.stock.get('symbol')}`}
    >
      <span className="stock-item symbol">{props.stock.get('symbol')}</span>
      <ToBRL>
        {props.stock.get('lastSalePrice')}
      </ToBRL>
    </Link>
  </div>
);

export default StockItem;
