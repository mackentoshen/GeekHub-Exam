import React from 'react';
import './Inbox.css';

import HomeHeaderPanel from '../../atoms/HomeHeaderPanel';
import Messages from './Messages';

import Michelle from '../../../assets/img/michelle.png';
import Jolene from '../../../assets/img/jolene.png';
import Lyall from '../../../assets/img/lyall.png';
import Andrew from '../../../assets/img/andrew.png';

const MessagesData = [
    {
        id: '1',
        img: Michelle,
        name: 'Michelle Stewart',
        timeStatus: 'Today, 5:32 PM',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eisum.',
        unread: true
    },
    {
        id: '2',
        img: Jolene,
        name: 'Jolene Slater',
        timeStatus: 'Today, 5:32 PM',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eisum.',
        unread: true
    },
    {
        id: '3',
        img: Lyall,
        name: 'Lyall Roach',
        timeStatus: 'Today, 5:32 PM',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eisum.',
        unread: false
    },
    {
        id: '4',
        img: Andrew,
        name: 'Nina Jones',
        timeStatus: 'Today, 5:32 PM',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eisum.',
        unread: false
    }
];



class Inbox extends React.Component {

    InboxCount = () => {
        let count = 0;
        MessagesData.map(function(unread) {
                if (unread.unread) {
                    count = count +1;
                }
            });
        return count;
    };

    render() {
        return(
            <div className="Inbox-Field">
                <div className="Inbox-header">
                    <HomeHeaderPanel title="Inbox" count={this.InboxCount()} delay={false} />
                </div>
                <div className="Inbox-messages">
                    {
                        MessagesData.map(item => {
                            return (
                                <Messages data={item} key={item.id} />
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Inbox;