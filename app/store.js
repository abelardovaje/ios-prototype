import { createStore, applyMiddleware }from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import io from 'socket.io-client';
import CreateSocketMiddleware from './middlewares/socket';
import {NODE_HOST, NODE_PORT} from 'react-native-dotenv';
console.log(NODE_HOST + ':'+ NODE_PORT);
let socket = io(NODE_HOST + ':'+ NODE_PORT,{
  jsonp: false,
  transports: ['websocket'] // you need to explicitly tell it to use websockets
}); 
let socketMiddleware = new CreateSocketMiddleware(socket);

import {
    createReactNavigationReduxMiddleware,
  } from 'react-navigation-redux-helpers';

const middleware = createReactNavigationReduxMiddleware(
    "root",
    state => state.nav,
  );


const store = createStore(
    reducers,
    applyMiddleware(thunk,middleware,socketMiddleware)
);

export default store;