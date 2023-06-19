import './App.css';
import Header from "./components/Header/Header";
import React, {useState} from "react";
import Modal from "./components/Modal/Modal";

function App() {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [user, setUser] = useState('');

    const [modalActive, setModalActive] = useState(true)

    const handleSubmit = (e) => {
        e.preventDefault();

        setTitle("");
        setDescription("");
        setUser("");
    }

    return (
        <div className="app">
            <header className="header">
                <div className="header-title">TRELLO</div>
                <button className="create-task-button" onClick={() => setModalActive(true)}>
                    Create New Task
                </button>
            </header>
            <Modal active={modalActive} setActive={setModalActive}>
                <form className="form" onSubmit={handleSubmit}>
                    <div className="form-title">
                        <h1 className="title">Create task:</h1>
                        <button className="close-button">&#10006;</button>
                    </div>

                    <input
                        type="text"
                        placeholder="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="User"
                        value={user}
                        onChange={(e) => setUser(e.target.value)}
                    />
                    <button className="button-create">Create</button>
                </form>
            </Modal>
        </div>
    );
}

export default App;
