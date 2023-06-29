import React from "react";
import "./Task.css";
import useTaskDrag from "../../hooks/useTaskDrag";

const Task = ({ task }) => {
    const { isDragging, drag } = useTaskDrag(task);

    return (
        <div ref={drag} className="task">
            <h3 className="title">{task.title}</h3>
            <h4 className="description">{task.description}</h4>
            <h5 className="user">{task.user}</h5>
        </div>
    );
};

export default Task;
