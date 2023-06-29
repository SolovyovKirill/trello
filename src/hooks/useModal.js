import { useCallback, useState } from "react";

const useModal = (initialState = false) => {
    const [modalActive, setModalActive] = useState(initialState);

    const toggleModal = useCallback(() => {
        setModalActive(!modalActive);
    }, []);

    const closeModal = useCallback(() => {
        setModalActive(false);
    }, []);

    return [modalActive, toggleModal, closeModal];
};

export default useModal;
