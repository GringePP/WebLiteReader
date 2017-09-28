import * as React from "react";
import ListView from "../../common/list-view.jsx";
import '../../../style/content/movie/movie-item.scss';
import '../../../style/content/movie/movie-on.scss';
import {getMovieOn} from "../../../api/douban-movie-api";

let listView;
let start = 0;
let count = 10;

export default class MovieOn extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            list: []
        };
        this.onLoadMore = this.onLoadMore.bind(this);
        this.getListItem = this.getListItem.bind(this);
    }

    componentDidMount() {
        listView = this.refs.ListView;
    }

    getMovieList() {
        getMovieOn(start, count)
            .then(data => data["subjects"])
            .then(data => this.setState({list: this.state.list.concat(data)}, () => {
                start += count;
                listView.finishLoadMore(data.length !== 0);
            }));
    }

    onLoadMore() {
        this.getMovieList();
    }

    getListItem(item, index) {
        return (
            <div className="movie-item-wrapper" key={index}
                 onClick={() => window.open(item["alt"])}>
                <img className="movie-item-image" style={{backgroundImage: 'url(' + item["images"]["large"] + ')'}}/>
                <p className="movie-item-title">{item["title"]}</p>
            </div>
        );
    }

    render() {
        return (
            <div className="movie-on-wrapper">
                <p className="movie-on-title">正在上映</p>
                <div className="movie-on-divider"/>
                <ListView ref="ListView" onLoadMore={this.onLoadMore} getListItem={this.getListItem}
                          list={this.state.list}/>
            </div>
        )
    }

}