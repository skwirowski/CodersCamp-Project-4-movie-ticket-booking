/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React from 'react';
import { posterUrl } from 'static/moviesAPI';
import { Link } from 'react-router-dom';
import routes from 'static/routes';

const CarouselItemGenre = ({ genre }) => <div className="genre">{genre}</div>;

const CarouselItem = ({ movie, movieGenres }) => {
  const renderedList = movieGenres.map(genre => (
    <div key={movieGenres.indexOf(genre)}>
      <CarouselItemGenre genre={genre} />
    </div>
  ));

  const { details, dateSelection } = routes;

  return (
    <div className="carousel-item row" >
      <div className="content text-uppercase col-4">
        <Link to={details(movie.id)}>
          <h2>{movie.title}</h2>
        </Link>
        <div className="genres">{renderedList}</div>
      </div>
      <img
        className="img-fluid col-4"
        alt={movie.title}
        src={`${posterUrl}${movie.poster_path}`}
      />
      <Link to={dateSelection(movie.id)}>
        <button type="submit" className="btn">
          BOOK
        </button>
      </Link>
    </div>
  );
};

export default CarouselItem;
