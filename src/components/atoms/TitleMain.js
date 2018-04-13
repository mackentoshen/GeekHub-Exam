import React, { Component } from 'react';
import './TitleMain.css';

class TitleMain extends Component{
    render(){
        return(
            <h4 className="TitleMain">{this.props.title}</h4>
        )
    }
}

export default TitleMain;