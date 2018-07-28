import React from 'react';
import { connect } from 'react-redux';

import { getVisibleStocks } from '../selectors/stocks';

const mapStateToProps = state => ({
  visibleStocks: getVisibleStocks(state),
});

class VisibleStocksProvider extends React.Component {
  render() {
    return this.props.children(this.props.visibleStocks);
  }
};

export default connect(mapStateToProps)(VisibleStocksProvider);
