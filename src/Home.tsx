import React from "react";
import "./assets/less/home.less";
import Head from "./Head";

export default class Home extends React.Component {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div>
                <Head />
            </div>
        );
    }
}
