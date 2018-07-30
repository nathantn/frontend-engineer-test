import { Map, List } from 'immutable';

import { getVisibleStocks } from './stocks';

// Data retrived from https://api.iextrading.com/1.0/tops?filter=symbol,lastSalePrice
// 2018-07-28
const exampleData = [
  { symbol: 'KWR', lastSalePrice: 161.3 },
  { symbol: 'MHNC', lastSalePrice: 23.62 },
  { symbol: 'DWTR', lastSalePrice: 0 },
  { symbol: 'TACOW', lastSalePrice: 0 },
  { symbol: 'INFU', lastSalePrice: 0 },
  { symbol: 'AI', lastSalePrice: 10.415 },
  { symbol: 'NLS', lastSalePrice: 14 },
  { symbol: 'NSU', lastSalePrice: 3.7 },
  { symbol: 'VYMI', lastSalePrice: 0 },
  { symbol: 'EPE', lastSalePrice: 2.085 },
  { symbol: 'FCFS', lastSalePrice: 82.2 },
  { symbol: 'ATU', lastSalePrice: 27.925 },
  { symbol: 'STK', lastSalePrice: 21.96 },
  { symbol: 'DIT', lastSalePrice: 0 },
  { symbol: 'EIM', lastSalePrice: 11.765 },
  { symbol: 'EIDX', lastSalePrice: 18.37 },
  { symbol: 'DBX', lastSalePrice: 30.045 },
  { symbol: 'EZT', lastSalePrice: 0 },
  { symbol: 'CVM', lastSalePrice: 0.8902 },
  { symbol: 'MMS', lastSalePrice: 64.74 },
  { symbol: 'HTD', lastSalePrice: 23.23 },
  { symbol: 'DFE', lastSalePrice: 0 },
  { symbol: 'PEG', lastSalePrice: 51.425 },
  { symbol: 'FPXI', lastSalePrice: 0 },
  { symbol: 'FI', lastSalePrice: 8.105 },
  { symbol: 'SYLD', lastSalePrice: 0 },
  { symbol: 'RLH', lastSalePrice: 12.325 },
  { symbol: 'SMIN', lastSalePrice: 43.34 },
  { symbol: 'GAMR', lastSalePrice: 0 }
];

describe('selectors: stocks', () => {
  test('getVisibleStocks return 20 must important stocks from state when filter is null', () => {
    const state = {
      stockFilterQuery: null,
      stocks: Map({}).merge({
        isFething: false,
        data: exampleData
      })
    };
    const expected = Map({}).merge({
      isFething: false,
      data: [
        { symbol: 'KWR', lastSalePrice: 161.3 },
        { symbol: 'MHNC', lastSalePrice: 23.62 },
        { symbol: 'DWTR', lastSalePrice: 0 },
        { symbol: 'TACOW', lastSalePrice: 0 },
        { symbol: 'INFU', lastSalePrice: 0 },
        { symbol: 'AI', lastSalePrice: 10.415 },
        { symbol: 'NLS', lastSalePrice: 14 },
        { symbol: 'NSU', lastSalePrice: 3.7 },
        { symbol: 'VYMI', lastSalePrice: 0 },
        { symbol: 'EPE', lastSalePrice: 2.085 },
        { symbol: 'FCFS', lastSalePrice: 82.2 },
        { symbol: 'ATU', lastSalePrice: 27.925 },
        { symbol: 'STK', lastSalePrice: 21.96 },
        { symbol: 'DIT', lastSalePrice: 0 },
        { symbol: 'EIM', lastSalePrice: 11.765 },
        { symbol: 'EIDX', lastSalePrice: 18.37 },
        { symbol: 'DBX', lastSalePrice: 30.045 },
        { symbol: 'EZT', lastSalePrice: 0 },
        { symbol: 'CVM', lastSalePrice: 0.8902 },
        { symbol: 'MMS', lastSalePrice: 64.74 }
      ]
    });

    expect(getVisibleStocks(state)).toEqual(expected);
  });

  test('getVisibleStocks filter stocks by symbol when stockFilterQuery has a value', () => {
    const state = {
      stockFilterQuery: 'A',
      stocks: Map({}).merge({
        isFething: false,
        data: exampleData
      })
    };
    const expected = Map({}).merge({
      isFething: false,
      data: [
        { symbol: 'TACOW', lastSalePrice: 0 },
        { symbol: 'AI', lastSalePrice: 10.415 },
        { symbol: 'ATU', lastSalePrice: 27.925 },
        { symbol: 'GAMR', lastSalePrice: 0 }
      ]
    });

    expect(getVisibleStocks(state)).toEqual(expected);
  });
});
