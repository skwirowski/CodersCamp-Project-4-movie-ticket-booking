import React from 'react';
import { Link, useParams } from 'react-router-dom';
import routes from 'static/routes';

const SeatingChoice = (props) => {
    const { dateSelection, summary } = routes;
    const { id } = useParams();
    return (
        <div>
            
            <button><Link to={dateSelection(id)}>Go back</Link></button>
            <button><Link to={summary(id)}>Go To Summary</Link></button>

        </div>

    );
};

export default SeatingChoice;
