import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import StockListPage from './StockListPage';
import StockDetailPage from './StockDetailPage';

const Main = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/stock/:symbol" component={StockDetailPage} />
      <Route exact path="/" component={StockListPage} />
    </Switch>
  </BrowserRouter>
)

export default Main;
