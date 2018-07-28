import React from 'react'
import { Debounce } from 'react-throttle';

const StockFilterQueryInput = props => (
  <Debounce time="500" handler="onChange">
    <input value={props.value || undefined} onChange={props.onChange} />
  </Debounce>
);

StockFilterQueryInput.defaultProps = {
  value: '',
};

export default StockFilterQueryInput;
