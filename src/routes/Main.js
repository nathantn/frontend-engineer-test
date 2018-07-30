import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import StockListPage from './StockListPage';
import StockQuotePage from './StockQuotePage';

const Main = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/stock/:symbol" component={StockQuotePage} />
      <Route path="/" component={StockListPage} />
    </Switch>
  </BrowserRouter>
);

export default Main;
