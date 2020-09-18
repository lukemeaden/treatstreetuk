import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from '../Header/Header'
import Home from '../Home/Home';
import pdfMenu from '../../pdfs/treetstreetuk-menu-2020-09-18.pdf';

class AppWrapper extends Component {
    render() {
        return [
            <Header key="header" pdfMenu={pdfMenu} />,
            <Home key="home" pdfMenu={pdfMenu} />
        ];
    }
}

const wrapper = document.getElementById("app-wrapper");
wrapper ? ReactDOM.render(<AppWrapper />, wrapper) : false;