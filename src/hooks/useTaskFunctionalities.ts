import { useTaskStore } from "@/store/tasks"

export const useTaskFunctionalities = () => {
    const tasks = useTaskStore((state) => state.tasks);
    const createTask = useTaskStore((state) => state.createTask);
    const toggleProgress = useTaskStore((state) => state.toggleProgress);
    const eliminateTasksDone = useTaskStore((state) => state.eliminateTasksDone);
    const eliminateOneTask = useTaskStore((state) => state.eliminateOneTask);
    const editTask = useTaskStore((state) => state.editTask);

    return {
        tasks,
        createTask,
        toggleProgress,
        eliminateTasksDone,
        eliminateOneTask,
        editTask,
    };
};
