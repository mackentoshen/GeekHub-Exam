import React from 'react';
import Popover, {PopoverAnimationVertical} from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './DetailButton.css';

class DetailButton extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            open: false,
        };
    }

    handleClick = (event) => {
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

    render() {
        return (
            <div>
                <MuiThemeProvider>
                    <button className="DetailButton" onClick={this.handleClick}></button>
                    <Popover
                        open={this.state.open}
                        anchorEl={this.state.anchorEl}
                        anchorOrigin={{horizontal: 'middle', vertical: 'top'}}
                        targetOrigin={{horizontal: 'left', vertical: 'top'}}
                        onRequestClose={this.handleRequestClose}
                        animation={PopoverAnimationVertical}
                    >
                        <Menu>
                            <MenuItem primaryText="Change Task"/>
                            <MenuItem primaryText="Delete Task"/>
                            <MenuItem primaryText="Mark as Important"/>
                            <MenuItem primaryText="Do task now"/>
                        </Menu>
                    </Popover>
                </MuiThemeProvider>
            </div>
        )
    }
}

export default DetailButton;