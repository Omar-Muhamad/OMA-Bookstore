import { createStore, combineReducers, applyMiddleware } from 'redux';
// import logger from 'redux-logger';
import thunk from 'redux-thunk';
import bookReducer from './books/books';

const reducers = combineReducers({
  books: bookReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
