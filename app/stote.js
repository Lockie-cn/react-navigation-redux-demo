import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers';

const middlewares = [];

if (__DEV__) {
  middlewares.push(createLogger());
}

const enhancer = compose(
  applyMiddleware(...middlewares),
  __DEV__ && window && window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(rootReducer, enhancer);

export default store;