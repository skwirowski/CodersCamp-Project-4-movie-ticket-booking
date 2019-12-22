import React, { useState, useEffect } from 'react';
import MovieItem from 'components/MovieItem';

const MovieList = ({ movies }) => {
  
  const renderedList = movies.map(movie =>
    <MovieItem movie={movie} key={movie.id}/>)

  return (
    <div className="ui relaxed divided list">
      {renderedList}
    </div>
  );
};

export default MovieList;
