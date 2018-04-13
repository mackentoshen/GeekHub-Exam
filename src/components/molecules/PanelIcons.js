import React, { Component } from 'react';
import './PanelIcons.css';
import IconPencil from "../atoms/IconPencil";
import IconTrash from "../atoms/IconTrash";

class PanelIcons extends Component{
    render(){
        return(
            <ul className="PanelIcons">
                <li>
                    <IconPencil/>
                </li>
                <li>
                    <IconTrash/>
                </li>
            </ul>
        )
    }
}

export default PanelIcons;