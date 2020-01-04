/* eslint-disable react/prop-types */
import React from 'react';

const MovieItem = ({ movie }) => {
  return (
    <div className="movie-item">
      <div className="image mx-auto">
        <img
          className="img-thumbnail mx-auto d-block img-fluid"
          alt={movie.premiere}
          src={movie.image}
        />
      </div>
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
