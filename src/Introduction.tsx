import React from "react";
import { Link } from "react-router-dom";
import qs from "qs";
import Swiper from "swiper";
import Head from "./Head";
import http from "./http/index";

import "swiper/swiper.less";
import "./assets/less/introduction.less";

interface State {
    introductionList: Array<{ [propsName: string]: any }>;
    index: number;
    navigate: string;
}

export default class Introduction extends React.Component<any, State, {}> {
    constructor(props: any) {
        super(props);

        this.state = {
            introductionList: [],
            index: 0,
            navigate: "2",
        };
    }
    componentWillMount() {
        const navigate = qs.parse(window.location.href.split("?")[1]).navigate;
        this.setState({ navigate: navigate as string });
        this.getIntroduction(navigate as string);
        this.props.history.listen((route: any) => {
            const navigate = qs.parse(window.location.href.split("?")[1]).navigate;
            this.setState({ navigate: navigate as string });
            this.getIntroduction(navigate as string);
        });
    }

    mySwiper: any = null;

    getIntroduction = async (navigate: string) => {
        var res: any = await http.post("http://me.amrtang.com/vr_photo/api/web/v1/resource/list", {
            time: 1480576266,
            token: "c92114bcc9e4454f1d2b7399dc9d62a9",
            authToken: "",
            navigate,
        });
        if (res.status === 1) {
            this.setState({ introductionList: res.data });
            if (res.data.length > 0) {
                this.mySwiper = new Swiper(".swiper-container", {
                    slidesPerView: 3,
                    on: {
                        click: ({ clickedIndex }) => {
                            this.setState({ index: clickedIndex });
                        },
                    },
                });
            }
        }
    };

    render() {
        return (
            <div className="introduction">
                <Head />
                {this.state.introductionList.length > 0 && (
                    <div className="introduction-main">
                        <div className="introduction-title">
                            <p>
                                {this.state.navigate === "2" ? "微创®线上知行学院" : "专业教育"}
                                <span> 介绍视频</span>
                            </p>
                        </div>
                        <div className="introduction-pic">
                            <Link to={"/video?id=" + this.state.introductionList[this.state.index].id}>
                                <img src={this.state.introductionList[this.state.index].base_path + "/" + this.state.introductionList[this.state.index].video_big_path} alt="" />
                            </Link>
                        </div>
                        <div className="introduction-info">
                            <p className="introduction-info-title">{this.state.navigate === "2" ? "微创®线上知行学院" : "专业教育"}</p>
                            <p className="introduction-info-time">时间:{this.state.introductionList[this.state.index].time_length}</p>
                            <p className="introduction-info-msg">简介:{this.state.introductionList[this.state.index].introduce}</p>
                        </div>
                    </div>
                )}
                <div className="introduction-bottom">
                    <div className="swiper-container">
                        <div className="swiper-wrapper">
                            {this.state.introductionList.map((item, i) => {
                                return (
                                    <div className="swiper-slide" key={i}>
                                        <div className="swiper-li">
                                            <img src={item.base_path + "/" + item.avatar_path} alt="" />
                                            <p className="zh">{item.title}</p>
                                            <p className="en">{item.title_en}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
