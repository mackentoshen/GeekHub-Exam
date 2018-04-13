import React, { Component } from 'react';
import './HomePageListTasks.css';
import Popover, {PopoverAnimationVertical} from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const ItemListTasks = [
    {
        id: 1,
        img_wrap: 'N',
        title: 'New website for Symu.co',
        day_title: '5 days delays',
        font_awesome: 'fa fa-clock-o',
        font: 'days-left days-left-error'
    },
    {
        id: 2,
        img_wrap: 'F',
        title: 'Free business PSD Template ',
        day_title: '5 days delays',
        font_awesome: 'fa fa-clock-o',
        font: 'days-left days-left-error'
    },
    {
        id: 3,
        img_wrap: 'N',
        title: 'New logo for JCD.pl',
        day_title: '5 days left',
        font_awesome: 'fa fa-clock-o',
        font: 'days-left days-left-to_do'
    },
    {
        id: 4,
        img_wrap: 'F',
        title: 'Free Icons Set vol. 3',
        day_title: '5 days left',
        font_awesome: 'fa fa-clock-o',
        font: 'days-left days-left-to_do'
    }
];

class HomePageListTasks extends Component{
    constructor(props) {
        super(props);

        this.state = {
            open: false,
        };
    }

    handleOpen = (event) => {
        event.preventDefault();

        this.setState({
            open: true,
            anchorEl: event.currentTarget,
        });
    };

    handleRequestClose = () => {
        this.setState({
            open: false,
        });
    };
    render(){
        return(
            <MuiThemeProvider>
                <li className="col-md-6 col-lg-4">
                    <div className="HomePageList-col">
                        <div className="HomePageList-Item-Header d-flex justify-content-between align-items-center">
                            <h4 className="HomePageList-Title">Tasks</h4>
                            <ul className="HomePageList-Item-Circle-List d-flex">
                                <li className="HomePageList-Item-Circle HomePageList-Item-Add"><span>5</span></li>
                                <li className="HomePageList-Item-Circle HomePageList-Item-Error"><span>2</span></li>
                            </ul>
                        </div>
                        <ul className="HomePageList-ul">
                            {
                                ItemListTasks.map(item =>{
                                    return(
                                        <li className="HomePageList-Item" key={item.id}>
                                            <div className="d-flex justify-content-between align-items-center flex-wrap">
                                                <div className="d-flex align-items-center">
                                                    <div className="HomePageList-Wrap">
                                                        <span>{item.img_wrap}</span>
                                                    </div>
                                                    <ul>
                                                        <li className="HomePageList-Title">{item.title}</li>
                                                        <li className={item.font}>
                                                            <i className={item.font_awesome} aria-hidden="true"></i>
                                                            {item.day_title}
                                                        </li>
                                                    </ul>
                                                </div>
                                                <button  className="ButtonSettings" onClick={this.handleOpen}></button>
                                                <Popover
                                                    open={this.state.open}
                                                    anchorEl={this.state.anchorEl}
                                                    anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
                                                    targetOrigin={{horizontal: 'left', vertical: 'top'}}
                                                    onRequestClose={this.handleRequestClose}
                                                    animation={PopoverAnimationVertical}
                                                >
                                                    <Menu>
                                                        <Menu>
                                                            <MenuItem primaryText="Refresh"/>
                                                            <MenuItem primaryText="Settings"/>
                                                            <MenuItem primaryText="Delete"/>
                                                        </Menu>
                                                    </Menu>
                                                </Popover>
                                            </div>
                                        </li>
                                    );
                                })
                            }
                        </ul>
                    </div>
                </li>
            </MuiThemeProvider>
        )
    }
}

export default HomePageListTasks;