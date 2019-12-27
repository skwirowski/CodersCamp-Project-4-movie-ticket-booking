import React from 'react';
import 'css/MovieDetails.css';

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
                    <div className="movie-details-title">
                        <span>{props.title}</span>
                    </div>
                    <span className="vote">Rating: {props.vote}</span>
                    <div className="date">Relase Date: {props.releaseDate}</div>
                    <div className="text">Description: {props.content}</div>
                    <iframe className="trailer"
                    src={`https://www.youtube.com/embed/${props.trailers}?rel=0&amp;showinfo=0`} frameborder="0" allowfullsrenn>

                    </iframe>
                </div>
            </div>
        </div>
    )
}

export default MovieDetails;