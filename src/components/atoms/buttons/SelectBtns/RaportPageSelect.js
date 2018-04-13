import React from 'react';
import './RaportPageSelect.css';
import FontAwesome from 'react-fontawesome';


class RaportPageSelect extends React.Component {
    render() {
        return(
            <div className="SelectFieldRaport">
                <span className='SelectLabelRaport'>{this.props.data.label + ':'}</span>
                <select
                    onChange={this.props.onChange}
                    className='Select'>
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
                <FontAwesome
                    className='select-caret'
                    name='angle-down'
                />
            </div>
        );
    }
}

export default RaportPageSelect;