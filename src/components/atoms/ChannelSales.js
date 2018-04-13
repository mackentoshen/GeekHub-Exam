import React, { Component } from 'react';
import { Circle } from 'rc-progress';
import './ChannelSales.css';

class ChannelSales extends Component{
    render(){
        return(
            <div className="d-flex align-items-center">
                <div className="CircleWrapChannel">
                    <Circle percent="20" strokeWidth="10" strokeColor="#aa5fb9" trailWidth="10" trailColor="#dadee7" gapPosition="bottom" className="ChannelSales" transition="stroke 0.6s ease"/>
                    <span>20%</span>
                </div>
                <div className="SalesInfo">
                    <h5>980$</h5>
                    <p>Channel Sales</p>
                </div>
            </div>
        )
    }
}

export default ChannelSales;