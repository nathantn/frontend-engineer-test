import React from 'react';

import AsyncStateRender from '../components/AsyncStateRender';
import StockFilterQueryInput from '../containers/StockFilterQueryInput';
import StockList from '../components/StockList';
import VisibleStocksProvider from '../providers/VisibleStocksProvider';
import Loading from '../components/Loading';

const StockListPage = () => (
  <React.Fragment>
    <StockFilterQueryInput />
    <VisibleStocksProvider>
      {state => (
        <AsyncStateRender
          state={state}
          loading={() => <Loading />}
          error={() => <p>{state.get('error')}</p>}
          render={() => <StockList stocks={state.get('data')} />}
        />
      )}
    </VisibleStocksProvider>
  </React.Fragment>
);

export default StockListPage;
