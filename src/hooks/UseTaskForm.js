import { useState } from "react";

function useTaskForm() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [user, setUser] = useState("");
    const [nextId, setNextId] = useState(1);

    const setReset = () => {
        setTitle("");
        setDescription("");
        setUser("");
    };

    return {
        title,
        description,
        user,
        setTitle,
        setDescription,
        setUser,
        setReset,
        nextId,
        setNextId
    };
}

export default useTaskForm;
