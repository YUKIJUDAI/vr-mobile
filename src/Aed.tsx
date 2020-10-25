import React, { Component } from "react";
import { Carousel } from "antd-mobile";

import Head from "./Head";
import "./assets/less/aed.less";

interface State {
    index: number;
    selectedIndex: number;
    flag: boolean;
}

class Aed extends Component<any, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            index: 0,
            selectedIndex: 0,
            flag: true,
        };
    }

    listArr = [0, 1, 2, 3, 4];

    imgArr = [11, 63, 6, 1, 9];

    changeIndex(index: number) {
        this.setState({ index, flag: false });
        setTimeout(() => {
            this.setState({ index, flag: true });
        }, 0);
    }

    render() {
        return (
            <div id="aed">
                <Head />
                {this.state.flag && (
                    <Carousel autoplay={false} style={{ height: "80vh", marginTop: "1.2rem" }} dots={false} selectedIndex={this.state.selectedIndex}>
                        {new Array(this.imgArr[this.state.index]).fill("").map((item, i) => {
                            return <img key={i} src={require("./static/img/mp" + this.state.index + "/" + (i + 1) + ".png")} alt="" style={{ width: "100%", height: "100%", verticalAlign: "top" }} />;
                        })}
                    </Carousel>
                )}

                <div className="aed-list">
                    <ul>
                        {this.listArr.map((item, i) => {
                            if (i === this.state.index) {
                                return (
                                    <li
                                        key={i}
                                        onClick={() => {
                                            this.changeIndex(i);
                                        }}
                                    >
                                        <img src={require("./static/img/aed" + i + "-active.png")} alt="" />
                                    </li>
                                );
                            } else {
                                return (
                                    <li
                                        key={i}
                                        onClick={() => {
                                            this.changeIndex(i);
                                        }}
                                    >
                                        <img src={require("./static/img/aed" + i + ".png")} alt="" />
                                    </li>
                                );
                            }
                        })}
                    </ul>
                </div>
            </div>
        );
    }
    componentDidMount() {}
}
export default Aed;
