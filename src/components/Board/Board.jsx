import React from "react";
import Task from "../Task/Task";
import "./Board.css";
import useBoardDrop from "../../hooks/useBoardDrop";
import useBoardTasks from "../../hooks/useBoardTasks";

const Board = ({ status, setTasks, todo, readyForDev, inProgress, done }) => {
    const { dropRef, isOver } = useBoardDrop(status, setTasks);
    const { text, tasksToMap } = useBoardTasks(
        status,
        todo,
        readyForDev,
        inProgress,
        done,
    );

    return (
        <div ref={dropRef} className="board">
            <h1 className="board-title">{text}</h1>
            {tasksToMap.length > 0 &&
                tasksToMap.map((task) => <Task key={task.id} task={task} />)}
        </div>
    );
};

export default Board;
