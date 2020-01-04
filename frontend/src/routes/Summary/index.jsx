import React, { useState, useEffect } from 'react';
import BookingSummary from 'components/BookingSummary';
import { useParams } from 'react-router-dom';
import { apiUrl, apiKey } from 'static/moviesAPI';

const Summary = () => {
    const [movie, setMovie] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const controller = new AbortController();
    
      fetch(`http://localhost:3000/api/movies/${id}`, { signal: controller.signal })
          .then(res => res.json())
          .then(json => setMovie(json))
          .catch(err => {
            if (err.name === 'AbortError') {
              return
            }
          })
      
        return () => controller.abort();
      }, [id]);
    return (
        <div>
            <BookingSummary
              title= {movie.title}
                reservationTime={1577477896000}
                seats={[{ row: 21, column: 'B' }, { row: '21', column: 'C' }]}
                image={`${movie.image}`}
            />
        </div>
    );
};

export default Summary;