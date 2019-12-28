import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { apiUrl, apiKey } from 'static/moviesAPI';
import routes from 'static/routes';
import MovieDetails from 'components/MovieDetails';

const Details = () => {
  const { id } = useParams();
  //* destructure object keys
  const { homepage, dateSelection } = routes;
  //*
  const [movies, setMovies] = useState([]);
  const [trailers, setTrailers] = useState([]);

  useEffect(() => {
    const controller = new AbortController();

    fetch(`${apiUrl}${id}?api_key=${apiKey}`, { signal: controller.signal })
      .then(res => res.json())
      .then(json => setMovies(json))
      .catch(err => {
        if (err.name === 'AbortError') {
          return
        }
      })
      fetch(`${apiUrl}${id}/videos?api_key=${apiKey}`, { signal: controller.signal })
      .then(res => res.json())
      .then(json => setTrailers(json.results))
      .catch(err => {
        if (err.name === 'AbortError') {
          return
        }
      })
    return () => controller.abort();
  }, []);

  console.log(movies);

  const posterUrl = 'https://image.tmdb.org/t/p/w500';

  return (
    <div>
      <MovieDetails 
        image={`${posterUrl}${movies.poster_path}`}
        title={movies.title}
        vote={movies.vote_average}
        count={movies.vote_count}
        releaseDate={movies.release_date}
        content={movies.overview}
        trailers={trailers[0]? trailers[0].key : null}
        />
      <button><Link to={dateSelection(id)}>See date selection page</Link></button>
      <button><Link to={homepage}>Go back</Link></button>
    </div>
  );
};



export default Details;
