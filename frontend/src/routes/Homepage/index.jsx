import React, { useState, useEffect } from 'react';
import MovieList from 'components/MovieList';
import SearchBox from 'components/SearchBox';
import Carousel from 'components/Carousel';

import moviesApi, { endpointGetGenres } from 'static/moviesAPI';

const Homepage = () => {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const controller = new AbortController();

    fetch(`${moviesApi}`, {signal: controller.signal})
      .then(res => res.json())
      .then(json => setMovies(json.results))
      .catch(err => {
        if (err.name === 'AbortError') {
          return
        }
      })
    return () => controller.abort();
  }, []);

  useEffect(() => {
    const controller = new AbortController();

    fetch(`${endpointGetGenres}`, {signal: controller.signal})
      .then(res => res.json())
      .then(json => setGenres(json.genres))
      .catch(err => {
        if (err.name === 'AbortError') {
          return
        }
      })
    return () => controller.abort();
  }, []);
 
  return (
    <div className="container-fluid">
      <Carousel movies={movies.slice(0,8)} genres={genres}/>
      <div className="container">
          <div className="row">
            <div className="col-8">
              <h3 className="movies-header">what's on</h3>
            </div>
            <div className="col-4">
              <SearchBox />
            </div>
          </div>
          <div className="row">
            <MovieList movies={movies.slice(0,8)} />
          </div>
          <div className="row">
            <div className="col">
              <h3 className="movies-header">ajmax presents</h3>
            </div>
          </div>
          <div className="row">
            <MovieList movies={movies.slice(8,16)} />
          </div>
      </div>
    </div>
  );
};

export default Homepage;
