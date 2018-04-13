import React, { Component } from 'react';
import { Circle } from 'rc-progress';
import './ChannelSalesSecond.css';

class ChannelSalesSecond extends Component{
    render(){
        return(
            <div className="d-flex align-items-center">
                <div className="CircleWrapChannelSecond">
                    <Circle percent="25" strokeWidth="10" strokeColor="#f83c7b" trailWidth="10" trailColor="#dadee7" gapPosition="bottom" className="ChannelSalesSecond"/>
                    <span>25%</span>
                </div>
                <div className="SalesInfo">
                    <h5>1,250$</h5>
                    <p>Channel Sales</p>
                </div>
            </div>
        )
    }
}

export default ChannelSalesSecond;