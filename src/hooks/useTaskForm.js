import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const useTaskForm = (tasks, setTasks, handleCloseModal) => {
    const [isFormValid, setIsFormValid] = useState(false);

    const validateForm = () => {
        return task.title !== "" && task.description !== "" && task.user !== "";
    };

    const [task, setTask] = useState({
        id: "",
        title: "",
        description: "",
        user: "",
        status: "todo",
    });

    const handleFormSubmit = (event) => {
        event.preventDefault();
        if (isFormValid) {
            const newTask = {
                id: uuidv4(),
                title: task.title,
                description: task.description,
                user: task.user,
                status: "todo",
            };

            const updatedTasks = Array.isArray(tasks)
                ? [...tasks, newTask]
                : [newTask];
            setTasks(updatedTasks);
            localStorage.setItem("tasks", JSON.stringify(updatedTasks));

            setTask({
                id: "",
                title: "",
                description: "",
                user: "",
                status: "todo",
            });

            setIsFormValid(false);
            handleCloseModal();
        }
    };

    const handleOnChangeTitle = (event) => {
        setTask({ ...task, id: uuidv4(), title: event.target.value });
        setIsFormValid(validateForm());
    };

    const handleOnChangeDescription = (event) => {
        setTask({ ...task, description: event.target.value });
        setIsFormValid(validateForm());
    };

    const handleOnChangeUser = (event) => {
        setTask({ ...task, user: event.target.value });
        setIsFormValid(validateForm());
    };

    return {
        task,
        isFormValid,
        handleFormSubmit,
        handleOnChangeTitle,
        handleOnChangeDescription,
        handleOnChangeUser,
    };
};

export default useTaskForm;
