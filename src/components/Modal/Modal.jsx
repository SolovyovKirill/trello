import React from 'react';
import "./Modal.css"

const Modal = ({active, setActive, children, handleCloseModal, title}) => {

    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className={active ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()}>
                <div className="form-title">
                    <h1 className="title" style={{color:"black"}}>{title}</h1>
                    <button className="close-button" onClick={handleCloseModal}>&#10006;</button>
                </div>
                {children}
            </div>

        </div>
    );
};

export default Modal;
