import React, { Component } from 'react';
import './HomePageList.css';
import Options from '../../assets/img/Options.png';
import './HomePageList.css';
import HomePageListTasks from "../molecules/HomePageListTasks";
import HomePageListMessage from "../molecules/HomePageListMessage";
import HomePageListActivity from "../molecules/HomePageListActivity";

class HomePageList extends Component{
    render(){
        return(
            <div className="HomePageList row">
                <HomePageListTasks/>
                <HomePageListMessage/>
                <HomePageListActivity/>
            </div>
        )
    }
}

export default HomePageList;