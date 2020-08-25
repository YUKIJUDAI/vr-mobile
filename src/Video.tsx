import React from "react";
import qs from "qs";
import Head from "./Head";
import http from "./http/index";

import "./assets/less/introduction.less";

interface State {
    videoInfo: { [propsName: string]: any };
}

export default class Introduction extends React.Component<any, State, {}> {
    constructor(props: any) {
        super(props);

        this.state = {
            videoInfo: {},
        };
    }
    componentWillMount() {
        const id = qs.parse(window.location.href.split("?")[1]).id;
        this.getVideo(id as string);
    }

    mySwiper:any = null;

    getVideo = async (id: string) => {
        var res = await http.post("http://me.amrtang.com/vr_photo/api/web/v1/resource/info", {
            time: 1480576266,
            token: "c92114bcc9e4454f1d2b7399dc9d62a9",
            authToken: "",
            id,
        });
        if (res.status === 1) {
            this.setState({ videoInfo: res.data });
        }
    };

    render() {
        return (
            <div className="introduction">
                <Head />
                <div className="introduction-main">
                    <div className="introduction-title">
                        <p>
                            <span> 介绍视频</span>
                        </p>
                    </div>
                    <div className="introduction-pic">
                        <iframe src={this.state.videoInfo.href} allowFullScreen={true}></iframe>
                    </div>
                </div>
            </div>
        );
    }
}
