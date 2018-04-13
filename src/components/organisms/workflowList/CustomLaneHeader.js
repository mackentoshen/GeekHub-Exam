import React from 'react';
import './CustomLaneHeader.css';


const CustomLaneHeader = (data, sum) =>  {

    let Counter = 0;
    (sum = () => {
        let sumCounter = 0;
        for (let i = 0; i < data.cards.length; i++) {
            sumCounter += data.cards[i].value;
        }
        return Counter = sumCounter;
    })();

    return (
        <div className="CardHeader">
            <p className="CardHeaderTitle">{data.header}</p>
            <p className="Counter">{data.cards.length} {data.cards.length > 1 ? 'projects' : 'project'} <span>{'$'+Counter}</span></p>
        </div>

    )
};

export default CustomLaneHeader;