import React , { Component } from 'react';
import { Route } from 'react-router-dom';

//components
import Home from "./components/pages/Home";
import Workflow from "./components/pages/Workflow";
import Raport from "./components/pages/Raport";
// import Calendar from "./components/pages/Calendar";
import Chat from "./components/pages/Chat";
import Users from "./components/pages/Users";
import AuthorizationPage from "./components/pages/authorization/AuthorizationPage";


class Main extends Component {
    render(){
        return(
            <div>
                <Route exact path="/" component={ Home } />
                <Route exact path="/workflow" component={ Workflow } />
                <Route exact path="/raport" component={ Raport } />
                {/*<Route exact path="/calendar" component={ Calendar } />*/}
                <Route exact path="/inbox" component={ Chat }/>
                <Route exact path="/users" component={ Users } />
                <Route exact path="/login" component={ AuthorizationPage } />
            </div>
        )
    }
}

export default Main;
