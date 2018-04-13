import React, { Component } from 'react';
import './StatisticsPanel.css';
import PanelIcons from "./PanelIcons";

class StatisticsPanel extends Component{
    render(){
        return(
            <div className="StatisticsPanel">
                <h4>{this.props.title}</h4>
                <PanelIcons/>
            </div>
        )
    }
}

export default StatisticsPanel;