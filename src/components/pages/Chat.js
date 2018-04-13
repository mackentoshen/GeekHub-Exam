import React , { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

import './Chat.css';


class Chat extends Component {
    render() {
        return(
            <section className="ChatPage">
                <div className="ChatHeader">
                    <div className="ChatSettings">
                        <a>Inbox</a>
                        <a>Sent</a>
                        <a>Trash</a>
                    </div>
                    <div className="ChatFilter">
                        <p>Filter messages</p>
                        <select>123</select>
                    </div>
                </div>
                <Grid>
                    <Row>
                        <Col lg={4} className="ChatList">Chat list</Col>
                        <Col lg={6} className="ChatContent">Content</Col>
                        <Col lg={2} className="ChatUser">User info</Col>
                    </Row>
                </Grid>
            </section>
        );
    }
}

export default Chat;