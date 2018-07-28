import React from 'react'

const StockFilterQueryInput = props => (
  <div>
    <input defaultValue={props.value} onChange={props.onChange} />
    {props.value && <small>filtrando por: <strong>"{props.value}"</strong></small>}
  </div>
);

StockFilterQueryInput.defaultProps = {
  value: '',
};

export default StockFilterQueryInput;
