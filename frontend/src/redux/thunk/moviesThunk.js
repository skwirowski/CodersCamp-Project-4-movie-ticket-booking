import moviesApiUrl from 'static/moviesAPI';
import actions from 'redux/actions/moviesActions';
import getRequest from 'services/getRequest';

//* destructure object keys
const { requestMoviesFetch, resolveMoviesFetch, rejectMoviesFetch } = actions;
//*

const fetchMovies = () => async dispatch => {
  dispatch(requestMoviesFetch());

  try {
    const response = await getRequest(moviesApiUrl);

    return dispatch(resolveMoviesFetch(response.results));
  } catch (error) {
    return dispatch(rejectMoviesFetch(error));
  }
};

export default fetchMovies;
