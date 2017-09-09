import * as React from "react";
import Tab from "./tab.jsx";
import '../../style/header/tab-list.scss'

export default class TabList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            list: props.list
        }
    }

    render() {
        return (
            <div className="tab-list">
                {
                    this.state.list.map((item, index) => {
                        return <p className="tab-list-item" key={index}>{item}</p>
                    })
                }
            </div>
        )
    }

}