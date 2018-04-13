import React from 'react';
import { NavLink } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';

import '../leftbar/LeftBar.css';


class LeftBar extends React.Component {
    render() {
        return (
            <div className="LeftBarMenu">
                <nav>
                    <ul className="LeftBarNav">
                        <li>
                            <NavLink className="Home" activeClassName="active" exact  to="/">
                                <FontAwesome className='nav-icon nav-icon-home' name='home'/>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="Workflow" activeClassName="active" to="/workflow">
                                <FontAwesome className='nav-icon nav-icon-bars' name='bars'/>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="Raport" activeClassName="active" to="/raport">
                                <FontAwesome className='fa fa-line-chart'/>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="Chat" activeClassName="active" to="/chat">
                                <FontAwesome
                                    className='nav-icon nav-icon-envelope'
                                    name='envelope'
                                />
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="User" activeClassName="active" to="/users">
                                <FontAwesome className='nav-icon nav-icon-users' name='users'/>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default LeftBar;