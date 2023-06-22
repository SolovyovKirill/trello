import './App.css';
import React, {useEffect, useState} from "react";
import Modal from "./components/Modal/Modal";
import Header from "./components/Header/Header";
import ProgressRow from "./components/ProgressRow/ProgressRow";
import TaskForm from "./components/TaskForm/TaskForm";
import useTaskForm from "./hooks/UseTaskForm";

function App() {

    const { title, setTitle, description, setDescription, user, setUser , setReset} = useTaskForm();
    const [modalActive, setModalActive] = useState(false);
    const [taskList, setTaskList] = useState([]);

    useEffect(() => {
        const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        setTaskList(tasks);
    }, []);


    const isFormValid = title.trim() !== "" && description.trim() !== "" && user.trim() !== "";

    const handleSubmit = (e) => {
        e.preventDefault();

        if (title.trim() === "" || description.trim() === "" || user.trim() === "") {
            setModalActive(false);
            return;
        }

        const newTask = {
            title: title,
            description: description,
            user: user
        };

        const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        localStorage.setItem("tasks", JSON.stringify([...tasks, newTask]));

        setTaskList((prevTaskList) => [...prevTaskList, newTask]);

        setModalActive(false);
    };

    const handleCreateTask = () => {
        setReset();
        setModalActive(true);
    };

    const handleCloseModal = () => {
        setModalActive(false);
    };

    return (
        <div className="app">
            <Header handleCreateTask={handleCreateTask} />
            <Modal active={modalActive} setActive={setModalActive} handleCloseModal={handleCloseModal} title="Create task:">
                <TaskForm
                    title={title}
                    description={description}
                    user={user}
                    onTitleChange={(e) => setTitle(e.target.value)}
                    onDescriptionChange={(e) => setDescription(e.target.value)}
                    onUserChange={(e) => setUser(e.target.value)}
                    onSubmit={handleSubmit}
                    isFormValid={isFormValid}
                />
            </Modal>
            <ProgressRow taskList={taskList} />
        </div>
    );
}

export default App
