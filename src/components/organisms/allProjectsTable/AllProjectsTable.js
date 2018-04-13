import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css'
import './AllProjectsTable.css';
import FontAwesome from 'react-fontawesome';
import {Line} from 'rc-progress';
import {connect} from 'react-redux';
import store from "../../../redux/store";

//components
// import ProgressBar from "../../molecules/ProgressBar/ProgressBar";

//img
import Dominic from '../../../assets/img/dominic.png';
import John from '../../../assets/img/peter.png';
import Jolene from '../../../assets/img/jolene.png';
import Lyall from '../../../assets/img/lyall.png';
import Michelle from '../../../assets/img/michelle.png';

class AllProjectsTable extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            standardProjectsList: '',
            projectsList: '',

        }
    }

    componentWillMount() {
        fetch('/api/report/projects', {
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            method: 'GET',
        })
            .then(res => res.json())
            .then(res => {
                this.setState({
                    projectsList: res,
                    standardProjectsList: res
                });

            });
    }


    setUserImg = (target) => {
        if (target === 'Dominic Lynton') {
            return Dominic
        }
        else if (target === 'Lyall Roach') {
            return Lyall
        }
        else if (target === 'Michelle Stewart') {
            return Michelle
        }
        else if (target === 'John Dracula') {
            return John
        }
        else if (target === 'Jolene Slater') {
            return Jolene
        }
    };

    setColor = (target) => {
        if (target > 0 && target < 100) {
            return '#2196f3'
        }
        else if (target === 100) {
            return '#4caf50'
        }
        else if (target === 0) {
            return '#ffffff'
        }
    };


    setBgColor = (target) => {
        if (target > 0 && target < 100) {
            return {backgroundColor: '#2196f3'}
        }
        else if (target === 100) {
            return {backgroundColor: '#4caf50'}
        }
        else if (target === 0) {
            return {backgroundColor: '#ffffff'}
        }
    };




    TitleWrap = (cell, row) => {
        return (
            <div className='ProjectsTableTableCell'>
                <div className="ProjectsWrap">
                    <p className="LineTitle" style={this.setBgColor(row.progress)}></p>
                    <p className="TitleProject">{row.kindofwork}</p>
                    <p className="ProjectCompany">{row.company}</p>
                </div>
            </div>
        )
    };

    ValueWrap = (cell, row) => {
        return (
            <div className="ProjectsTableTableCell">
                <p className="ValueProject">{'$' + row.value}</p>
            </div>
        )
    };

    DeadlineWrap = (cell, row) => {
        return (
            <div className="ProjectsTableTableCell">
                <div className="ProjectWrap">
                    <p className="DeadlineProject">{row.deadline}</p>
                    <p className="TimesToLeft">{row.timetotheend}</p>
                </div>
            </div>
        )
    };

    TimeSpentWrapper = (cell, row) => {
        return (
            <div className="ProjectsTableTableCell">
                <p className="TimeSpent">{row.timespent}</p>
            </div>
        )
    };

    ProgressWrapper = (cell, row) => {

        return (
            <div className="ProjectsTableTableCell">
                <div className="ProgressWrapper">
                    <span className="PercentStats">{row.progress + '%'}</span>
                    <Line percent={row.progress} strokeWidth='5' trailWidth='5' trailColor='#9ea3b4' strokeColor={this.setColor(row.progress)} style={{width: '200px'}} />
                </div>
            </div>
        )
    };

    StatusWrapper = (cell, row) => {
        return (
            <div className="ProjectsTableTableCell">
                <p className="StatusProject">{row.status}</p>
            </div>
        )
    };

    AssignedWrapper = (cell, row) => {
        return (
            <div className="ProjectsTableTableCell">
                <div className="ProfileFlexWrapper">
                    <div className="ProfilePhotoWrapper">
                        <img src={row.photo} alt={row.assignedname}/>
                    </div>
                    <div className='DeveloperInfo'>
                        <p className="DeveloperName">{row.assignedname}</p>
                        <p className="DeveloperProf">{row.assignedpost}</p>
                    </div>
                </div>
            </div>
        )
    };

    MenuWrapper = () => {
        return (
            <div>
                <button className="AllProjectsBtn">
                    <FontAwesome
                        className='dropdown-dots'
                        name='ellipsis-v'
                    />
                </button>
            </div>
        )
    };

    filterProjects(target, status) {
        return this.state.standardProjectsList.filter((item) => {
            if (item.company === status) {
                return item;
            }
            return 0
        })
    }

    filterProject = (status) => {
        if (status === 'All') {
            this.setState({
                projectsList: this.state.standardProjectsList
            })
        }
        else if (status === 'Google') {
            let result = this.filterProjects(this.state.projectsList, status);
            this.setState({
                projectsList: result
            })
        }
        else if (status === 'Symu.co') {
            let result = this.filterProjects(this.state.projectsList, status);
            this.setState({
                projectsList: result
            })
        }
        else if (status === 'Microsoft') {
            let result = this.filterProjects(this.state.projectsList, status);
            this.setState({
                projectsList: result
            })
        }
        else if (status === 'Facebook') {
            let result = this.filterProjects(this.state.projectsList, status);
            this.setState({
                projectsList: result
            })
        }
        else if (status === 'JCD.pl') {
            let result = this.filterProjects(this.state.projectsList, status);
            this.setState({
                projectsList: result
            })
        }
        else if (status === 'Themeforest') {
            let result = this.filterProjects(this.state.projectsList, status);
            this.setState({
                projectsList: result
            })
        }
    };

    render() {

        store.subscribe((state) => {
            this.filterProject(store.getState().status)
        });

        const options = {
            sizePerPage: 5,
            hideSizePerPage: true,
            sizePerPageList: [5, 10, 15]
        };

        return (
            <BootstrapTable
                data={this.state.projectsList}
                options={options}
                bordered={false}
                tableBodyClass='ProjectsTable-Body'>

                <TableHeaderColumn
                    width="140"
                    dataField='id'
                    thStyle={{border: 'none'}}
                    dataFormat={this.TitleWrap}
                    isKey>Project title
                </TableHeaderColumn>
                <TableHeaderColumn
                    width="80"
                    thStyle={{
                        border: 'none',
                        textAlign: 'left',
                        paddingLeft: '10px'
                    }}
                    dataFormat={this.ValueWrap}
                    dataField='price'
                >Value</TableHeaderColumn>
                <TableHeaderColumn
                    dataField='deadline'
                    dataFormat={this.DeadlineWrap}
                    width="120"
                    thStyle={{
                        border: 'none',
                        textAlign: 'left'
                    }}
                >Deadline
                </TableHeaderColumn>
                <TableHeaderColumn
                    dataField='timesSpent'
                    width="100"
                    dataFormat={this.TimeSpentWrapper}
                    thStyle={{
                        border: 'none',
                        padding: '0'
                    }}>
                    Time spent
                </TableHeaderColumn>
                <TableHeaderColumn
                    dataField='progress'
                    thStyle={{
                        border: 'none',
                        padding: '0',
                        textAlign: 'center',
                    }}
                    width="270"
                    dataFormat={this.ProgressWrapper}>
                    Progress
                </TableHeaderColumn>
                <TableHeaderColumn
                    dataField='developer'
                    thStyle={{
                        border: 'none',
                        textAlign: 'center',
                        padding: '0'
                    }}
                    width="130"
                    dataFormat={this.StatusWrapper}>
                    Status
                </TableHeaderColumn>
                <TableHeaderColumn
                    dataField='Assigned to'
                    thStyle={{border: 'none',
                        textAlign: 'center'}}
                    width="200"
                    dataFormat={this.AssignedWrapper}>
                    Assigned to
                </TableHeaderColumn>
                <TableHeaderColumn
                    dataField=''
                    thStyle={{border: 'none'}}
                    width="40"
                    dataFormat={this.MenuWrapper}/>
            </BootstrapTable>
        );

    }

}



export default connect()(AllProjectsTable);