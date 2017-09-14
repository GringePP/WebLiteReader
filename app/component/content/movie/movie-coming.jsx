import * as React from "react";
import '../../../style/content/movie/movie-coming.scss';

export default class MovieComing extends React.Component {

    componentDidMount() {

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