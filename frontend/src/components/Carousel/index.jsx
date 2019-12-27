import React from 'react';
import CarouselItem from 'components/CarouselItem';
import bg from 'static/img/bg.jpg';
import 'css/Carousel.css';

const Carousel = ({ movies, genres }) => {

  const renderedGenres = genres.map(genre => genre);
  const renderedMovies = movies.map(movie => {

    let movieGenres = [];
    for (let i of movie.genre_ids) {
      for (let j of renderedGenres) {
        if (i === j['id']) {
          movieGenres.push(j['name'])
        }
      }
    }
    return <CarouselItem movie={movie} movieGenres={movieGenres} key={movie.id}/>
  });

  const indicators = movies.map((movie, i) => 
    <li data-target="#slider" data-slide-to={i+1} key={i+1}></li>
    )
  return (
    <div id="slider" className="carousel slide" data-ride="carousel">

      {/* <!-- Indicators --> */}
      <ul className="carousel-indicators">
        <li data-target="#slider" data-slide-to="0" className="active"></li>
        {indicators}
      </ul>

      {/* <!-- The slideshow --> */}
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={bg} alt="background"/>
        </div>
          {renderedMovies}
      </div>
        {/* <!-- Left and right controls --> */}
        <a className="carousel-control-prev" href="#slider" data-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </a>
        <a className="carousel-control-next" href="#slider" data-slide="next">
          <span className="carousel-control-next-icon"></span>
        </a>
      </div>
  );
};

export default Carousel;
