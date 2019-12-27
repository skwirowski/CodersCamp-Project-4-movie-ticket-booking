import React from 'react';
import { posterUrl } from 'static/moviesAPI';

const CarouselItemGenre = ({ genre }) => {
  return (<div className="genre">{genre}</div>)
}
  
const CarouselItem = ({ movie, movieGenres }) => {
  const renderedList = movieGenres.map((genre, i) =>
     <div key={i}>
      <CarouselItemGenre genre={genre} />
    </div>
    )

  return (
    <div className="carousel-item row" >
      <div className="content text-uppercase col-4">
        <h2>{movie.title}</h2>
        <div className="genres">
          {renderedList} 
        </div>
      </div>
      <img  className="img-fluid col-4" alt={movie.title} src={`${posterUrl}${movie.poster_path}`} />
        <a href="/" className="btn">BOOK</a>
    </div>
  )
}

export default CarouselItem;
