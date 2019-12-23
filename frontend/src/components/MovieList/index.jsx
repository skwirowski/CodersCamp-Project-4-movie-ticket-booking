import React, { useState, useEffect } from 'react';
import MovieItem from 'components/MovieItem';
import { Link } from 'react-router-dom';
import routes from 'static/routes';

  
const MovieList = ({ movies }) => {
  const { details } = routes;
  const renderedList = movies.map(movie =>
    <div className="column">
      <Link to={details(movie.id)}>
      <MovieItem movie={movie} key={movie.id}/>
      </Link>
    </div>
    )

  return (
    <div className="ui four column grid">
      {renderedList}
    </div>
  );
};

export default MovieList;
