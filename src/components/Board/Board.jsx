import React from 'react';
import Task from "../TaskBox/Task";
import './Board.css';
import useBoardDrop from "../../hooks/useBoardDrop";

const Board = ({ status, setTasks, todo, readyForDev, inProgress, done }) => {
    const { dropRef, isOver } = useBoardDrop(status, setTasks);

    let tasksToMap = todo;
    let text = "TO DO";

    if (status === "readyForDev") {
        text = "READY FOR DEV";
        tasksToMap = readyForDev;
    }

    if (status === "inProgress") {
        text = "IN PROGRESS";
        tasksToMap = inProgress;
    }

    if (status === "done") {
        text = "DONE";
        tasksToMap = done;
    }

    return (
        <div ref={dropRef} className="board">
            <div className="board-title">
                {text}
            </div>
            {tasksToMap.length > 0 && tasksToMap.map(task =>
                <Task key={task.id} task={task} />
            )}
        </div>
    );
};

export default Board;
