import React, { Component } from "react";
import qs from "qs";
import Pdfh5 from "pdfh5";
import "pdfh5/css/pdfh5.css";

class Pdf extends Component{
    constructor(props) {
        super(props);
    }

    pdfh5 = "";

    render() {
        return <div id="demo"></div>;
    }
    componentDidMount() {
        const type = qs.parse(window.location.href.split("?")[1]).type;
        const pdfurl = ["http://me.amrtang.com/pdf_tool/js/web/viewer.html?file=/cusi.pdf", "http://me.amrtang.com/pdf_tool/js/web/viewer.html?file=pdf/aed.pdf", "http://me.amrtang.com/pdf_tool/js/web/viewer.html?file=pdf/app.pdf", "http://me.amrtang.com/pdf_tool/js/web/viewer.html?file=pdf/peixun.pdf", "http://me.amrtang.com/pdf_tool/js/web/viewer.html?file=pdf/fulu.pdf"][+type];
        //实例化
        this.pdfh5 = new Pdfh5("#demo", {
            pdfurl,
        });
    }
}
export default Pdf;
