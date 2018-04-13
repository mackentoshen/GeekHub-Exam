import React from 'react';

import './TaskName.css';

class TaskName extends React.Component {
    render () {
        let TitleSymbol = this.props.data.title.charAt(0).toUpperCase();


        return (
            <p className="TaskName">
                {TitleSymbol}
            </p>
        )
    }
}

export default TaskName;