import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-light bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col justify-content-between">
                            <span className="navbar-brand">Treat Street UK</span>
                            <a href={this.props.pdfMenu} target="_blank" className="btn btn-sm btn-outline-primary"><i className="fa fa-download"></i> Download menu</a>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Header;