/* eslint-disable react/prop-types */
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import routes from 'static/routes';
import 'css/BookingSummary.css';
import { convertTimestamp } from 'utils/timestampConverter';

const BookingSummary = ({ premiere, image, title, seats, reservationTime }) => {
  const { id } = useParams();

  const { ticket, seatingChoice } = routes;

  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <img
            className="img-thumbnail mx-auto d-block img-fluid"
            alt={premiere}
            src={image}
          />
        </div>
        <div className="col-8">
          <div className="row">
            <div className="col">
              <div className="header">Your booking summary:</div>
              <div>
                <span className="summary">Movie Title: </span>
                <span>{title}</span>
              </div>
              <div>
                <span className="summary">Reservation Time: </span>
                <span>{convertTimestamp(reservationTime)}</span>
              </div>
              <div>
                <span className="text">Seats Booked: </span>
                <span>
                  {seats.map(item => (
                    <li
                      key={seats.indexOf(item)}
                    >{`${item.row}${item.column}`}</li>
                  ))}
                </span>
              </div>
            </div>
            <div className="col d-flex flex-column justify-content-center align-items-center">
              <Link to={ticket(id)}>
                <button className="btn" type="submit">
                  PRINT TICKET
                </button>
              </Link>
              <Link to={seatingChoice(id)}>
                <button className="btn" type="submit">
                  GO BACK
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingSummary;
