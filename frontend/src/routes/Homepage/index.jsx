import React, { useState, useEffect } from 'react';
import MovieList from 'components/MovieList';
import SearchBox from 'components/SearchBox';
import Carousel from 'components/Carousel';
import Loader from 'components/Loader';
import 'routes/Homepage/style.css';

const Homepage = () => {
  const [movies, setMovies] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    fetch('http://localhost:3000/api/movies', { signal: controller.signal })
      .then(res => res.json())
      .then(json => setMovies(json))
      .catch(err => {
        if (err.name === 'AbortError') {
          // eslint-disable-next-line no-useless-return
          return;
        }
      });

    setLoader(false);
    return () => controller.abort();
  }, []);

  if (loader) {
    return <Loader />;
  }
  return (
    <div className="container-fluid">
      <Carousel movies={movies} />
      <div className="container">
        <div className="row">
          <div className="col-8">
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <h3 className="movies-header">what's on</h3>
          </div>
          <div className="col-4">
            <SearchBox />
          </div>
        </div>
        <div className="row">
          <MovieList movies={movies} />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
