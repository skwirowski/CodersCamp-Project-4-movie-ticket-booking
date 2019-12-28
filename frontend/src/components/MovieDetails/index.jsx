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
                        <span className="vote"><i class="fas fa-star"></i> {props.vote}</span>
                        <br />
                        <span className="vote">Average rating</span>
                    </div>
                    <div>
                        <span className="text">Relase Date:  </span>
                        <div> {props.releaseDate}</div>
                    </div>
                    <div>
                        <span className="text">Description: </span>
                        <div>{props.content}</div>
                    </div>
                    <iframe className="trailer"
                    src={`https://www.youtube.com/embed/${props.trailers}?rel=0&amp;showinfo=0`} 
                    frameBorder="0" 
                    title={props.title}>
                    </iframe>
                </div>
            </div>
        </div>
    )
}

export default MovieDetails;