import React, { useState, useEffect } from 'react';
import MovieItem from 'components/MovieItem';

const MovieList = ({ movies }) => {
  
  const renderedList = movies.map(movie =>
    <div className="column">
      <MovieItem movie={movie} key={movie.id}/>
    </div>
    )

  return (
    <div className="ui four column grid">
      {renderedList}
    </div>
  );
};

export default MovieList;
