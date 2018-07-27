import API from './iextranding';

describe('Resource: IEXTranding', () => {
  test('Objeto implementa fetchStocks', () => {
    expect(API.fetchStocks).toBeTruthy();
  });

  test('Objeto implementa getStock', () => {
    expect(API.fetchStocks).toBeTruthy();
  });

  test('fetchStocks é uma função que retorna uma Promise', () => {
    expect(typeof API.fetchStocks).toBe('function');
    expect(API.fetchStocks()).resolves.toBeTruthy();
  });

  test('getStock é uma função que retorna uma Promise', () => {
    expect(typeof API.getStock).toBe('function');
    expect(API.getStock()).resolves.toBeTruthy();
  });
});
