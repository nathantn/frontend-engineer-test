import React from 'react'

const StockFilterQueryInput = props => (
  <input value={undefined} onChange={props.onChange} />
);

StockFilterQueryInput.defaultProps = {
  value: '',
};

export default StockFilterQueryInput;
