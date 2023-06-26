import React from "react";
import './ProgressRow.css';
import Board from "../Board/Board";
import useTaskStatuses from "../../hooks/useTaskStatuses";

const ProgressRow = ({ tasks, setTasks }) => {
    const { todo, readyForDev, inProgress, done } = useTaskStatuses(tasks);

    const statuses = ["todo", "readyForDev", "inProgress", "done"];

    return (
        <div className="boards-row">
            {statuses.map((status, index) => (
                <Board
                    key={index}
                    status={status}
                    setTasks={setTasks}
                    todo={todo}
                    readyForDev={readyForDev}
                    inProgress={inProgress}
                    done={done}
                />
            ))}
        </div>
    );
};

export default ProgressRow;
