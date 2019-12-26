import React from 'react';
import { Link, useParams } from 'react-router-dom';

import routes from 'static/routes';

const Details = (props) => {
  const { id } = useParams();
  //* destructure object keys
  const { homepage, dateSelection } = routes;
  //*

  return (
    <>
      <h2>Title of movie</h2>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <a href="/" className="poster">
              <img alt="poster of movie" />
            </a>
          </div>
          <div className="col-8">
            <h1 className="title">
              Title of movie
            </h1>
            <span className="vote">Vote of movie</span>
            <div className="date">Release movie</div>
            <div className="text">Overview of movie</div>
          </div>
        </div> 
      </div>
      <button><Link to={dateSelection(id)}>See date selection page</Link></button>
      <button><Link to={homepage}>Go back</Link></button>
    </>
  );
};

export default Details;
