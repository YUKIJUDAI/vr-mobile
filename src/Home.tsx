import React from "react";
import "./assets/less/home.less";
import Head from "./Head";

export default class Home extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="home">
                <Head />
                <div className="t"></div>
            </div>
        );
    }
}
