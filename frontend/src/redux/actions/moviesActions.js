import types from 'redux/types';

//* destructure object keys
const {
  MOVIES_LIST_FETCH_REQUESTED,
  MOVIES_LIST_FETCH_SUCCEEDED,
  MOVIES_LIST_FETCH_FAILED,
} = types;
//*

const requestMoviesFetch = () => ({
  type: MOVIES_LIST_FETCH_REQUESTED,
});

const resolveMoviesFetch = payload => ({
  type: MOVIES_LIST_FETCH_SUCCEEDED,
  payload,
});

const rejectMoviesFetch = error => ({
  type: MOVIES_LIST_FETCH_FAILED,
  error,
});

export default {
  requestMoviesFetch,
  resolveMoviesFetch,
  rejectMoviesFetch,
};
