import React, { useState, useEffect } from 'react';
import BookingSummary from 'components/BookingSummary';
import routes from 'static/routes';
import { Link, useParams } from 'react-router-dom';


const Summary = (props) => {
    const { ticket, seatingChoice } = routes;
    const { id } = useParams();
    return (
        <div>
            <BookingSummary
                title="Star Wars"
                reservationTime={1577477896000}
                seats={[{ row: 21, column: 'B' }, { row: '21', column: 'C' }]}
                image={'https://image.tmdb.org/t/p/w500/db32LaOibwEliAmSL2jjDF6oDdj.jpg'}
            />
            <button><Link to={seatingChoice(id)}>Go back</Link></button>
            <button><Link to={ticket(id)}>Book tickets</Link></button>

        </div>

    );
};

export default Summary;