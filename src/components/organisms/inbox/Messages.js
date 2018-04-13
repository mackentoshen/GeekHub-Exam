import React from 'react';

import './Messages.css';


class Messages extends React.Component {
    render() {
        return (
            <li className="Messages-list">
                <div className="AvatarWrapper">
                    <img src={this.props.data.img}/>
                </div>
                <div className="MessagesBlock">
                    <div className="InfoAboutPerson">
                        <p className="MessagesPersonName">{this.props.data.name}</p>
                        <p className={this.props.data.unread ? "MessagesTimeStatus UnRead" : "MessagesTimeStatus Read"}>{this.props.data.timeStatus}</p>
                    </div>
                    <p className="MessagesContent">{this.props.data.content}</p>
                </div>
            </li>
        )
    }
}

export default Messages;