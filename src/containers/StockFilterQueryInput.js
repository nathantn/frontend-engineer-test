import React from 'react';
import { connect } from 'react-redux';

import StockFilterQueryInput from '../components/StockFilterQueryInput'
import { updateStockFilterQuery } from '../actions/stockFilterQuery';

const mapStateToProps = state => ({
  value: state.stockFilterQuery,
});

const mapDispatchToProps = dispatch => ({
  onChange: ({ target: { value  } }) => {
    dispatch(updateStockFilterQuery(value));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(StockFilterQueryInput);
