import * as React from "react";
import '../../../style/content/movie/movie-coming.scss';
import {getMovieOn} from '../../../api/douban-movie-api.js';

export default class MovieComing extends React.Component {

    componentDidMount() {
        getMovieOn(0, 10)
            .then(res => console.log(res));
    }

    render() {
        return (
            <div className="movie-coming-wrapper">
                <p className="movie-coming-title">即将上映</p>
                <div className="movie-coming-divider"/>
            </div>
        )
    }

}