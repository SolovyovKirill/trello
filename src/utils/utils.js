export default function getFilteredTasks(status, tasks) {
    return tasks?.filter((task) => task.status === status) || [];
}
