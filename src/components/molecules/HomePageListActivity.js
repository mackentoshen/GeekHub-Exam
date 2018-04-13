import React, { Component } from 'react';
import './HomePageListActivity.css';
import NinaJones from '../../assets/img/NinaJones.png';
import JamesSmith from '../../assets/img/JamesSmith.png';
import AlexClooney from '../../assets/img/AlexClooney.png';
import AlexandraSpears from '../../assets/img/AlexandraSpears.png';

const ItemListActivity = [
    {
        id: 1,
        img: NinaJones,
        user_name:'Nina Jones',
        mov: 'added a new project',
        project: 'Free UI Kit',
        post_time: 'Just Now'
    },
    {
        id: 2,
        img: JamesSmith,
        user_name:'James Smith',
        mov: 'commented project',
        project: 'Free PSD Template',
        post_time: '40 minutes ago'
    },
    {
        id: 3,
        img: AlexClooney,
        user_name:'Alex Clooney',
        mov: 'completed task ',
        project: 'Symu Website ',
        post_time: '1 hour ago'
    },
    {
        id: 4,
        img: AlexandraSpears,
        user_name:'Alexandra Spears',
        mov: 'added a new project',
        project: 'Free PSD (...)',
        post_time: '3 hours ago'
    }
];


class HomePageListActivity extends Component{
    render(){
        return(
            <li className="col-md-6 col-lg-4">
                <div className="HomePageList-col">
                    <div className="HomePageList-Item-Header d-flex justify-content-between align-items-center">
                        <h4 className="HomePageList-Title">Activity</h4>
                        <ul className="HomePageList-Item-Circle-List d-flex">
                            <li className="HomePageList-Item-Circle HomePageList-Item-Add"><span>10</span></li>
                        </ul>
                    </div>
                    <ul className="HomePageList-ul">
                        {
                            ItemListActivity.map(item =>{
                                return(
                                    <li className="HomePageList-Activity" key={item.id}>
                                        <div className="d-flex align-items-center flex-wrap">
                                            <div className="HomePage-Profile-AfterLine">
                                                <div className="HomePage-Profile">
                                                    <img src={item.img} alt=""/>
                                                </div>
                                            </div>
                                            <div>
                                                <p className="HomePageList-Activity-Title"> {item.user_name}<span> {item.mov} </span> {item.project} </p>
                                                <p className="HomePageList-Activity-TimePost"><i className="fa fa-clock-o"></i> {item.post_time}</p>
                                            </div>
                                        </div>
                                    </li>
                                );
                            })
                        }
                    </ul>
                </div>
            </li>
        )
    }
}

export default HomePageListActivity;