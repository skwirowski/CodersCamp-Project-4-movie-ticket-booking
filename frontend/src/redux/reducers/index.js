import { combineReducers } from 'redux';

import moviesReducer from './moviesReducer';
import reservationReducer from './reservationReducer';

const rootReducer = combineReducers({
  movies: moviesReducer,
  reservationReducer,
  // TODO: here we can add more reducers
});

export default rootReducer;
