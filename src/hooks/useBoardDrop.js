import { useDrop } from "react-dnd";
import { useCallback } from "react";

const useBoardDrop = (status, setTasks) => {
    const getTaskDropConfig = () => ({
        accept: "task",
        drop: (item) => addItemToBoard(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    });

    const [{ isOver }, drop] = useDrop(getTaskDropConfig);

    const addItemToBoard = useCallback(
        (id) => {
            setTasks((prevTasks) => {
                const updatedTasks = prevTasks.map((task) =>
                    task.id === id ? { ...task, status: status } : task,
                );
                localStorage.setItem("tasks", JSON.stringify(updatedTasks));

                return updatedTasks;
            });
        },
        [status, setTasks],
    );

    return {
        dropRef: drop,
        isOver,
    };
};

export default useBoardDrop;
