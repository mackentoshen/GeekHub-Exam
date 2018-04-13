import React , { Component } from 'react';
import Board from 'react-trello';
import {connect} from 'react-redux';
import './Workflow.css';

//components
import CustomCard from '../organisms/workflowList/CustomCard';
import CustomLaneHeader from '../organisms/workflowList/CustomLaneHeader';
import AllProjectsTable from '../organisms/allProjectsTable/AllProjectsTable';
import WorkflowPageSelect from '../atoms/buttons/SelectBtns/WorkflowPageSelect';
// import WorkFlowList from "../organisms/WorkFlowList";


const data = {
    lanes: [
        {
            id: 'lane1',
            header: 'Quened',
            label: '',
            cards: [
                {id: 'Task1', photo: '/img/michelle.png', title: 'Wordpress theme', description: '', label: 'Symu.co', value: 1500},
                {id: 'Task2', photo: '/img/michelle.png' , title: 'Wordpress theme', description: '', label: 'Symu.co', value: 1280},
            ]
        },


        {
            id: 'lane2',
            header: 'Planning',
            label: '',
            cards: [
                {id: 'Task6', photo: '/img/michelle.png', title: 'Landing page', description: '', label: 'Symu.co', value: 1900},
                {id: 'Task7', photo: '/img/dominic.png', title: 'New website', description: '', label: 'Symu.co', value: 2500},
                {id: 'Task8', photo: '/img/michelle.png', title: 'Dashboard', description: '', label: 'Symu.co', value: 1100},
                {id: 'Task9', photo: '/img/peter.png', title: 'Mobile App', description: '', label: 'Symu.co', value: 1600}
            ]
        },
        {
            id: 'lane3',
            header: 'Design',
            label: '()',
            cards: [
                {id: 'Task10', photo: '/img/michelle.png', title: 'New Logo', description: '', label: 'Symu.co', value: 500},
                {id: 'Task11', photo: '/img/peter.png', title: 'New Website', description: '', label: 'Symu.co', value: 3500},
                {id: 'Task12', photo: '/img/michelle.png', title: 'New Website', description: '', label: 'Symu.co', value: 3100},
                {id: 'Task13', photo: '/img/peter.png', title: 'Dashboard', description: '', label: 'Symu.co', value: 1000}
            ]
        },
        {
            id: 'lane4',
            header: 'Development',
            label: '()',
            cards: [
                {id: 'Task14', photo: '/img/dominic.png', title: 'Mobile App', description: '', label: 'Symu.co', value: 700},
                {id: 'Task15', photo: '/img/michelle.png', title: 'New Website', description: '', label: 'Symu.co', value: 1240},
                {id: 'Task16', photo: '/img/dominic.png', title: 'Dashboard', description: '', label: 'Symu.co', value: 1500},
            ]
        },
        {
            id: 'lane5',
            header: 'Testing',
            label: '()',
            cards: [
                {id: 'Task18', photo: '/img/michelle.png', title: 'Landing Page', description: '', label: 'Symu.co', value: 1500},
            ]
        },
        {
            id: 'lane6',
            header: 'Completed',
            label: '()',
            cards: [
                {id: 'Task22', photo: '/img/michelle.png', title: 'Landing Page', description: '', label: 'Symu.co', value: 1500},
                {id: 'Task23', photo: '/img/dominic.png', title: 'New Webiste', description: '', label: 'Symu.co', value: 3150},
                {id: 'Task24', photo: '/img/michelle.png', title: 'Dashboard', description: '', label: 'Symu.co', value: 1590},
            ]
        },
    ]
};




class Workflow extends Component {

    constructor(props) {
        super(props);

        this.state = {
            ProjectCounter: 0,
            tab: 'projectsList',
            showedProject: []
        }
    }


    componentWillMount() {
        fetch('/api/report/projects', {
            headers: {
                'Content-type': 'application/json'
            },
            method: 'get'
        })
            .then(res => res.json())
            .then(res => {
                this.setState({
                    showedProject: res
                });

            })
    }

    onSelectChange = (e) => {

        let selectCompany = e.target.company;
        fetch('/api/report/projects', {
            headers: {
                'Content-type': 'application/json'
            },
            method: 'get'
        })

            .then(res => res.json())
            .then(res => {
                if(selectCompany === "Microsoft"){
                    this.setState({
                        showedProject: res.filter((e)=>{
                            return e.company === "Microsoft"
                        }),

                        isLoading: false
                    })
                }
                if(selectCompany === "Google"){
                    this.setState({
                        showedProject: res.filter((e)=>{
                            return e.company === "Google"
                        })
                    })
                }
                if(selectCompany === "Themeforest"){
                    this.setState({
                        showedProject: res.filter((e)=>{
                            return e.company === "Themeforest"
                        })
                    })
                }
                if(selectCompany === "Symu.co"){
                    this.setState({
                        showedProject: res.filter((e)=>{
                            return e.company === "Symu.co"
                        })
                    })
                }
                if(selectCompany === "JCD.pl"){
                    this.setState({
                        showedProject: res.filter((e)=>{
                            return e.company === "JCD.pl"
                        })
                    })
                }
                if(selectCompany === "Facebook"){
                    this.setState({
                        showedProject: res.filter((e)=>{
                            return e.company === "Facebook"
                        })
                    })
                }
                if(selectCompany === "All"){
                    this.setState({
                        showedProject: res
                    })
                }

            })

    };


    tabChange = (value) => {
        this.setState({
            tab: value
        })
    };



    render() {

        const workflowProject = {
            list: ["All", "Microsoft", "Google", "Symu.co", "JCD.pl", "Facebook", "Themeforest"],
            label: 'Show projects'
        };

        return(
            <section className="Workflow-Page">
                <div className="Workflow-Header">
                    <div className="Workflow-links">
                        <a className={this.state.tab === 'projectsTrello' ? 'ActiveWorkflowTab AllProjects' : 'AllProjects'} onClick={() => this.tabChange('projectsTrello')}>All projects ({this.state.showedProject.length})</a>
                        <a className={this.state.tab === 'projectsList' ? 'ActiveWorkflowTab WorkflowTab' : 'WorkflowTab'} onClick={() => this.tabChange('projectsList')}>Workflow</a>
                    </div>
                    <WorkflowPageSelect onChange={this.onSelectChange} data={workflowProject}/>
                </div>
                <div className="Workflow-Content">
                    {
                        this.state.tab === 'projectsList' ?
                            <div className={this.props.statusMenu === false || this.props.statusMenu === undefined ? "WorkflowPage" : "WorkflowPage WorkflowPageActive"}>
                                <Board data={data} draggable style={
                                    {
                                        background: 'transparent',
                                        display: 'flex',
                                        height: 'max-content',
                                        width: '100%',
                                        justifyContent: 'space-between'
                                    }
                                }
                                       customCardLayout
                                       customLaneHeader={<CustomLaneHeader/>}
                                >
                                    <CustomCard/>
                                </Board>
                            </div>
                            :
                            <div className="AllProjectsWrap">
                                <AllProjectsTable/>
                            </div>
                    }

                </div>
            </section>
        )
    }
}

const mapState = (state, props) => {
    return {
        statusMenu: state.status
    }
};

export default connect(mapState)(Workflow);