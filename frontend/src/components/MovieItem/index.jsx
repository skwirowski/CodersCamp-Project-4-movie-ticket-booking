import React from 'react';
// import './VideoItem.css';

const MovieItem = ({ movie }) => {
  const posterUrl = 'https://image.tmdb.org/t/p/w500';
  return (
    <div className="movie-item">
      <img 
        className="image" 
        alt={movie.release_date}  
        src={`${posterUrl}${movie.poster_path}`}
      />
      <div className="content">
        <div className="header">{movie.title}</div>
        <div className="">{movie.overview}</div>
      </div>
    </div>
  )
}

export default MovieItem;
