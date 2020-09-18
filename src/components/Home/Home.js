import React, { Component } from 'react';
import Menu from '../Menu/Menu';

class Home extends Component {
    render() {
        return (
            <Menu key="menu" pdfMenu={this.props.pdfMenu} />
        )
    }
}

export default Home;