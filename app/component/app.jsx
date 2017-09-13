import * as React from "react";
import Header from "./header/header.jsx";
import MovieContainer from "./content/movie/movie-container.jsx";
import '../style/app.scss';

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            list: ['豆瓣电影', '知乎日报', 'Github'],
            index: 0
        }
    }

    render() {
        return (<div className="app-wrapper">
            <Header list={this.state.list}/>
            <div className="content-wrapper">
                <MovieContainer/>
            </div>
        </div>)
    }
}