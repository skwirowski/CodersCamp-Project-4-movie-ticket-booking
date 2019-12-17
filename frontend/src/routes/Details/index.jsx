import React from 'react';
import { Link, useParams } from 'react-router-dom';

import routes from 'static/routes';

const Details = () => {
  const { id } = useParams();
  // destructure object keys
  const { homepage, dateSelection } = routes;

  return (
    <>
      <h2>Details</h2>
      <Link to={dateSelection(id)}>See date selection page</Link>
      <Link to={homepage}>Go back to homepage</Link>
    </>
  );
};

export default Details;
