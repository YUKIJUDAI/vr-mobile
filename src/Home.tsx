import React from "react";
import { Link } from "react-router-dom";
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
                <div className="t">
                    <div className="top"><a href="http://me.amrtang.com/vr_sh/"></a></div>
										<div className="top-right"><Link to={"/aed?type=0"}></Link></div>
                    <div className="left"><Link to={"/introduction?navigate=3"}></Link></div>
                    <div className="right"><Link to={"/introduction?navigate=2"}></Link></div>
                    <div className="bottom"><a href="http://me.amrtang.com/vr_sz/"></a></div>
                </div>
            </div>
        );
    }
}
