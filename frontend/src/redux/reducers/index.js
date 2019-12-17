import { combineReducers } from 'redux';

import moviesReducer from './moviesReducer';

const rootReducer = combineReducers({
  movies: moviesReducer,
  // TODO: here we can add more reducers
});

export default rootReducer;
