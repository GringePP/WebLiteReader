import * as React from "react";
import '../../style/common/banner-view.scss';

let autoScrollTime;

export default class BannerView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            list: props.list,
            index: 0
        };
        this.nextPic = this.nextPic.bind(this);
        this.prevPic = this.prevPic.bind(this);
        this.onItemClick = this.onItemClick.bind(this);
    }

    componentDidMount() {
        autoScrollTime = setInterval(() => this.nextPic(), this.props.interval);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            list: nextProps.list,
        });
    }

    getItemImage(index) {
        return this.props.getItemImage && this.props.getItemImage(index);
    }

    getItemTitle(index) {
        return this.props.getItemTitle && this.props.getItemTitle(index);
    }

    nextPic() {
        this.setState({
            index: (this.state.index + 1) % this.state.list.length
        })
    }

    prevPic() {
        this.setState({
            index: this.state.index === 0 ? this.state.list.length - 1 : this.state.index - 1
        })
    }

    onItemClick(item, index) {
        return this.props.onItemClick && this.props.onItemClick(item, index);
    }

    render() {
        const {list, index} = this.state;
        return list.length === 0 ? null :
            (
                <div className="banner-wrapper">
                    <div className="banner-item-prev banner-item" onClick={this.prevPic}>
                        <div className="banner-item-mask"/>
                        <img className="banner-item-img"
                             style={{backgroundImage: 'url(' + this.getItemImage(index === 0 ? list.length - 1 : index - 1) + ')'}}/>
                    </div>
                    <div className="banner-item-current banner-item"
                         onClick={() => this.onItemClick(list[index], index)}>
                        <div className="banner-item-mask">
                            <p className="banner-item-title">{this.getItemTitle(index)}</p>
                        </div>
                        <img className="banner-item-img"
                             style={{backgroundImage: 'url(' + this.getItemImage(index) + ')'}}/>
                    </div>
                    <div className="banner-item-next banner-item" onClick={this.nextPic}>
                        <div className="banner-item-mask"/>
                        <img className="banner-item-img"
                             style={{backgroundImage: 'url(' + this.getItemImage((index + 1) % list.length) + ')'}}/>
                    </div>
                </div>
            )
    }
}

BannerView.defaultProps = {
    list: [],
    index: 0,
    autoScroll: true,
    interval: 4500
};