import React from "react";
import "./Modal.css";
import close from "../../icons/close.svg";

const Modal = ({ active, setActive, children, handleCloseModal, title }) => {
    const stopPropagation = (event) => {
        event.stopPropagation();
    };

    const closeModal = () => {
        setActive(false);
    };

    return (
        <div className={active ? "modal active" : "modal"} onClick={closeModal}>
            <div
                className={active ? "modal__content active" : "modal__content"}
                onClick={stopPropagation}
            >
                <div className="form-title">
                    <h1 className="title-modal" style={{ color: "black" }}>
                        {title}
                    </h1>
                    <button className="close-button" onClick={handleCloseModal}>
                        <img src={close} alt="Close" />
                    </button>
                </div>
                {children}
            </div>
        </div>
    );
};

export default Modal;
