import React, { Component } from 'react';
import ReactHighcharts from 'react-highcharts';
import '../../config/StatisticsChart';
import StatisticsChart from "../../config/StatisticsChart";
import './ActiveUsersSalesChart.css';

class ActiveUsersViewsChart extends Component{
    constructor(props) {
        super(props);

        this.state = {
            ActiveData: []
        }
    }

    componentWillMount() {
        fetch('/api/active/last-week', {
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            method: 'GET',
        })
            .then(res => res.json())
            .then(res => {
                this.setState({
                    ActiveData: res
                });
                let chart = this.ActiveUsersViews.getChart();
                chart.series[0].setData(this.state.ActiveData, true);
            });
    }

    render(){
        return(
            <div className="Statistics-Chart">
                <div className="row align-items-center">
                    <div className="col-lg-5">
                        <div className="Info">
                            <h5>3,230</h5>
                            <p>Views</p>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <ReactHighcharts config={StatisticsChart.ActiveUsersViews} ref={(chart) => {
                            this.ActiveUsersViews = chart;
                        }}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default ActiveUsersViewsChart;