import * as React from "react";
import '../../style/common/flow-list.scss';

export default class FlowList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            list: props.list,
            showMore: false,
            threshold: props.threshold
        };
        this.toggleShowMore = this.toggleShowMore.bind(this);
    }

    getListItem(item, index) {
        return this.props.getListItem && this.props.getListItem(item, index);
    }

    getShownNum(list, showMore) {
        if (list.length < this.state.threshold) return list.length;
        return showMore ? list.length : this.state.threshold;
    }

    toggleShowMore() {
        this.setState({showMore: !this.state.showMore});
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            list: nextProps.list
        })
    }

    render() {
        const {list, showMore} = this.state;
        return (
            list.length === 0 ? null :
                <div className="flow-list-wrapper">
                    {
                        list.slice(0, this.getShownNum(list, showMore))
                            .map((item, index) => this.getListItem(item, index))
                    }
                    <button className="flow-list-toggle"
                            onClick={this.toggleShowMore}>{showMore ? '收起' : '显示更多'}</button>
                </div>
        )
    }

}

FlowList.defaultProps = {
    list: [],
    showMore: false,
    threshold: 10
};