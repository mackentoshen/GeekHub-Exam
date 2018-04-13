import React from 'react';
import './HomeStatSelect.css'
import FontAwesome from 'react-fontawesome';

class HomeStatSelect extends React.Component {

    render() {
        return (
            <div className='SelectFieldSales'>
                <span className='SelectLabelSales'>{this.props.data.label + ':'}</span>
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
        )
    }
}

export default HomeStatSelect;