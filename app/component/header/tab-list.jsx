import * as React from "react";
import '../../style/header/tab-list.scss'

export default class TabList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            list: props.list,
            index: 0
        };
    }

    getStateClassName(index) {
        return index === this.state.index ? "tab-list-item-activated" : "tab-list-item-normal";
    }

    onItemClick(index) {
        this.setState({
            index: index
        });
    }

    render() {
        return (
            <div className="tab-list">
                {
                    this.state.list.map((item, index) => {
                        return <p className={`tab-list-item ${this.getStateClassName(index)}`} key={index}
                                  onClick={() => this.onItemClick(index).bind(this)}>{item}</p>
                    })
                }
            </div>
        )
    }

}