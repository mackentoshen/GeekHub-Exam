import React, { Component } from 'react';
import './ActiveUsers.css';
import ReactHighcharts from 'react-highcharts';
import '../../config/StatisticsChart';
import StatisticsChart from "../../config/StatisticsChart";
import StatisticsPanel from "../molecules/StatisticsPanel";


class ActiveUsers extends Component{
    constructor(props) {
        super(props);

        this.state = {
            ActiveData: []
        }
    }

    componentWillMount() {
        fetch('/api/active/last-year', {
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
                let chart = this.ActiveUsersChart.getChart();
                chart.series[0].setData(this.state.ActiveData, true);
            });
    }

    handleChange = (e) => {
        if (e.target.value === 'Last year') {
            fetch('/api/active/last-year', {
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
                    let chart = this.ActiveUsersChart.getChart();
                    chart.series[0].setData(this.state.ActiveData, true);
                });
        }
        else if (e.target.value === 'Last month') {
            fetch('/api/active/last-month', {
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
                    let chart = this.ActiveUsersChart.getChart();
                    chart.series[0].setData(this.state.ActiveData, true);
                });
        }
        else if (e.target.value === 'Last week') {
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
                    let chart = this.ActiveUsersChart.getChart();
                    chart.series[0].setData(this.state.ActiveData, true);
                });
        }

    };

    render(){
        return(
            <div>
                <div className="ActiveUsers">
                    <StatisticsPanel title={"Active users"}/>
                    <ReactHighcharts config={StatisticsChart.ActiveUsersChart} ref={(chart) => {
                        this.ActiveUsersChart = chart;
                    }}/>
                </div>
            </div>
        )
    }
}

export default  ActiveUsers;