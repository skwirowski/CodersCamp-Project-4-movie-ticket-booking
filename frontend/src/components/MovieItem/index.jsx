import React from 'react';
import 'css/Homepage.css';

const MovieItem = ({ movie }) => {
  const posterUrl = 'https://image.tmdb.org/t/p/w500';

  return (
    <div className="movie-item">
      <img
        className="img-thumbnail mx-auto d-block img-fluid"
        alt={movie.release_date}
        src={`${posterUrl}${movie.poster_path}`}
      />
      <button className="btn">MORE</button>
      <div className="segment">
        <div className="movie-title"><span>{movie.title}</span></div>
      </div>
    </div>
  )
}

export default MovieItem;