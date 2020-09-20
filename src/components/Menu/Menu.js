import React, { Component } from "react";
import { Document, Page } from 'react-pdf/dist/umd/entry.webpack';

class Menu extends Component {
    constructor(props){
        super(props);
        this.pdfContainer = React.createRef();
        this.state = { width: 0 };
    }

    componentDidMount(){
        this.updateWidth(this.pdfContainer.current.offsetWidth);
        window.addEventListener('resize', this.updateWidth(this.pdfContainer.current.offsetWidth));
    }

    updateWidth(width){
        this.setState({ width });
    }

    render() {
        const { width } = this.state;
        return (
            <div className="container">
                <div className="row"><div className="col col-xs-12 col-md-6" ref={this.pdfContainer}></div></div>
                <Document file={this.props.pdfMenu} className="row">
                    <Page pageNumber={1} width={width - 30} className="col col-xs-12 col-md-6" />
                    <Page pageNumber={2} width={width - 30} className="col col-xs-12 col-md-6" />
                    <Page pageNumber={3} width={width - 30} className="col col-xs-12 col-md-6" />
                    <Page pageNumber={4} width={width - 30} className="col col-xs-12 col-md-6" />
                </Document>
                <div className="row">
                    <div className="col">
                        <a href={this.props.pdfMenu} target="_blank" className="btn btn-primary" style={{ marginTop: '20px' }}><i className="fa fa-download"></i> Download menu</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Menu;