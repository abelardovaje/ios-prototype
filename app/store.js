import { createStore, applyMiddleware }from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import {
    createReactNavigationReduxMiddleware,
  } from 'react-navigation-redux-helpers';
const middleware = createReactNavigationReduxMiddleware(
    "root",
    state => state.nav,
  );
const store = createStore(
    reducers,
    applyMiddleware(thunk,middleware)
);

export default store;