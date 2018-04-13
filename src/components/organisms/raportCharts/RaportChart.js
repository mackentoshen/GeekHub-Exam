import React from 'react';
import ReactHighcharts from 'react-highcharts';
import './RaportChart.css';

//component
import RaportPageSelect from "../../atoms/buttons/SelectBtns/RaportPageSelect";


//config
import RaportChartConfig from '../../../config/RaportChartConfig';
import RaportPieChart from "./RaportPieChart";

class RaportChart extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            dataRaport: [],
            showBy: ''
        }
    }

    componentWillMount() {
        fetch('/api/user/raport-week', {
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            method: 'GET',
        })
            .then(res => res.json())
            .then(res => {
                this.setState({
                    dataRaport: res
                });
                let chart = this.refs.RaportChartConfig.getChart();
                this.state.dataRaport.dateData && chart.series[0].setData(this.state.dataRaport.dateData, true);
            });

    }


    onChange = (e) => {
        // this.setState({
        //     sortBy: e.target.value
        // });

        if (e.target.value === 'Year') {
            this.setState({
                showBy:e.target.value
            });
            fetch('/api/user/raport-year', {
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
                method: 'get',
            })
                .then(res => res.json())
                .then(res => {
                    this.setState({
                        dataRaport: res
                    });
                    let chart = this.refs.RaportChartConfig.getChart();
                    chart.series[0].setData(this.state.dataRaport.dateData, true);
                    chart.xAxis[0].update({
                        categories: []
                    });
                    chart.update({
                        chart:{
                            margin:[0, 0, 10, 0]
                        }
                    });
                    chart.update({
                        plotOptions: {
                            series: {
                                lineWidth: 1
                            }
                        }
                    })
                })


        } else if (e.target.value === "Month") {
            this.setState({
                showBy:e.target.value
            });
            fetch('api/user/raport-month', {
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
                method: 'get',
            })
                .then(res => res.json())
                .then(res => {
                    this.setState({
                        dataRaport: res
                    });
                    let chart = this.refs.RaportChartConfig.getChart();
                    chart.series[0].setData(this.state.dataRaport.dateData, true);
                    chart.xAxis[0].update({
                        categories: []
                    });
                    chart.update({
                        plotOptions: {
                            series: {
                                lineWidth: 2
                            }
                        }
                    })
                })

        } else if (e.target.value === "Week") {
            this.setState({
                showBy:e.target.value
            });
            fetch('/api/user/raport-week', {
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
                method: 'get'
            })
                .then(res => res.json())
                .then(res => {
                    console.log(res);
                    this.setState({
                        dataRaport: res
                    });
                    let chart = this.refs.RaportChartConfig.getChart();
                    chart.series[0].setData(this.state.dataRaport.dateData, true);

                })

        }

    };



    render() {

        const raportSelect = {
            list: ["Week", "Month", "Year"],
            label: 'Show'
        };

        return(
            <div className="RaportChartWrap">
                <div className="RaportChartHeader">
                    <RaportPieChart selectChange={this.state.showBy}/>
                    <RaportPageSelect onChange={this.onChange} data={raportSelect}/>
                </div>
                <ReactHighcharts config={RaportChartConfig} ref="RaportChartConfig"/>
            </div>
        );
    }
}

export default RaportChart;