import * as React from "react";
import BannerView from "../../common/banner-view.jsx";
import {getSections, getTopArticles} from '../../../api/zhihu-daily-api';
import FlowList from "../../common/flow-list.jsx";
import '../../../style/content/daily/section-item.scss';

export default class DailyContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            topArticleList: [],
            sectionList: []
        };
        this.getTopArticleImage = this.getTopArticleImage.bind(this);
        this.getTopArticleTitle = this.getTopArticleTitle.bind(this);
        this.handlerTopArticleClick = this.handlerTopArticleClick.bind(this);
        this.getFlowItem = this.getFlowItem.bind(this);
    }

    componentDidMount() {
        getTopArticles()
            .then(data => this.setState({
                topArticleList: data["top_stories"]
            }));
        getSections()
            .then(data => this.setState({
                sectionList: data["data"]
            }));
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

    getFlowItem(item, index) {
        return (
            <div className="section-item" key={index}>
                <img className="section-item-img" src={item["thumbnail"]}/>
                <p className="section-item-title">{item["name"]}</p>
            </div>
        )
    }

    render() {
        return (
            <div>
                <BannerView list={this.state.topArticleList} getItemImage={this.getTopArticleImage}
                            getItemTitle={this.getTopArticleTitle} onItemClick={this.handlerTopArticleClick}/>
                <FlowList list={this.state.sectionList} getListItem={this.getFlowItem}/>
            </div>
        )
    }


}