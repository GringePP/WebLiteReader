import * as React from "react";
import '../../style/header/header.scss'
import TabList from "./tab-list.jsx";

export default class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            list: props.list
        }
    }

    render() {
        return (<div className="header">
            <img className="header-icon"/>
            <p className="header-title">LiteReader</p>
            <div className="header-tab-list"><TabList list={this.state.list}/></div>
        </div>)
    }
}