import { legacy_createStore as createStore, compose, applyMiddleware} from 'redux'
import {Reducers} from '../Reducers/index.js';
import thunk from 'redux-thunk';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


/* Creating a store with the reducers and the middleware. */
const Store = createStore(
    Reducers,
    composeEnhancer(applyMiddleware(thunk))
);

export default Store;