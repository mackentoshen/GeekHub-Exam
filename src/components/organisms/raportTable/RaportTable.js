import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import FontAwesome from 'react-fontawesome';

import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import './RaportTable.css';

class RaportTable extends React.Component {

    constructor(props) {
        super(props);

        this.options = {
            defaultSortName: 'Campaign',  // default sort column name
            defaultSortOrder: 'desc'  // default sort order
        };

        this.state = {
            table: []
        };

        fetch('/api/user/raport/raport-table', {
            headers: {
                'Content-type': 'application/json'
            },
            method: 'get'
        })
            .then(res => res.json())
            .then(res => {
                this.setState({
                    table: res
                });

            })
    }

    getCaret = (direction) => {
        if (direction === 'asc') {
            return (
                <FontAwesome
                    className='dropdown-caret dropdown-caret-table'
                    name='angle-down'
                />
            );
        }
        if (direction === 'desc') {
            return (
                <FontAwesome
                    className='dropdown-caret dropdown-caret-table'
                    name='angle-up'
                />
            );
        }
        return (
            <FontAwesome
                className='dropdown-caret dropdown-caret-table'
                name='angle-down'
            />
        );
    };

    status = (cell, row) => {
        return <p className={'TableStatus ' + ((row.Status === 'Active') ? 'TableStatusActive' : '')}>{row.Status}</p>
    };



    render() {
        return(
            <section className="RaportTableWrap">
                <BootstrapTable data={this.state.table} options={this.options} bordered={false} headerStyle={{color: '#9ca1b2', 'background': '#3a3e52', 'font': '400 14px Montserrat'}}>
                    <TableHeaderColumn dataField='Campaign' caretRender={this.getCaret} dataSort isKey={true} width='300' tdStyle={{color:'#fff', 'background': '#2a2c3b', 'borderColor': '#3a3e52', 'font': '12px Montserrat', 'padding': '20px 25px'}} thStyle={{'border': 'none', 'padding': '10px 25px'}}>Campaign</TableHeaderColumn>
                    <TableHeaderColumn dataField='Time' caretRender={this.getCaret} dataSort tdStyle={{color:'#fff', 'background': '#2a2c3b', 'borderColor': '#3a3e52', 'font': '12px Montserrat', 'padding': '20px 25px'}} thStyle={{'border': 'none', 'padding': '20px 25px'}}>Time</TableHeaderColumn>
                    <TableHeaderColumn dataField='Views' caretRender={this.getCaret} dataSort tdStyle={{color:'#fff', 'background': '#2a2c3b', 'borderColor': '#3a3e52', 'font': '12px Montserrat', 'padding': '20px 25px'}} thStyle={{'border': 'none', 'padding': '20px 25px'}}>Views</TableHeaderColumn>
                    <TableHeaderColumn dataField='Visitors' caretRender={this.getCaret} dataSort tdStyle={{color:'#fff', 'background': '#2a2c3b', 'borderColor': '#3a3e52', 'font': '12px Montserrat', 'padding': '20px 25px'}} thStyle={{'border': 'none', 'padding': '20px 25px'}}>Visitors</TableHeaderColumn>
                    <TableHeaderColumn dataField='CTR' caretRender={this.getCaret} dataSort tdStyle={{color:'#fff', 'background': '#2a2c3b', 'borderColor': '#3a3e52', 'font': '12px Montserrat', 'padding': '20px 25px'}} thStyle={{'border': 'none', 'padding': '20px 25px'}}>CTR</TableHeaderColumn>
                    <TableHeaderColumn dataField='CPC' caretRender={this.getCaret} dataSort tdStyle={{color:'#fff', 'background': '#2a2c3b', 'borderColor': '#3a3e52', 'font': '12px Montserrat', 'padding': '20px 25px'}} thStyle={{'border': 'none', 'padding': '20px 25px'}}>CPC</TableHeaderColumn>
                    <TableHeaderColumn dataField='CPV' caretRender={this.getCaret} dataSort tdStyle={{color:'#fff', 'background': '#2a2c3b', 'borderColor': '#3a3e52', 'font': '12px Montserrat', 'padding': '20px 25px'}} thStyle={{'border': 'none', 'padding': '20px 25px'}}>CPV</TableHeaderColumn>
                    <TableHeaderColumn dataField='CPM' caretRender={this.getCaret} dataSort tdStyle={{color:'#fff', 'background': '#2a2c3b', 'borderColor': '#3a3e52', 'font': '12px Montserrat', 'padding': '20px 25px'}} thStyle={{'border': 'none', 'padding': '20px 25px'}}>CPM</TableHeaderColumn>
                    <TableHeaderColumn dataField='Status' caretRender={this.getCaret} dataFormat={this.status} dataSort tdStyle={{color:'#fff', 'background': '#2a2c3b', 'borderColor': '#3a3e52', 'font': '12px Montserrat', 'padding': '20px 25px'}} thStyle={{'border': 'none', 'padding': '20px 25px'}}>Status</TableHeaderColumn>
                </BootstrapTable>
            </section>
        );
    }
}

export default RaportTable;