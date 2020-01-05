/* eslint-disable no-underscore-dangle */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import routes from 'static/routes';

const CarouselItemGenre = ({ genre }) => <div className="genre">{genre}</div>;

export const CarouselItem1 = ({ movie, genres }) => {
  const renderedList = genres.map(genre => (
    <div key={genres.indexOf(genre)}>
      <CarouselItemGenre genre={genre} />
    </div>
  ));
  const { details, dateSelection } = routes;

  return (
    <div className="carousel-item active">
      <div className="content carousel-caption">
        <Link to={details(movie._id)}>
          <h2>{movie.title}</h2>
        </Link>
        <div className="genres">{renderedList}</div>
      </div>
      <img className="img-fluid" alt={movie.title} src={movie.image} />
      <Link to={dateSelection(movie._id)}>
        <button type="submit" className="btn">
          BOOK
        </button>
      </Link>
    </div>
  );
};

export const CarouselItem = ({ movie, genres }) => {
  const renderedList = genres.map(genre => (
    <div key={genres.indexOf(genre) + 1}>
      <CarouselItemGenre genre={genre} />
    </div>
  ));
  const { details, dateSelection } = routes;

  return (
    <div className="carousel-item">
      <div className="content carousel-caption">
        <Link to={details(movie._id)}>
          <h2>{movie.title}</h2>
        </Link>
        <div className="genres">{renderedList}</div>
      </div>
      <img className="img-fluid" alt={movie.title} src={movie.image} />
      <Link to={dateSelection(movie._id)}>
        <button type="submit" className="btn">
          BOOK
        </button>
      </Link>
    </div>
  );
};
