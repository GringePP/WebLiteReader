import * as React from "react";
import ListView from "../../common/list-view.jsx";
import '../../../style/content/movie/movie-item.scss';
import '../../../style/content/movie/movie-on.scss';


let list = [
    {
        name: "蜘蛛侠：英雄归来",
        post: "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2497756471.jpg"
    },
    {
        name: "猩球崛起3：终极之战",
        post: "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2494093630.jpg"
    },
    {
        name: "敦刻尔克",
        post: "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2494950714.jpg"
    },
    {
        name: "战狼2",
        post: "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2485983612.jpg"
    },
    {
        name: "刀剑神域：序列之争",
        post: "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2498371582.jpg"
    }
];

let listView;

export default class MovieOn extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            list: list.concat(list)
        };
        this.onLoadMore = this.onLoadMore.bind(this);
        this.getListItem = this.getListItem.bind(this);
    }

    componentDidMount() {
        listView = this.refs.ListView;
    }

    onLoadMore() {
        this.setState({list: this.state.list.concat(list)}, () => listView.finishLoadMore());
    }

    getListItem(item, index) {
        return (
            <div className="movie-item-wrapper" key={index}>
                <img className="movie-item-image" style={{backgroundImage: 'url(' + item.post + ')'}}/>
                <p className="movie-item-title">{item.name}</p>
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