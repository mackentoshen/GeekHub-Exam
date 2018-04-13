import React , { Component } from 'react';
import './Home.css';
import {Grid, Row, Col} from 'react-bootstrap';

//components
import HomeCalendar from "../organisms/homeCalendar/HomeCalendar";
import HomeChart from "../organisms/homeChart/HomeChart";
import YourProjects from "../organisms/yourProjects/YourProjects";
import SalesReport from "../organisms/salesReport/SalesReport";
import Inbox from "../organisms/inbox/Inbox";

class Home extends Component {
    render() {
        return (
            <section className="HomePage">
                <Grid>
                    <Row>
                        <Col lg={9}>
                            <HomeChart/>
                        </Col>
                        <Col lg={3}>
                            <YourProjects/>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={6}>
                            <SalesReport/>
                        </Col>
                        <Col lg={3}>
                            <Inbox/>
                        </Col>
                        <Col lg={3}>
                            <HomeCalendar/>
                        </Col>
                    </Row>
                </Grid>
            </section>
        )
    }
}

export default Home;

