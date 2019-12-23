import React from 'react';
import 'css/MovieItem.css';

const MovieItem = ({ movie }) => {
  const posterUrl = 'https://image.tmdb.org/t/p/w500';
  return (
    <div className="ui item movie-item">
      <img 
        className="ui small image" 
        alt={movie.release_date}  
        src={`${posterUrl}${movie.poster_path}`}
      />
      <div className="ui segment">
        <div className="ui center aligned header movie-header"><span>{movie.title}</span></div>
      </div>
    </div>
  )
}

export default MovieItem;
