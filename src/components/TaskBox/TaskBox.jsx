import React from 'react';
import "./TaskBox.css"
const TaskBox = ({title, description, user}) => {
    return (
        <div className="box-container">
            <div className="title">{title}</div>
            <div className="description">{description}</div>
            <div className="user">{user}</div>
        </div>
    );
};

export default TaskBox;
