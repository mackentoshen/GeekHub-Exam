import React from 'react';

import './HomeHeaderPanel.css';

class HomeHeaderPanel extends React.Component {
    render(){
        return(
            <div className="HomeHeaderPanel">
                <h3>{this.props.title}</h3>
                <div className="CountStats">
                    <p className="ActiveStatus">(<span>{this.props.count}</span>)</p>
                    {/*<p className={this.props.delay ? "DelayStatus" : null}>{this.props.delayCount}</p>*/}
                </div>
            </div>
        )
    }
}

export default HomeHeaderPanel;