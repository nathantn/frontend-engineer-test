import React from 'react';
import { Link } from 'react-router-dom';

import ToBRL from './ToBRL';

const StockItem = props => (
  <div>
    <Link to={`/stock/${props.stock.get('symbol')}`}>
      <span>{props.stock.get('symbol')}</span>
      {' | '}
      <ToBRL>
        {props.stock.get('price')}
      </ToBRL>
    </Link>
  </div>
);

export default StockItem;
