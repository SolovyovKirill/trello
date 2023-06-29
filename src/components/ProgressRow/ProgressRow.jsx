import React, { useEffect, useState } from "react";
import "./ProgressRow.css";
import Board from "../Board/Board";
import getFilteredTasks from "../../utils/utils";

const ProgressRow = ({ tasks, setTasks }) => {
    const [todo, setTodo] = useState([]);
    const [readyForDev, setReadyForDev] = useState([]);
    const [inProgress, setInProgress] = useState([]);
    const [done, setDone] = useState([]);

    useEffect(() => {
        setTodo(getFilteredTasks("todo", tasks));
        setReadyForDev(getFilteredTasks("readyForDev", tasks));
        setInProgress(getFilteredTasks("inProgress", tasks));
        setDone(getFilteredTasks("done", tasks));
    }, [tasks]);

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
