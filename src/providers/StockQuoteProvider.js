import React from 'react';
import { connect } from 'react-redux';

import { getStockQuote } from '../selectors/stockQuote';
import { fetchStockQuote } from '../actions/stockQuote';

const mapStateToProps = (state, props) => ({
  stockQuote: getStockQuote(state, props)
});

const mapDispatchToProps = dispatch => ({
  fetchStockQuote: key => {
    dispatch(fetchStockQuote(key));
  }
});

class StockQuoteProvider extends React.Component {
  componentDidMount() {
    this.props.fetchStockQuote(this.props.id);
  }

  render() {
    return this.props.children(this.props.stockQuote);
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StockQuoteProvider);
