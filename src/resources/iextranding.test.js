import API from './iextranding';

describe('Resource: IEXTranding', () => {
  test('Objeto implementa fetchStocks', () => {
    expect(API.fetchStocks).toBeTruthy();
  });

  test('fecthStocks é uma função que retorna uma Promise', () => {
    expect(typeof API.fetchStocks).toBe('function');
    expect(API.fetchStocks).resolves.toBeTruthy();
  });
});
