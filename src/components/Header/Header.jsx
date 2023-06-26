import React from 'react';
import './Header.css';

const Header = ({ handleToggleModal }) => {

    return (
        <header className="header">
            <div className="header-title">TRELLO</div>
            <button className="create-task-button" onClick={handleToggleModal}>
                Create New Task
            </button>
        </header>
    );
};

export default Header;
