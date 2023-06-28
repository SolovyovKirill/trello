import { useDrag } from "react-dnd";

const useTaskDrag = (task) => {
    const getTaskDragConfig = () => ({
        type: "task",
        item: { id: task.id },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    });

    const [{ isDragging }, drag] = useDrag(getTaskDragConfig);

    return { isDragging, drag };
};

export default useTaskDrag;
