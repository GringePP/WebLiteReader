import * as React from "react";
import Header from "./header/header.jsx";
import MovieContainer from "./content/movie/movie-container.jsx";
import '../style/app.scss';
import DailyContainer from "./content/daily/daily-container.jsx";
import Bus from "../util/bus/bus";

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            list: ['豆瓣电影', '知乎日报', 'Github'],
            index: 0
        }
    }

    componentWillMount() {
        Bus.subscribe("INDEX_CHANGE", (index) => this.setState({index: index}));
    }

    getContent() {
        switch (this.state.index) {
            case 0:
                return <MovieContainer/>;
            case 1:
            case 2:
            default:
                return <DailyContainer/>;
        }
    }

    render() {
        return (<div className="app-wrapper">
            <Header list={this.state.list}/>
            <div className="content-wrapper">
                {
                    this.getContent()
                }
            </div>
        </div>)
    }
}