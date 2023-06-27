import React from "react";
import "./TaskForm.css";
import useTaskForm from "../../hooks/useTaskForm";

const TaskForm = ({ tasks = [], setTasks, handleCloseModal }) => {
    const {
        task,
        isFormValid,
        handleFormSubmit,
        handleOnChangeTitle,
        handleOnChangeDescription,
        handleOnChangeUser,
    } = useTaskForm(tasks, setTasks, handleCloseModal);

    return (
        <form className="form" onSubmit={handleFormSubmit}>
            <input
                type="text"
                placeholder="Title"
                value={task.title}
                onChange={handleOnChangeTitle}
            />
            <input
                type="text"
                placeholder="Description"
                value={task.description}
                onChange={handleOnChangeDescription}
            />
            <input
                type="text"
                placeholder="User"
                value={task.user}
                onChange={handleOnChangeUser}
            />
            <button
                className="button-create"
                type="submit"
                disabled={!isFormValid}
            >
                Create
            </button>
        </form>
    );
};

export default TaskForm;
