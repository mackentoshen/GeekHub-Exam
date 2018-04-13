import React from 'react';
import './YourProjects.css';
import HomeYourProjectsContent from '../../molecules/HomeYourProjectsContent';

class YourProjects extends React.Component {

    constructor () {
        super();
        this.state = {
            myProjectsData: []
        }
    }

    componentWillMount() {
        fetch('/api/report/projects', {
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            method: 'get'
        })
            .then(res => res.json())
            .then(res => {
                this.setState({
                    myProjectsData: res.filter((el)=>{return el.userid === 'person4'})
                });
            })
    }

    render() {
        return(
            <div className="Your-Projects">
                <div className="Your-Projects-Header">
                    <p>Your projects</p>
                </div>
                <HomeYourProjectsContent data={this.state.myProjectsData.slice(0.4)}/>
            </div>
        );
    }
}

export default YourProjects;