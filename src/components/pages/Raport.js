import React , { Component } from 'react';
import './Raport.css';

//components
import RaportChart from '../organisms/raportCharts/RaportChart';
import RaportTable from '../organisms/raportTable/RaportTable';

class Raport extends React.Component {
    render() {
        return(
            <section className="RaportPage">
                <RaportChart/>
                <RaportTable/>
            </section>
        );
    }
}

export default Raport;


