/**
 * External Dependencies:
 */
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleWare from 'redux-saga';
import { routerMiddleware as createRouterMiddleware } from 'react-router-redux';

/**
 * Internal Dependencies:
 */
import rootReducer from './reducers';
import rootSaga from './sagas';

// create middleware
const sagaMiddleware = createSagaMiddleWare();
const routerMiddleware = createRouterMiddleware();

/* eslint no-underscore-dangle: 0 */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint no-underscore-dangle: 1 */
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(routerMiddleware, sagaMiddleware)),
);

sagaMiddleware.run(rootSaga);

export default store;
