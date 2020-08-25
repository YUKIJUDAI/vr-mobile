import React, { ChangeEvent } from "react";
import { Link } from "react-router-dom";
import { createHashHistory } from "history";
import "./assets/less/head.less";

interface State {
    menuFlag: boolean;
    searchFlag: boolean;
    searchText: string;
}

const history = createHashHistory();

export default class Head extends React.Component<any, State, {}> {
    constructor(props: any) {
        super(props);

        this.state = {
            menuFlag: false,
            searchFlag: false,
            searchText: "",
        };
    }

    componentDidMount() {
        document.addEventListener("keyup", this.keyUp);
    }

    componentWillUnmount() {
        document.removeEventListener("keyup", this.keyUp);
    }

    keyUp = (e: KeyboardEvent) => {
        if (!this.state.searchFlag) return;
        if (e && e.keyCode === 13) this.search();
    };

    changeMenuFlag = (val: boolean): any => {
        this.setState({ menuFlag: val });
    };

    changeSearchFlag = (val: boolean): any => {
        this.setState({ searchFlag: val });
    };

    changeSearchText = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({ searchText: e.target.value });
    };

    search = () => {
        if (this.state.searchText && this.state.searchText !== "") {
            history.push("/search?key=" + this.state.searchText);
        }
    };

    render() {
        return (
            <div className="head">
                <div className="head-bg">
                    <div className="head-main clearfix">
                        <img src={require("./static/img/logo.png")} className="head-logo" alt=""/>
                        {this.state.menuFlag ? <img src={require("./static/img/close.png")} className="head-close" onClick={this.changeMenuFlag.bind(this, false)} alt=""/> : <img src={require("./static/img/menu.png")} className="head-menu" onClick={this.changeMenuFlag.bind(this, true)} alt=""/>}
                        <img src={require("./static/img/search.png")} className="head-search" onClick={this.changeSearchFlag.bind(this, true)} alt=""/>
                    </div>
                    {this.state.searchFlag && (
                        <div className="search">
                            <input type="text" className="search-input" value={this.state.searchText} onChange={this.changeSearchText.bind(this)} />
                            <div className="search-close">
                                <img src={require("./static/img/close.png")} onClick={this.changeSearchFlag.bind(this, false)} alt=""/>
                            </div>
                        </div>
                    )}
                </div>
                {this.state.menuFlag && (
                    <ul>
                        <Link to={"/"}>
                            <li>关于微创®</li>
                        </Link>
                        <a href="https://me.amrtang.com/vr_sh/"><li>微创®知行学院上海总部</li></a>
                        <a href="https://me.amrtang.com/vr_sz/"><li>微创®知行学院苏州分布</li></a>
                        <Link to={"/introduction?navigate=2"}><li>微创®线上知行学院</li></Link>
                        <Link to={"/introduction?navigate=3"}><li>专业教育</li></Link>
                    </ul>
                )}
            </div>
        );
    }
}
