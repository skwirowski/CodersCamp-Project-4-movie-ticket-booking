import React, { useState, useEffect } from 'react';
import CarouselItem from 'components/CarouselItem';
import { Link } from 'react-router-dom';
import routes from 'static/routes';
import logo from 'static/svg/logo.svg';

  
const Carousel = ({ movies }) => {

  // const { details } = routes;
  const renderedList = movies.map(movie => 
    <div className="carousel-item">
      <CarouselItem movie={movie}/>
    </div>
    )

  const indicators = movies.map((movie, i) => 
    <li data-target="#slider" data-slide-to={i+1}></li>
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
          <img src={logo} alt="Los Angeles" width="1100" height="500"/>
        </div>
          {renderedList}
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
