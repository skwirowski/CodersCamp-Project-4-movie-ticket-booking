/* eslint-disable react/prop-types */
import React from 'react';
import { posterUrl } from 'static/moviesAPI';

const MovieItem = ({ movie }) => {
  return (
    <div className="movie-item">
      <img
        className="img-thumbnail mx-auto d-block img-fluid"
        alt={movie.release_date}
        src={`${posterUrl}${movie.poster_path}`}
      />
      <button type="submit" className="btn">
        MORE
      </button>
      <div className="segment">
        <div className="movie-title">
          <span>{movie.title}</span>
        </div>
      </div>
    </div>
  );
};

export default MovieItem;
