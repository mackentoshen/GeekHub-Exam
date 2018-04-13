import React, { Component } from 'react';
import { Circle } from 'rc-progress';
import './DirectSales.css';

class DirectSales extends Component{
    render(){
        return(
            <div className="d-flex align-items-center">
                <div className="CircleWrapDirect">
                    <Circle percent="45" strokeWidth="10" strokeColor="#5484ff" trailWidth="10" trailColor="#dadee7" gapPosition="bottom" className="DirectSales"/>
                    <span>45%</span>
                </div>
                <div className="SalesInfo">
                    <h5>2,300$</h5>
                    <p>Direct Sales</p>
                </div>
            </div>
        )
    }
}

export default DirectSales;