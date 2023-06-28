import React from "react";
import "./Header.css";

const Header = ({ handleToggleModal }) => {
    return (
        <header className="header">
            <h2 className="header-title">TRELLO</h2>
            <button className="create-task-button" onClick={handleToggleModal}>
                Create New Task
            </button>
        </header>
    );
};

export default Header;
