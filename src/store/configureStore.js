import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

import rootReducer from '../reducers';
import iexApi from '../resources/iexApi';

const configureStore = preloadedState =>
  createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunk.withExtraArgument({ iexApi }))
  );

export default configureStore;
