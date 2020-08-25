import React from "react";
import { Link } from "react-router-dom";
import "./assets/less/search.less";
import Head from "./Head";
import http from "./http/index";
import qs from "qs";

interface State {
    searchList: Array<object>;
}

export default class Search extends React.Component<any, State, {}> {
    constructor(props: any) {
        super(props);

        this.state = {
            searchList: [],
        };
    }

    componentWillMount() {
        const key = qs.parse(window.location.href.split("?")[1]).key;
        this.getSearch(key as string);
    }

    getSearch = async (keywords: string) => {
        var res: any = await http.post("http://me.amrtang.com/vr_photo/api/web/v1/resource/list", {
            time: 1480576266,
            token: "c92114bcc9e4454f1d2b7399dc9d62a9",
            authToken: "",
            keywords,
        });
        res.status === 1 && this.setState({ searchList: res.data });
    };

    render() {
        return (
            <div className="search-page">
                <Head />
                <div className="search-list">
                    <ul className="search-list-ul">
                        {this.state.searchList.map((item: any, i) => {
                            return (
                                <li key={i}>
                                    <Link to={"/video?id=" + item.id}>
                                        <img src={item.base_path + "/" + item.avatar_path} alt="" />
                                        <p className="zh">{item.title}</p>
                                        <p className="en">{item.title_en}</p>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}
