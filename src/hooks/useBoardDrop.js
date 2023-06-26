import {useDrop} from "react-dnd";

const useBoardDrop = (status, setTasks) => {
    const [{ isOver }, drop] = useDrop(() => ({
        accept: "task",
        drop: (item) => addItemToBoard(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    }));

    const addItemToBoard = (id) => {
        setTasks(prevTasks => {
            const updatedTasks = prevTasks.map(task => {
                if (task.id === id) {
                    return { ...task, status: status };
                }
                return task;
            });

            localStorage.setItem("tasks", JSON.stringify(updatedTasks));

            return updatedTasks;
        });
    };

    return {
        dropRef: drop,
        isOver
    };
};

export default useBoardDrop;
