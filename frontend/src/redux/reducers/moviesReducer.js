import types from 'redux/types';

//* destructure object keys
const {
  MOVIES_LIST_FETCH_REQUESTED,
  MOVIES_LIST_FETCH_SUCCEEDED,
  MOVIES_LIST_FETCH_FAILED,
} = types;
//*

const INITIAL_STATE = {
  moviesListLoading: false,
  moviesList: [],
  error: null,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MOVIES_LIST_FETCH_REQUESTED:
      return {
        ...state,
        moviesListLoading: true,
      };
    case MOVIES_LIST_FETCH_SUCCEEDED:
      return {
        ...state,
        moviesListLoading: false,
        moviesList: action.payload,
      };
    case MOVIES_LIST_FETCH_FAILED:
      return {
        ...state,
        moviesListLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
