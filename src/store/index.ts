/**
 * @file index.ts
 * @author Dmitry Guzeev <dmitry.guzeev@yahoo.com>
 */

import {
  createStore,
  compose as reduxCompose,
  applyMiddleware as reduxApplyMiddleware,
  combineReducers as reduxCombineReducers,
} from 'redux';
import reduxThunk from 'redux-thunk';
import createHashHistory from 'history/createHashHistory';
import {
  routerReducer,
  routerMiddleware as createRouterMiddleware,
} from 'react-router-redux';

import RootState from './root_state';

// Construct a store reducer
const rootReducer = reduxCombineReducers<RootState>({
  blank: (state: RootState) => state || {},
});

// Create the history for the router
export let history = createHashHistory();

// Create the router middleware
const routerMiddleware = createRouterMiddleware(history);

// Construct the store enhancer
let enhancer = reduxCompose(
  reduxApplyMiddleware(reduxThunk),
  reduxApplyMiddleware(routerMiddleware),
);

declare var __DEBUG__: boolean;

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__: any;
  }
}

// Enable the Redux devtools iff built in the debug mode
if (__DEBUG__ && window.__REDUX_DEVTOOLS_EXTENSION__) {
  enhancer = reduxCompose(enhancer, window.__REDUX_DEVTOOLS_EXTENSION__());
}

// Create the store
export default createStore(
  rootReducer,
  {} as RootState,
  enhancer,
);
