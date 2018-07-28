import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import StockListPage from './StockListPage';

const Main = () => (
  <BrowserRouter>
    <Route exact path="/" component={StockListPage} />
  </BrowserRouter>
)

export default Main;
