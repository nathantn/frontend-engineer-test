import React from 'react';

import AsyncStateRender from '../components/AsyncStateRender';
import StockFilterQueryInput from '../containers/StockFilterQueryInput'
import StockList from '../components/StockList';
import VisibleStocksProvider from '../providers/VisibleStocksProvider';

const StockListPage = () => (
  <div className="page-wrapper">
    <StockFilterQueryInput />
    <VisibleStocksProvider>
      {state => (
        <AsyncStateRender
          state={state}
          loading={() => <h1>carregando...</h1>}
          error={() => <p>{state.get('error')}</p>}
          render={() => <StockList stocks={state.get('data')} />}
        />
      )}
    </VisibleStocksProvider>
  </div>
);

export default StockListPage;
