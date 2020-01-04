import React from 'react';
import 'css/BookingSummary.css';
import { convertTimestamp } from 'utils/timestampConverter'

const BookingSummary = (props) => {
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
        </div>
    )
}

export default BookingSummary;