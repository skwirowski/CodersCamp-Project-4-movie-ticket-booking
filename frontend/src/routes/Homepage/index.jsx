import React, { useState, useEffect } from 'react';
import MovieList from 'components/MovieList';
import SearchBox from 'components/SearchBox';
import moviesApi from 'static/moviesAPI';

// import { Link } from 'react-router-dom';

// import routes from 'static/routes';

// const Homepage = () => {
//   //* destructure object keys
//   const { details } = routes;
//   //*
//   const temporaryMovieId = 'frozen2';

//   return (
//     <>
//       <h2>Homepage</h2>
//       <Link to={details(temporaryMovieId)}>See details page</Link>
//     </>
//   );
// };

// eslint-disable-next-line react/prefer-stateless-function
const Homepage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const controller = new AbortController();
    fetch(`${moviesApi}`)
      .then(res => res.json())
      .then(json => setMovies(json.results));
    return () => controller.abort();
  }, []);

  return (
    <div className="ui container">
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <h2 className="ui left aligned header">what's on</h2>
          </div>
          <div className="five wide column">
            <SearchBox />
          </div>
        </div>
        <div className="ui row">
          <MovieList movies={movies.slice(0,8)} />
        </div>
        <div className="ui row">
          <div className="eleven wide column">
            <h2 className="ui left aligned header">ajmax presents</h2>
          </div>
        </div>
        <div className="ui row">
          <MovieList movies={movies.slice(8,16)} />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
