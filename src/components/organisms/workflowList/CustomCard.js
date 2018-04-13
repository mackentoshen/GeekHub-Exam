import React from 'react';
import TaskName from "../../atoms/TaskName";
import DetailButton from "../../atoms/buttons/DetailButton";

import './CustomCard.css';


const CustomCard = data =>  {

    return (
        <div className="CardItem">
            <div className="CardContent">
                {/*<TaskName data={data}/>*/}
                <img src={data.photo} className="WorkflowImage"/>
                <div className="CardContentDetail">
                    <p className="Title">{data.title}</p>
                    <p className={ data.label === 'Completed' ? 'ToDoTime ToDoComplete' : 'ToDoTime'}>{data.label} ${data.value}</p>
                </div>
            </div>
            <DetailButton/>
        </div>

    )
};


export default CustomCard;