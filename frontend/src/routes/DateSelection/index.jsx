import React from 'react';
import { Link, useParams } from 'react-router-dom';

import routes from 'static/routes';

const DateSelection = () => {
  const { id } = useParams();
  //* destructure object keys
  const { dateSelection, seatingChoice } = routes;
  //*

  return (
    <>
      <h2>Date Selection</h2>
      <Link to={seatingChoice(id)}>See seating choice page</Link>
      <Link to={dateSelection(id)}>Go back date selection page</Link>
    </>
  );
};

export default DateSelection;
