import React from 'react';
import debounce from 'lodash.debounce';
import { connect } from 'react-redux';

import StockFilterQueryInput from '../components/StockFilterQueryInput';
import { updateStockFilterQuery } from '../actions/stockFilterQuery';

const mapStateToProps = state => ({
  value: state.stockFilterQuery
});

const mapDispatchToProps = dispatch => {
  const debounceUpdateStockFilterQuery = debounce(
    value => dispatch(updateStockFilterQuery(value)),
    500
  );

  return {
    onChange: event => {
      debounceUpdateStockFilterQuery(event.target.value);
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StockFilterQueryInput);
