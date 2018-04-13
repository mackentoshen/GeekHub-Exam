import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

//components
import PrivateLayout from "./containers/PrivateLayout";
import Workflow from "./components/pages/Workflow";
import Raport from "./components/pages/Raport";
import Users from "./components/pages/Users";
import Chat from "./components/pages/Chat";
import AuthorizationPage from "./components/pages/authorization/AuthorizationPage";
import Home from "./components/pages/Home";

class App extends Component {
    render() {
        return (
            <Switch>
                <Route path="/login" component={AuthorizationPage}/>
                <PrivateLayout exact path="/" component={Home}/>
                <PrivateLayout exact path="/workflow" component={Workflow}/>
                <PrivateLayout exact path="/raport" component={Raport}/>
                <PrivateLayout exact path="/chat" component={Chat}/>
                <PrivateLayout exact path="/users" component={Users}/>
            </Switch>
        )
    }
}

export default App;
