import React from 'react';
// import './VideoItem.css';

const MovieItem = ({ movie, onMovieSelect }) => {

  return (
    <div>
       {/* onClick={() => onMovieSelect(movie)} className="movie-item" > */}
      {/* <img 
        className="image" 
        alt={video.snippet.title}  
        src={video.snippet.thumbnails.medium.url}
      /> */}
      image
      <div className="content">
        description
        {/* <div className="header">{video.snippet.title}</div> */}
      </div>
    </div>
  )
}

export default MovieItem;
