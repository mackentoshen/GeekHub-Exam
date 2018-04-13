import React from 'react';
import Calendar from 'react-calendar';
import './HomeCalendar.css';

class HomeCalendar extends React.Component {

    state = {
        date: new Date(),
    };

    onChange = date => this.setState({ date });

    render() {
        return(
            <div className="Calendar-Page">
                <Calendar
                    onChange = {this.onChange}
                    value = {this.state.date}
                    locale="en-EN"
                />
            </div>
        );
    }
}

export default HomeCalendar;