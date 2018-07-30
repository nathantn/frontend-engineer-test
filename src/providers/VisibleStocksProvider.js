import React from 'react';
import { connect } from 'react-redux';

import { getVisibleStocks } from '../selectors/stocks';
import { fetchStocksIfNeeded } from '../actions/stocks';

const mapStateToProps = state => ({
  visibleStocks: getVisibleStocks(state)
});

const mapDispatchToProps = dispatch => ({
  fetchStocksIfNeeded: () => {
    dispatch(fetchStocksIfNeeded());
  }
});

class VisibleStocksProvider extends React.Component {
  componentDidMount() {
    this.props.fetchStocksIfNeeded();
  }

  render() {
    return this.props.children(this.props.visibleStocks);
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VisibleStocksProvider);
