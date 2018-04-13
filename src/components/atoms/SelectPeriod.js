import React, { Component } from 'react';
import './SelectPeriod.css';

class SelectPeriod extends Component{
    render(){
        return(
            <select onChange={this.handleChange} className="SelectPeriod">
                {
                    this.props.data && this.props.data.map((item, index) => {
                        return <option key={index} value={item}>Period: {item}</option>
                    })
                }
            </select>
        )
    }
}

export default SelectPeriod;