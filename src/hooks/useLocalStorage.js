import { useEffect, useState } from "react";

const getInitialValue = (key, initialValue) => {
    const storedValue = localStorage.getItem(key);

    return storedValue ? JSON.parse(storedValue) : initialValue;
};

const useLocalStorage = (key, initialValue) => {
    const [value, updateValue] = useState(getInitialValue(key, initialValue));

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, updateValue];
};

export default useLocalStorage;
