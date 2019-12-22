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
    <div className=" homepage-container">
      <header>
        <span>POLECANE FILMY</span>
        <a href="/">Sprawdź repertuar</a>
      </header>
      <MovieList movies={movies}/>
    </div>
  );
};

export default Homepage;
