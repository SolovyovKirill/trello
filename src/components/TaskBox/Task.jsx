import React from 'react';
import "./Task.css"
import {useDrag} from "react-dnd";

const Task = ({task}) => {

    const [{ isDragging}, drag] = useDrag(() => ({
        type: "task",
        item: {id: task.id},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }))

    return (
        <div ref={drag} className="task">
            <div className="title">{task.title}</div>
            <div className="description">{task.description}</div>
            <div className="user">{task.user}</div>
        </div>
    );
}

export default Task;
