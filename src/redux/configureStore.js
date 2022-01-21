import {
  createStore, combineReducers, applyMiddleware, compose,
} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import bookReducer from './books/books';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const reducers = combineReducers({
  books: bookReducer,
});

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk, logger)),
);

export default store;
