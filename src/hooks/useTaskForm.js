import { useCallback, useMemo, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const DEFAULT_TASK = {
    id: "",
    title: "",
    description: "",
    user: "",
    status: "todo",
};

const useTaskForm = (tasks, setTasks, handleCloseModal) => {
    const [isFormValid, setIsFormValid] = useState(false);
    const [task, setTask] = useState(DEFAULT_TASK);

    const validateForm = useCallback(() => {
        const { title, description, user } = task || {};
        return title && description && user;
    }, [task]);

    const newTask = useMemo(() => {
        const { title, description, user } = task;
        return {
            id: uuidv4(),
            title,
            description,
            user,
            status: "todo",
        };
    }, [task]);

    const handleFormSubmit = useCallback(
        (event) => {
            event.preventDefault();
            if (isFormValid) {
                const updatedTasks = Array.isArray(tasks)
                    ? [...tasks, newTask]
                    : [newTask];
                setTasks(updatedTasks);
                localStorage.setItem("tasks", JSON.stringify(updatedTasks));

                setTask(DEFAULT_TASK);
                setIsFormValid(false);
                handleCloseModal();
            }
        },
        [isFormValid, tasks, newTask, setTasks, handleCloseModal],
    );

    const handleOnChangeTitle = useCallback(
        (event) => {
            setTask({ ...task, id: uuidv4(), title: event.target.value });
            setIsFormValid(validateForm());
        },
        [task, validateForm],
    );

    const handleOnChangeDescription = useCallback(
        (event) => {
            setTask({ ...task, description: event.target.value });
            setIsFormValid(validateForm());
        },
        [task, validateForm],
    );

    const handleOnChangeUser = useCallback(
        (event) => {
            setTask({ ...task, user: event.target.value });
            setIsFormValid(validateForm());
        },
        [task, validateForm],
    );

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
