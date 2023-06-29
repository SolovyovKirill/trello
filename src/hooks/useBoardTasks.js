import { useEffect, useState } from "react";

const useBoardTasks = (status, todo, readyForDev, inProgress, done) => {
    const [tasksToMap, setTasksToMap] = useState([]);
    const [text, setText] = useState("TO DO");

    useEffect(() => {
        let updatedTasksToMap = [];
        let updatedText = "TO DO";

        switch (status) {
            case "readyForDev":
                updatedText = "READY FOR DEV";
                updatedTasksToMap = readyForDev;
                break;
            case "inProgress":
                updatedText = "IN PROGRESS";
                updatedTasksToMap = inProgress;
                break;
            case "done":
                updatedText = "DONE";
                updatedTasksToMap = done;
                break;
            default:
                updatedTasksToMap = todo;
                break;
        }

        setTasksToMap(updatedTasksToMap);
        setText(updatedText);
    }, [status, todo, readyForDev, inProgress, done]);

    return { text, tasksToMap };
};

export default useBoardTasks;
