/* eslint-disable react/prop-types */
import React from 'react';
import { CarouselItem, CarouselItem1 } from 'components/CarouselItem';
import 'components/Carousel/style.css';

const Carousel = ({ movies }) => {
  const firstItem = movies.slice(0, 1).map(movie => {
    return (
      // eslint-disable-next-line no-underscore-dangle
      <CarouselItem1 movie={movie} genres={movie.category} key={movie._id} />
    );
  });
  const renderedMovies = movies.slice(1).map(movie => {
    return (
      // eslint-disable-next-line no-underscore-dangle
      <CarouselItem movie={movie} genres={movie.category} key={movie._id} />
    );
  });
  const indicators = movies.map(movie => (
    <li
      data-target="#slider"
      data-slide-to={movies.indexOf(movie) + 1}
      key={movies.indexOf(movie) + 1}
    />
  ));
  return (
    <div
      id="slider"
      className="carousel slide"
      data-ride="carousel"
      data-interval="3000"
    >
      {/* <!-- Indicators --> */}
      <ol className="carousel-indicators">
        <li data-target="#slider" data-slide-to="0" className="active" />
        {indicators}
      </ol>

      {/* <!-- The slideshow --> */}
      <div className="carousel-inner">
        {firstItem}
        {renderedMovies}
      </div>
      {/* <!-- Left and right controls --> */}
      <a
        className="carousel-control-prev"
        href="#slider"
        data-slide="prev"
        role="button"
      >
        <span className="carousel-control-prev-icon" />
      </a>
      <a
        className="carousel-control-next"
        href="#slider"
        data-slide="next"
        role="button"
      >
        <span className="carousel-control-next-icon" />
      </a>
    </div>
  );
};

export default Carousel;
