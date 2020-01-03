/* eslint-disable react/prop-types */
import React from 'react';
import MovieItem from 'components/MovieItem';
import { Link } from 'react-router-dom';
import routes from 'static/routes';

const MovieList = ({ movies }) => {
  const { details } = routes;

  const renderedList = movies.map(movie => (
    
    // eslint-disable-next-line no-underscore-dangle
    <div className="column col-xl-3 col-4" key={movie._id}>
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
