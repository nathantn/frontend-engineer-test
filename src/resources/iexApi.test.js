import API from './iexApi';

describe('resource: IEXTranding', () => {
  test('object implements fetchStocks', () => {
    expect(API.fetchStocks).toBeTruthy();
  });

  test('object implements getStock', () => {
    expect(API.fetchStocks).toBeTruthy();
  });

  test('fetchStocks is a function and return a Promise', () => {
    expect(typeof API.fetchStocks).toBe('function');
    expect(API.fetchStocks()).resolves.toBeTruthy();
  });

  test('getStock is a function and return a Promise', () => {
    expect(typeof API.getStock).toBe('function');
    expect(API.getStock()).resolves.toBeTruthy();
  });
});
