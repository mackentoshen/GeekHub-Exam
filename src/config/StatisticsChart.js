let StatisticsChart = {
    ActiveUsersChart: {
        chart: {
            type: 'spline',
            height: 450
        },
        title: {
            text: ''
        },
        xAxis: {
            categories: ['', '', '', '', '', '', '', '', '', '', '', '', ''],
            tickInterval: 2,
            tickWidth: 0,
            gridLineWidth: 1,
            labels: {
                align: 'center',
                x: -20,
                y: 20
            }
        },
        yAxis: {
            title: {
                text: ''
            },
        },
        tooltip: {
            crosshairs: true,
            shared: true
        },
        plotOptions: {
            spline: {
                color: '#aa5fbb',
                marker: {
                    radius: false,
                    lineColor: '#aa5fbb',
                    lineWidth: 7
                }
            }
        },
        series: [{
            data: [],
            lineWidth: 4,
            showInLegend: false,
            label: false,
            name: 'ActiveUsers graph value',
            marker: {
                symbol: false
            }
        }],
        credits: {
            enabled: false
        }
    },
    ActiveUsersSales: {
        chart: {
            type: 'spline',
            height: 225
        },
        title: {
            text: ''
        },
        xAxis: {
            lineWidth: 0,
            minorGridLineWidth: 0,
            lineColor: 'transparent',
            labels: {
                enabled: false
            },
            minorTickLength: 0,
            tickLength: 0
        },
        yAxis: {
            title: {
                text: ''
            },
            labels:{
                enabled:false//default is true
            },
            gridLineWidth: 0,
            minorGridLineWidth: 0
        },
        tooltip: {
            crosshairs: false,
            shared: true
        },
        plotOptions: {
            spline: {
                color: '#f83c7b',
                marker: {
                    radius: false,
                    lineColor: '#f83c7b',
                    lineWidth: 0
                }
            }
        },
        series: [{
            data: [],
            lineWidth: 4,
            showInLegend: false,
            label: false,
            name: 'Sales value',
            marker: {
                symbol: false
            }
        }],
        credits: {
            enabled: false
        }
    },
    ActiveUsersViews: {
        chart: {
            type: 'spline',
            height: 225
        },
        title: {
            text: ''
        },
        xAxis: {
            lineWidth: 0,
            minorGridLineWidth: 0,
            lineColor: 'transparent',
            labels: {
                enabled: false
            },
            minorTickLength: 0,
            tickLength: 0
        },
        yAxis: {
            title: {
                text: ''
            },
            labels:{
                enabled:false//default is true
            },
            gridLineWidth: 0,
            minorGridLineWidth: 0
        },
        tooltip: {
            crosshairs: false,
            shared: true
        },
        plotOptions: {
            spline: {
                color: '#5584ff',
                marker: {
                    radius: false,
                    lineColor: '#5584ff',
                    lineWidth: 0
                }
            }
        },
        series: [{
            data: [],
            lineWidth: 4,
            showInLegend: false,
            label: false,
            name: 'Sales value',
            marker: {
                symbol: false
            }
        }],
        credits: {
            enabled: false
        }
    }
};

export default StatisticsChart;