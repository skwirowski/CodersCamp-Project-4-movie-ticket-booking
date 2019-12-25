import React from 'react';
// import 'css/MovieItem.css';

const CarouselItem = ({ movie }) => {
  const posterUrl = 'https://image.tmdb.org/t/p/w500';
  return (
    <div className="carousel-item">
      <img  className="img-fluid" alt={movie.title} src={`${posterUrl}${movie.poster_path}`}/>
      <div className="content">
        <h2>{movie.title}</h2>
        <p>{movie.overview}</p>
      </div>
    </div>
  )
}

export default CarouselItem;
