import React from 'react';
import "./ProgressBox.css"
import TaskBox from "../TaskBox/TaskBox";

const ProgressBox = ({title, tasks}) => {
    return (
        <div className="box">
            <div className="box-progress">
                {title}
            </div>
            {tasks.map((task, index) => (
                <TaskBox
                    key={index}
                    title={task.title}
                    description={task.description}
                    user={task.user}
                />
            ))}
        </div>
    );
};

export default ProgressBox;
