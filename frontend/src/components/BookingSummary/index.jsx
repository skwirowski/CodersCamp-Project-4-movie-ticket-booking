import React from 'react';
import { Link, useParams } from 'react-router-dom';
import routes from 'static/routes';
import 'css/BookingSummary.css';
import { convertTimestamp } from 'utils/timestampConverter'

const BookingSummary = (props) => {
    const { id } = useParams();

    const { ticket, seatingChoice } = routes;

    return (
        <div className="container">
            <div className="row">
                <div className="col-4">
                    <img className="img-thumbnail mx-auto d-block img-fluid"
                        alt={props.premiere}
                        src={props.image} />
                </div>
                <div className="col-8">
                    <div className="header">
                        Your booking summary
                </div>
                    <span className="summary-title">Movie Title: {props.title}</span>
                    <div className="time">Reservation Time: {convertTimestamp(props.reservationTime)}</div>
                    <div className="text">Seats Booked: {props.seats.map((item, key) =>
                        <li>{`${item.row}${item.column}`}</li>
                    )}</div>
                </div>
            </div>
            <div className="row">
                <div className="col d-flex flex-column justify-content-center align-items-center">
                    <Link to={ticket(id)}><button className="btn">BOOK TICKET</button></Link>
                    <Link to={seatingChoice(id)}><button className="btn">GO BACK</button></Link>
                </div>
            </div>
        </div>
    )
}

export default BookingSummary;