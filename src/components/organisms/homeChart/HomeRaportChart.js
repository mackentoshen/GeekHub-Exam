import React from 'react';
import ReactHighcharts  from 'react-highcharts';
import './HomeRaportChart.css';

//component

//config
import RaportChartConfig from '../../../config/RaportChartConfig';
import HomePieChart from "./HomePieChart";

class HomeRaportChart extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            dataRaport: [],
            showBy: ''
        }
    }

    componentWillMount() {
        fetch('/api/user/raport-week-home', {
            headers: {
                'Content-type': 'application/json'
            },
            method: 'get'
        })
            .then(res => res.json())
            .then(res => {
                this.setState({
                    dataRaport: res.slice(0,7),
                });
                let chart = this.refs.RaportChartConfig.getChart();
                chart.series[0].setData(this.state.dataRaport, true);
                chart.update({
                    chart: {
                        height: '200'
                    }
                })
            })
    }



    render() {
        return(
            <div className="RaportChartWrap">
                <div className="RaportChartHeader">
                    <HomePieChart selectChange={this.state.showBy}/>
                </div>
                <ReactHighcharts config={RaportChartConfig} ref="RaportChartConfig"/>
            </div>
        );
    }
}

export default HomeRaportChart;
