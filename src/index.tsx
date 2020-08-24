import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch } from "react-router-dom";
import "./assets/less/index.less";
import Home from "./Home";
import Search from "./Search";
import Introduction from "./Introduction";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
    <HashRouter>
        <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/search" component={Search}></Route>
            <Route path="/introduction" component={Introduction}></Route>
        </Switch>
    </HashRouter>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
