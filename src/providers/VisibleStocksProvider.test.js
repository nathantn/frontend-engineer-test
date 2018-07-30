import React from 'react';
import ReactDOM from 'react-dom';
import { Map } from 'immutable';
import { Provider } from 'react-redux';

import VisibleStocksProvider from './VisibleStocksProvider';
import configureStore from '../store/configureStore';

// Use this mocked child to test provider render props
const childMock = jest.fn().mockReturnValue(<p>{'test'}</p>);

describe('<VisibleStocksProvider />', () => {
  beforeEach(() => {
    childMock.mockClear();
  });

  test('provider calls children with visible stocks state', () => {
    const div = document.createElement('div');
    // Initialize store with default value
    const store = configureStore();

    ReactDOM.render(
      <Provider store={store}>
        <VisibleStocksProvider>{childMock}</VisibleStocksProvider>
      </Provider>,
      div
    );

    const expected = Map({
      isFetching: false,
      data: null,
      error: null
    });
    expect(childMock).toHaveBeenCalledWith(expected);

    ReactDOM.unmountComponentAtNode(div);
  });
});
