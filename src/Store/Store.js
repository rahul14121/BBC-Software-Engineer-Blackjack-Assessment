import { legacy_createStore as createStore} from 'redux'
import Reducers from '../Reducers/index.js';



/* Creating a store with the reducers and the redux dev tools. */
const Store = createStore(
    Reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default Store;