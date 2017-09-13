import * as React from "react";
import MovieOn from "./movie-on.jsx";
import '../../../style/content/movie/movie-container.scss';
import MovieComing from "./movie-coming.jsx";


export default class MovieContainer extends React.Component {

    render() {
        return (
            <div className="movie-container-wrapper">
                <div className="movie-on-outer-wrapper">
                    <MovieOn/>
                </div>
                <div className="movie-coming-outer-wrapper">
                    <MovieComing/>
                </div>
            </div>
        )
    }

}