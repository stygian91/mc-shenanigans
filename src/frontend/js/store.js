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

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(routerMiddleware, sagaMiddleware)
    )
);

sagaMiddleware.run(rootSaga);

export default store;
