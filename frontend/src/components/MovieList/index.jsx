/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import React from 'react';
import MovieItem from 'components/MovieItem';
import { Link } from 'react-router-dom';
import routes from 'static/routes';

const MovieList = ({ movies }) => {
  const { details } = routes;

  const renderedList = movies.map(movie => (
    <div className="column col-xl-3 col-lg-4 col-md-6 col-12" key={movie._id}>
      <Link to={details(movie._id)}>
        <MovieItem movie={movie} />
      </Link>
    </div>
  ));

  return (
    <div className="ui four column grid container row movie-list">
      {renderedList}
    </div>
  );
};

export default MovieList;
