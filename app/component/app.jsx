import * as React from "react";
import Header from "./header/header.jsx";

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            list: ['豆瓣电影', '知乎日报', 'Github'],
            index: 0
        }
    }

    render() {
        return (<div className="wrapper">
            <Header list={this.state.list}/>
        </div>)
    }
}