import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';

import appReducer from 'reducers';

export const sagaMiddleware = createSagaMiddleware();

// Note: createReactNavigationReduxMiddleware must be run before reduxifyNavigator
export const navMiddleware = createReactNavigationReduxMiddleware('root', state => state.nav);

const middlewares = [sagaMiddleware, navMiddleware];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

export default function configureStore(preloadedState) {
  return createStore(appReducer, preloadedState, compose(applyMiddleware(...middlewares)));
}
