import React, {useState} from 'react';
import Modal from "../Modal/Modal";

const TaskFormModal = () => {
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
        <div className="modal-overlay">
            <div className="modal">
                <form onSubmit={handleSubmit}>
                    <button className="close-button">&#10006;</button>
                    <h1 className="form-title">Create task:</h1>
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
                    <button type="submit">Create</button>
                </form>

            </div>
        </div>
    );
};

export default TaskFormModal;
