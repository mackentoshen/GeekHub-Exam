import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import Popover, {PopoverAnimationVertical} from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import './TableUsers.css';
import '../atoms/ButtonSettings.css';

class TableUsers extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
        };
    }

    handleOpen = (e) => {
        e.preventDefault();
        this.setState({
            open: true,
            anchorEl: e.currentTarget,
        });
    };

    handleRequestClose = () => {
        this.setState({
            open: false,
        });
    };

    ProfileWrap =(cell, row)=>{
        return(
            <div className="UsersTableTableCell align-items-center">
                <div className="ProfileInfoWrap">
                    <p className={row.active ? "Online": "Offline"}></p>
                    <div className="ProfilePhotoWrap">
                        <img src={row.img} alt=""/>
                    </div>
                </div>
                <div>
                    <span className="ProfileName">{row.name}</span>
                    <span className="ProfileProf">{row.post}</span>
                </div>
            </div>
        )
    };

    Activity =(cell, row)=>{
        return(
            <div className="UsersTableTableCell">
                <p className={row.active ? "ActiveStatus OnlineActive" : "ActiveStatus OfflineActive"}>
                    {row.active ? "Online now!": row.status}
                </p>
            </div>
        )
    };

    Email =(cell, row)=>{
        return(
            <div className="UsersTableTableCell">
                <a className="email" href="mailto:">{row.mail}</a>
            </div>
        )
    };

    TelNumber =(cell, row)=>{
        return(
            <div className="UsersTableTableCell">
                <a className="tel" href="">{row.phone}</a>
            </div>
        )
    };

    DropDownMenu =()=>{
        return(
            <MuiThemeProvider>
                <div className="UsersTableTableCell Menu">
                    <button  className="ButtonSettings" onClick={this.handleOpen}></button>
                    <Popover
                        open={this.state.open}
                        anchorEl={this.state.anchorEl}
                        anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
                        targetOrigin={{horizontal: 'left', vertical: 'top'}}
                        onRequestClose={this.handleRequestClose}
                        animation={PopoverAnimationVertical}
                    >
                        <Menu>
                            <MenuItem primaryText="Refresh"/>
                            <MenuItem primaryText="Send Message"/>
                            <MenuItem primaryText="Delete"/>
                        </Menu>
                    </Popover>
                </div>
            </MuiThemeProvider>
        )
    };

    render() {

        const options = {
            sizePerPage: 7,
            hideSizePerPage: true,
            sizePerPageList: [ 7, 10, 15 ]
        };


        return (
            <div>
                <BootstrapTable
                    ref='table'
                    data={ this.props.data }
                    tableStyle={ { border: 'none' } }
                    // pagination
                    options = {options}
                    tableBodyClass='UsersTable-Body'>
                    <TableHeaderColumn
                        width="150"
                        dataField='id'
                        thStyle={{border: 'none'}}
                        dataFormat={this.ProfileWrap}
                        isKey>
                        Name
                    </TableHeaderColumn>

                    <TableHeaderColumn
                        width="100"
                        dataField='status'
                        thStyle={{border: 'none'}}
                        dataFormat={this.Activity}>
                        Last activity
                    </TableHeaderColumn>

                    <TableHeaderColumn
                        width="100"
                        dataField='mail'
                        thStyle={{border: 'none'}}
                        dataFormat={this.Email}>
                        Mail
                    </TableHeaderColumn>

                    <TableHeaderColumn
                        width="100"
                        dataField='phone'
                        thStyle={{border: 'none'}}
                        dataFormat={this.TelNumber}>
                        Phone
                    </TableHeaderColumn>

                    <TableHeaderColumn
                        dataField='menu'
                        thStyle={{border: 'none'}}
                        width="50px"
                        dataFormat={this.DropDownMenu}>
                    </TableHeaderColumn>
                </BootstrapTable>
            </div>
        );
    }
}

export default TableUsers;