import { useState } from "react";

const useModal = (initialState = false) => {
    const [modalActive, setModalActive] = useState(initialState);

    const toggleModal = () => {
        setModalActive(!modalActive);
    };

    const closeModal = () => {
        setModalActive(false);
    };

    return [modalActive, toggleModal, closeModal];
};

export default useModal;
