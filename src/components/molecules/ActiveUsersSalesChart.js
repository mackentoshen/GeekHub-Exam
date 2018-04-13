import React, { Component } from 'react';
import ReactHighcharts from 'react-highcharts';
import '../../config/StatisticsChart';
import StatisticsChart from "../../config/StatisticsChart";
import './ActiveUsersSalesChart.css';

class ActiveUsersSalesChart extends Component{
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
                let chart = this.ActiveUsersSales.getChart();
                chart.series[0].setData(this.state.ActiveData, true);
            });
    }

    render(){
        return(
            <div className="Statistics-Chart">
                <div className="row align-items-center">
                    <div className="col-lg-5">
                        <div className="Info">
                            <h5>1,560$</h5>
                            <p>Sales</p>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <ReactHighcharts config={StatisticsChart.ActiveUsersSales} ref={(chart) => {
                            this.ActiveUsersSales = chart;
                        }}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default ActiveUsersSalesChart;