import React from 'react';
import { Link, useParams } from 'react-router-dom';
import routes from 'static/routes';
import 'css/MovieDetails.css';

const MovieDetails = (props) => {
    const { id } = useParams();

    const { homepage, dateSelection } = routes;

    return (
        <div className="container">
            <div className="row">
                <div className="col-4">
                    <img className="img-thumbnail mx-auto d-block img-fluid" 
                    alt={props.releaseDate}
                    src={props.image} />
                </div>
                <div className="col-8">
                    {/* <div class="content"> */}
                        <div className="movie-details-title row">
                            <div className="col">
                                <span>{props.title}</span>
                            </div>

                            <div className="col">
                                <span className="vote"><i class="fas fa-star"></i> {props.vote}</span>
                                <br />
                                <span className="vote">Average rating</span>
                            </div>
                        </div>
                        <div className="row">
                            <span className="text">Relase Date:  </span>
                            <div> {props.releaseDate}</div>
                        </div>
                        <div className="row">
                            <span className="text">Description: </span>
                            <div className="description">{props.content}</div>
                        </div>
                    {/* </div> */}
                    <div className="row">
                        <div className="col">
                            <iframe className="trailer"
                                src={`https://www.youtube.com/embed/${props.trailers}?rel=0&amp;showinfo=0`}
                                frameBorder="0"
                                title={props.title}>
                            </iframe>
                        </div>
                    <div className="col d-flex flex-column justify-content-center align-items-center">
                        <Link to={dateSelection(id)}><button className="btn">BOOK</button></Link>
                        <Link to={homepage}><button className="btn">GO BACK</button></Link>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieDetails;