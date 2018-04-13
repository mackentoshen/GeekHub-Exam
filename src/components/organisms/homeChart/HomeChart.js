import React from 'react';
import './HomeChart.css';

//components
import HomeRaportChart from './HomeRaportChart';

class HomeChart extends React.Component {
    render() {
        return(
            <div className="HomeChartWrap">
                <HomeRaportChart/>
            </div>
        );
    }
}

export default HomeChart;