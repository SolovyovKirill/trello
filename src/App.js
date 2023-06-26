import './App.css';
import React from "react";
import Modal from "./components/Modal/Modal";
import Header from "./components/Header/Header";
import ProgressRow from "./components/ProgressRow/ProgressRow";
import TaskForm from "./components/TaskForm/TaskForm";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import useLocalStorage from "./hooks/useLocalStorage";
import useModal from "./hooks/useModal";


function App() {
    const [tasks, setTasks] = useLocalStorage("tasks", []);
    const [modalActive, toggleModal, closeModal] = useModal(false);

    return (
        <DndProvider backend={HTML5Backend}>
            <div className="app">
                <Header handleToggleModal={toggleModal}/>
                <Modal active={modalActive} setActive={toggleModal} handleCloseModal={closeModal} title="Create task:">
                    <TaskForm tasks={tasks} setTasks={setTasks} handleCloseModal={closeModal} />
                </Modal>
                <ProgressRow tasks={tasks} setTasks={setTasks}/>
            </div>
        </DndProvider>
    );
}

export default App
