import React, { useState, useEffect } from 'react';
import MovieList from 'components/MovieList';
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

  return (
    <div className=" homepage-container">
      <header>
        <span>POLECANE FILMY</span>
        <a href="#">Sprawdź repertuar</a>
      </header>
      <MovieList />
    </div>
  );
};

export default Homepage;
