import React from 'react'
import { Debounce } from 'react-throttle';

const StockFilterQueryInput = props => (
  <Debounce time="400" handler="onChange">
    <input value={props.value || ''} onChange={props.onChange} />
  </Debounce>
);

export default StockFilterQueryInput;
