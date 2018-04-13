import React from 'react';
import './WorkflowPageSelect.css';

import FontAwesome from 'react-fontawesome';

class WorkflowPageSelect extends React.Component {
    render() {
        return(
            <div className="SelectFieldWorkflow">
                <span className='SelectLabelWorkflow'>{this.props.data.label + ':'}</span>
                <select
                    onChange={this.props.onSelectChange}
                    className='SelectWorkflow'>
                    {this.props.data.list.map((item, index) => {
                        return (
                            <option
                                className='select-option'
                                key={index}
                                value={item}
                            >{item}</option>
                        )
                    })}
                </select>
                <FontAwesome className='select-caret Caret-Work' name='angle-down'/>
            </div>
            // <div className="SelectField">
            //     <p>Show projects:</p>
            //     <select onChange={this.handleChange}>
            //         {
            //             this.props.data.map((item, index) => {
            //                 return <option key={index} value={item}>{item}</option>
            //             })
            //         }
            //     </select>
            //     <FontAwesome
            //         className='select-caret'
            //         name='angle-down'
            //     />
            // </div>

        );
    }
}

export default WorkflowPageSelect;