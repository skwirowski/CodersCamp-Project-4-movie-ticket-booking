import React, { useState, useEffect } from 'react';
import BookingSummary from 'components/BookingSummary';
import routes from 'static/routes';
import { Link, useParams } from 'react-router-dom';
import { apiUrl, apiKey } from 'static/moviesAPI';





const Summary = () => {
    const [movie, setMovie] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const controller = new AbortController();
    
        fetch(`${apiUrl}${id}?api_key=${apiKey}`, { signal: controller.signal })
          .then(res => res.json())
          .then(json => setMovie(json))
          .catch(err => {
            if (err.name === 'AbortError') {
              return
            }
          })
      
        return () => controller.abort();
      }, [id]);
    
      const posterUrl = 'https://image.tmdb.org/t/p/w500'
    const { ticket, seatingChoice } = routes;
    return (
        <div>
            <BookingSummary
                title= {movie.title}
                reservationTime={1577477896000}
                seats={[{ row: 21, column: 'B' }, { row: '21', column: 'C' }]}
                image={`${posterUrl}${movie.poster_path}`}
            />
            <button><Link to={seatingChoice(id)}>Go back</Link></button>
            <button><Link to={ticket(id)}>Book tickets</Link></button>

        </div>

    );
};

export default Summary;