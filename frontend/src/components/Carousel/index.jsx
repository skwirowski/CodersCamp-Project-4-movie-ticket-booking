/* eslint-disable react/prop-types */
/* eslint-disable no-restricted-syntax */
import React from 'react';
import CarouselItem from 'components/CarouselItem';
import bg from 'static/img/bg.jpg';
import 'components/Carousel/style.css';

const Carousel = ({ movies, genres }) => {
  const renderedGenres = genres.map(genre => genre);
  const renderedMovies = movies.map(movie => {
    const movieGenres = [];
    for (const i of movie.genre_ids) {
      for (const j of renderedGenres) {
        if (i === j.id) {
          movieGenres.push(j.name);
        }
      }
    }
    return (
      <CarouselItem movie={movie} movieGenres={movieGenres} key={movie.id} />
    );
  });
  // eslint-disable-next-line react/prop-types
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
        <div className="carousel-item active">
          <img src={bg} alt="background" />
        </div>
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
