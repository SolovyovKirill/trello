import {useEffect, useState} from "react";

const useTaskStatuses = (tasks) => {
    const [todo, setTodo] = useState([]);
    const [readyForDev, setReadyForDev] = useState([]);
    const [inProgress, setInProgress] = useState([]);
    const [done, setDone] = useState([]);

    useEffect(() => {
        const fTodo = tasks?.filter((task) => task.status === "todo") || [];
        const fReadyForDev = tasks?.filter((task) => task.status === "readyForDev") || [];
        const fInProgress = tasks?.filter((task) => task.status === "inProgress") || [];
        const fDone = tasks?.filter((task) => task.status === "done") || [];

        setTodo(fTodo);
        setReadyForDev(fReadyForDev);
        setInProgress(fInProgress);
        setDone(fDone);
    }, [tasks]);

    return {
        todo,
        readyForDev,
        inProgress,
        done,
    };
};

export default useTaskStatuses;
