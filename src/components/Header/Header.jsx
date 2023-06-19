import React, {useState} from 'react';
import Modal from "../Modal/Modal";

const Header = () => {
    return (
        <div className="header">
            <div className="header-title">TRELLO</div>
            <button className="create-task-button" onClick={() => setModalActive(true)}>
                Create New Task
            </button>
        </div>
    );
};

export default Header;
