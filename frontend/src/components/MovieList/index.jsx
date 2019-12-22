import React, {useState} from 'react';
import MovieItem from 'components/MovieItem';
import url from 'api/movies';

const MovieList = ( /*{videos, onVideoSelect}*/ ) => { // {videos} destructured props.videos
const [movies, setMovies] = useState([
  {title: 'first', id: 1},
  {title: 'second', id: 2},
  {title: 'third', id: 3},
])
  // const renderedList = movies.map(movie => 
    // <VideoItem /*onMovieSelectSelect={onVideoSelect} movie={movie} key={video.id.videoId}*//>)

  return (
    <div className="ui relaxed divided list">
      <ul>
        {movies.map(movie => {
          return (
            <li key={movie.id}>
              {movie.title}
            </li>
          )
        })}
      </ul>
      <MovieItem />
      {/* {renderedList} */}
    </div>
  )
};

export default MovieList;
