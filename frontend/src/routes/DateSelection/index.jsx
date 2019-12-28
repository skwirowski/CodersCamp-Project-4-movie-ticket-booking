import React from 'react';
import { Link, useParams } from 'react-router-dom';
import routes from 'static/routes';

// const DateSelection = () => <div>Date Selection</div>;
const DateSelection = () => {
    // const { id } = useParams();

    const { homepage, SeatingChoice } = routes;

    return (
        <>
            <h2>DateSelection</h2>
            <Link to={SeatingChoice}>See SeatingChoice page</Link>
            <Link to={homepage}>Go back to homepage</Link>
        </>
    );
};
export default DateSelection;