import React from 'react';
// import 'css/MovieItem.css';

const CarouselItem = ({ movie }) => {
  const posterUrl = 'https://image.tmdb.org/t/p/w500';
  return <img src={`${posterUrl}${movie.poster_path}`} width="1100" height="500"/>
}

export default CarouselItem;
