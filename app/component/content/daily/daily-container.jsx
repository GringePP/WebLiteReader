import * as React from "react";
import BannerView from "../../common/banner-view.jsx";
import {getTopArticles} from '../../../api/zhihu-daily-api';

export default class DailyContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            topArticleList: []
        };
        this.getTopArticleImage = this.getTopArticleImage.bind(this);
        this.getTopArticleTitle = this.getTopArticleTitle.bind(this);
        this.handlerTopArticleClick = this.handlerTopArticleClick.bind(this);
    }

    componentDidMount() {
        getTopArticles()
            .then(data => this.setState({
                topArticleList: data["top_stories"]
            }))
    }

    getTopArticleImage(index) {
        return this.state.topArticleList[index]["image"];
    }

    getTopArticleTitle(index) {
        return this.state.topArticleList[index]["title"];
    }

    handlerTopArticleClick(item, index) {
        console.log(index);
    }

    render() {
        return <BannerView list={this.state.topArticleList} getItemImage={this.getTopArticleImage}
                           getItemTitle={this.getTopArticleTitle} onItemClick={this.handlerTopArticleClick}/>;
    }


}