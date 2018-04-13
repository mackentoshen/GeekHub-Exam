import React, { Component } from 'react';
import './HomePageListMessage.css';
import Repeat from '../../assets/img/repeat.png';
import Settings from '../../assets/img/settings.png';
import NinaJones from '../../assets/img/NinaJones.png';
import JamesSmith from '../../assets/img/JamesSmith.png';
const ItemListMessages = [
    {
        id: 1,
        img: NinaJones,
        user_name:'Nina Jones',
        delay: '5 minutes ago',
        text: 'Hey You! It’s me again :-) I attached new (...)',
    },
    {
        id: 2,
        img: NinaJones,
        user_name:'Nina Jones',
        delay: 'About 20 hours ago',
        text: 'Hey! I attached some new PSD files for (...)',
    },
    {
        id: 3,
        img: JamesSmith,
        user_name:'James Smith',
        delay: '2 days ago',
        text: 'Good morning, you are fired!',
    },
    {
        id: 4,
        img: NinaJones,
        user_name:'Nina Jones',
        delay: 'About 2 weeks ago',
        text: 'Hello! Could You bring me coffee please?',
    }
];

class HomePageListMessage extends Component{
    render(){
        return(
            <li className="col-md-6 col-lg-4">
                <div className="HomePageList-col">
                    <div className="HomePageList-Item-Header d-flex justify-content-between align-items-center">
                        <h4 className="HomePageList-Title">Messages</h4>
                        <ul className="HomePageList-Item-Circle-List d-flex">
                            <li className="HomePageList-Item-Circle HomePageList-Item-Add"><span>2</span></li>
                        </ul>
                    </div>
                    <ul className="HomePageList-ul">
                        {
                            ItemListMessages.map(item =>{
                                return(
                                    <li className="HomePageList-Messages-Item" key={item.id}>
                                        <div className="d-flex align-items-center flex-wrap">
                                            <div className="HomePage-Profile">
                                                <img src={item.img} alt=""/>
                                            </div>
                                            <ul>
                                                <li>
                                                    <h4 className="HomePage-UserName">{item.user_name} <span>{item.delay}</span></h4>
                                                    <p className="HomePage-UserName-text">{item.text}</p>
                                                    <div className="d-flex HomePageList-Messages-Icon">
                                                        <img src={ Repeat} alt=""/>
                                                        <img src={ Settings } alt="" />
                                                    </div>
                                                </li>
                                            </ul>
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

export default HomePageListMessage;