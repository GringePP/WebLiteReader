import * as React from "react";
import '../../style/common/list-view.scss';

let listView;
let windowHeight;

export default class ListView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false
        };
        this.handleScroll = this.handleScroll.bind(this);
    }

    handleScroll() {
        //if the view is loading more, no need to handle the scroll event.
        if (this.state.isLoading) return;
        let lastItemBottom = listView.lastChild.getBoundingClientRect().bottom;
        //if the last item of the list has come from the bottom of the browser window, trigger load-more.
        if (lastItemBottom <= windowHeight) this.onLoadMore();
    }

    onLoadMore() {
        this.setState({isLoading: true}, () => this.props.onLoadMore && this.props.onLoadMore.call());
    }

    finishLoadMore() {
        this.setState({isLoading: false});
    }

    componentDidMount() {
        listView = this.refs.ListViewContent;
        windowHeight = window.innerHeight || document.body.clientHeight;
        document.addEventListener('scroll', this.handleScroll, false);
        this.onLoadMore();      //load more at the very beginning.
    }

    componentWillUnmount() {
        document.removeEventListener('scroll', this.handleScroll, false);
    }

    render() {
        return (
            <div className="list-view-wrapper">
                <div className="list-view-content" ref="ListViewContent">
                    {
                        this.props.list.map((item, index) => {
                            return this.props.getListItem(item, index);
                        })
                    }
                </div>
            </div>
        )
    }

}