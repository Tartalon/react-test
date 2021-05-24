import { createStore, applyMiddleware } from 'redux';
import rocketsReducer from '../reducers';
import thunk from 'redux-thunk';

const store = createStore(rocketsReducer, applyMiddleware(thunk));

export default store;
