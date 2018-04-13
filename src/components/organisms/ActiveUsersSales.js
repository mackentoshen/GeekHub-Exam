import React, { Component } from 'react';
import './ActiveUsersSales.css';
import ActiveUsersSalesChart from "../molecules/ActiveUsersSalesChart";
import ActiveUsersViewsChart from "../molecules/ActiveUsersViewsChart";


class ActiveUsersSales extends Component{

    render(){
        return(
            <div className="ActiveUsers-Sales">
                <ActiveUsersSalesChart/>
                <ActiveUsersViewsChart/>
            </div>
        )
    }
}

export default ActiveUsersSales;