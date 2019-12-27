import React from 'react';
import 'css/Homepage.css';

const MovieDetails = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-4">
                    <img className="img-thumbnail mx-auto d-block img-fluid" 
                    alt={props.releaseDate}
                    src={props.image} />
                </div>
                <div className="col-8">
                    <div className="movie-title">
                        <span>{props.title}</span>
                    </div>
                    <span className="vote">{props.vote}</span>
                    <div className="date">{props.releaseDate}</div>
                    <div className="text">{props.content}</div>
                </div>
            </div>
        </div>
    )
}

export default MovieDetails;