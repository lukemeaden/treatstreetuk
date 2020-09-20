import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../Header/Header'
import Home from '../Home/Home';
import QR from '../QR/QR';
import pdfMenu from '../../pdfs/treetstreetuk-menu-2020-09-18.pdf';

class AppWrapper extends Component {
    render() {
        return (
            <Switch>
                <Route path="/" exact>
                    <Header pdfMenu={pdfMenu} />
                    <Home pdfMenu={pdfMenu} />
                </Route>
                <Route path="/qr" exact>
                    <QR />
                </Route>
            </Switch>
        );
    }
}

const wrapper = document.getElementById("app-wrapper");
wrapper ? ReactDOM.render(
    <BrowserRouter>
        <AppWrapper />
    </BrowserRouter>
    , wrapper
) : false;