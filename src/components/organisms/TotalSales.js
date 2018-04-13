import React, { Component } from 'react';
import './TotalSales.css';
import DirectSales from "../atoms/DirectSales";
import StatisticsPanel from "../molecules/StatisticsPanel";
import ChannelSales from "../atoms/ChannelSales";
import ChannelSalesSecond from "../atoms/ChannelSalesSecond";

class TotalSales extends Component{
    render(){
        return(
            <div className="TotalSales">
                <StatisticsPanel title={"Total sales"}/>
                <div className="row TotalSales-List">
                    <div className="col-md-4">
                        <DirectSales/>
                    </div>
                    <div className="col-md-4">
                        <ChannelSales/>
                    </div>
                    <div className="col-md-4">
                        <ChannelSalesSecond/>
                    </div>
                </div>
            </div>
        )
    }
}

export default TotalSales;