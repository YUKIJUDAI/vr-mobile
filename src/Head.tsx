import React from "react";
import "./assets/less/head.less";

export default class Head extends React.Component {
    constructor(props: any) {
        super(props);
    }

    render() {
        return <div className="head">
            <img src={require("./static/img/head.png")} className="head-bg"/>
            <div className="head-main">
                <img src={require("./static/img/logo.png")} className="head-logo"/>
                <img src={require("./static/img/search.png")} className="head-search"/>
                <img src={require("./static/img/menu.png")} className="head-menu"/>
            </div>
        </div>;
    }
}
