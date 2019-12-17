import React from 'react';
import { Link } from 'react-router-dom';

import routes from 'static/routes';

const Homepage = () => {
  //* destructure object keys
  const { details } = routes;
  //*
  const temporaryMovieId = 'frozen2';

  return (
    <>
      <h2>Homepage</h2>
      <Link to={details(temporaryMovieId)}>See details page</Link>
    </>
  );
};

export default Homepage;
