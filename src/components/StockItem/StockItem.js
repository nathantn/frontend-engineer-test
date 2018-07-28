import React from 'react';

import ToBRL from '../ToBRL';

const StockItem = props => (
  <div>
    <span>{props.stock.get('symbol')}</span>
    {' | '}
    <ToBRL>
      {props.stock.get('price')}
    </ToBRL>
  </div>
);

export default StockItem;
