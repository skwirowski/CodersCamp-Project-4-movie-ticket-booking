import React from 'react';
import 'css/MovieItem.css';

const MovieItem = ({ movie }) => {
  const posterUrl = 'https://image.tmdb.org/t/p/w500';
  return (
    <div className="ui fluid cards movie">
      <img 
        className="image" 
        alt={movie.release_date}  
        src={`${posterUrl}${movie.poster_path}`}
      />
      <div className="content">
        <span className="header">{movie.title}</span>
      </div>
    </div>
  )
}

export default MovieItem;
