import * as React from "react";
import '../../style/header/tab.scss'

export default class Tab extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="tab">
                <p className="tab-content">{this.props.content}</p>
            </div>
        )
    }

}