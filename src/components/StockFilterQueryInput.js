import React from 'react'

import './StockFilterQueryInput.scss';

const StockFilterQueryInput = props => (
  <div className="stock-filter">
    <input
      className="stock-filter search"
      placeholder="Filtrar ações"
      defaultValue={props.value}
      onChange={props.onChange}
    />
  </div>
);

StockFilterQueryInput.defaultProps = {
  value: '',
};

export default StockFilterQueryInput;
