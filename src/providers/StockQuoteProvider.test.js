import React from 'react';
import ReactDOM from 'react-dom';
import { Map } from 'immutable';
import { Provider } from 'react-redux';

import StockQuoteProvider from './StockQuoteProvider';
import configureStore from '../store/configureStore';

// Use this mocked child to test provider render props
const childMock = jest.fn().mockReturnValue(<p>{'test'}</p>);

describe('<StockQuoteProvider />', () => {
  beforeEach(() => {
    childMock.mockClear();
  });

  test('provider calls children with stockQuote state', () => {
    const div = document.createElement('div');
    // Initialize store with default value
    const store = configureStore();

    ReactDOM.render(
      <Provider store={store}>
        <StockQuoteProvider>{childMock}</StockQuoteProvider>
      </Provider>,
      div
    );

    const expected = undefined;
    expect(childMock).toHaveBeenCalledWith(expected);

    ReactDOM.unmountComponentAtNode(div);
  });
});
