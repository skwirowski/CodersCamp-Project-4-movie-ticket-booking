import React, { useState, useEffect } from 'react';
import MovieList from 'components/MovieList';
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

console.log(movies) // delete this

  return (
    <div className="ui container">
      <div className="ui grid">
        <div className="ui row">
          <div className="twelve wide column">
            <span>POLECANE FILMY</span>
          </div>  
          <div className="four wide column">
            <a href="/">Sprawdź repertuar</a>
          </div>
        </div>
        <div className="ui row">    
          <MovieList movies={movies}/>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
