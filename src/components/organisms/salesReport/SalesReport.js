import React from 'react';
import ReactHightcharts from 'react-highcharts';
import './SalesReport.css';

//component
import HomeStatSelect from '../../atoms/buttons/SelectBtns/HomeStatSelect';

//config
import SalesReportChart from '../../../config/SalesReportChart';

class SalesReport extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            reportData: []
        }
    }

    componentWillMount() {
        fetch('/api/report/last-year', {
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            method: 'GET',
        })
            .then(res => res.json())
            .then(res => {
                this.setState({
                    reportData: res
                });
                let chart = this.reportChart.getChart();
                chart.series[0].setData(this.state.reportData, true);
            });
    }

    handleChange = (e) => {
        if (e.target.value === 'Year') {
            fetch('/api/report/last-year', {
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
                method: 'GET',
            })
                .then(res => res.json())
                .then(res => {
                    this.setState({
                        reportData: res
                    });
                    let chart = this.reportChart.getChart();
                    chart.series[0].setData(this.state.reportData, true);
                });
        }
        else if (e.target.value === 'Month') {
            fetch('/api/report/last-month', {
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
                method: 'GET',
            })
                .then(res => res.json())
                .then(res => {
                    this.setState({
                        reportData: res
                    });
                    let chart = this.reportChart.getChart();
                    chart.series[0].setData(this.state.reportData, true);
                });
        }
        else if (e.target.value === 'Week') {
            fetch('/api/report/last-week', {
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
                method: 'GET',
            })
                .then(res => res.json())
                .then(res => {
                    this.setState({
                        reportData: res
                    });
                    let chart = this.reportChart.getChart();
                    chart.series[0].setData(this.state.reportData, true);
                });
        }

    };

    render() {

        const reportHomeSelect = {
            list: ["Year", "Month", "Week"],
            label: 'Show'
        };

        return(
            <div className="Sales-Report">
                <div className="Sales-report-header">
                    <p className="Sales-report-title">Sales report</p>
                    <HomeStatSelect onChange={this.handleChange} data={reportHomeSelect}/>
                </div>
                <ReactHightcharts config={SalesReportChart.ReportChart} ref={(chart) => {this.reportChart = chart;}}/>
            </div>
        );
    }
}

export default SalesReport;