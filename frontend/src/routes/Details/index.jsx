import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { apiUrl, apiKey } from 'static/moviesAPI';
import MovieDetails from 'components/MovieDetails';

const Details = () => {
  const { id } = useParams();
  const [movies, setMovies] = useState([]);
  const [trailers, setTrailers] = useState([]);

  useEffect(() => {
    const controller = new AbortController();

    // fetch(`${apiUrl}${id}?api_key=${apiKey}`, { signal: controller.signal })
    //   .then(res => res.json())
    //   .then(json => setMovies(json))
    //   .catch(err => {
    //     if (err.name === 'AbortError') {
    //       return
    //     }
    //   })

    // Information for mentor: - trailers works only with api key and it worked correct when we getatas from api key , now it nott work correct with base, because in base in backend is no trailers. 
      fetch(`${apiUrl}${id}/videos?api_key=${apiKey}`, { signal: controller.signal })
      .then(res => res.json())
      .then(json => setTrailers(json.results))
      .catch(err => {
        if (err.name === 'AbortError') {
          return
        }
      })
    fetch(`http://localhost:3000/api/movies/${id}`, { signal: controller.signal })
      .then(res => res.json())
      .then(json => setMovies(json))
      .catch(err => {
        if (err.name === 'AbortError') {
          return
        }
      })
    return () => controller.abort();
  }, [id]);

  console.log(movies);

  return (
    <div>
      <MovieDetails 
        image={`${movies.image}`}
        title={movies.title}
        // vote={movies.vote_average}
        // count={movies.vote_count}
        time={movies.duration}
        releaseDate={movies.premiere}
        content={movies.desc}
        trailers={trailers && trailers[0] ? trailers[0].key : null}
        // trailers={trailers[0] ? trailers[0].key : null}
        />
    </div>
  );
};



export default Details;
