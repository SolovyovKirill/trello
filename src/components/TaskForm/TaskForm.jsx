import React from "react";
import './TaskForm.css';

const TaskForm = ({ title, description, user, onTitleChange, onDescriptionChange, onUserChange, onSubmit, isFormValid }) => {
    return (
        <form className="form" onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={onTitleChange}
            />
            <input
                type="text"
                placeholder="Description"
                value={description}
                onChange={onDescriptionChange}
            />
            <input
                type="text"
                placeholder="User"
                value={user}
                onChange={onUserChange}
            />
            <button className="button-create" type="submit" disabled={!isFormValid}>
                Create
            </button>
        </form>
    );
};

export default TaskForm;
