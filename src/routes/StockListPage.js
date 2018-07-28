import React from 'react';

import AsyncStateRender from '../components/AsyncStateRender';
import VisibleStocksProvider from '../providers/VisibleStocksProvider';
import StockList from '../components/StockList';

const StockListPage = () => (
  <div className="page-wrapper">
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
