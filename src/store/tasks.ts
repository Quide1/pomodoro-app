import { Task, TaskStatus } from "@/types/tasks";
import { create } from "zustand";

interface AppState {
    tasks: Task[];
    createTask: (newTask: Task) => Promise<void>;
    toggleProgress: (index: number) => Promise<void>;
    eliminateTasksDone: () => Promise<void>;
    eliminateOneTask: (indexToEliminate: number) => Promise<void>;
    editTask: (indexToEdit: number, taskEdited: Task) => Promise<void>
}

const initialTasks: Task[] = [
    { description: "Inicia un pomodoro, ponte a estudiar mucho lorem !", status: TaskStatus.ToDo },
];

export const useTaskStore = create<AppState>((set, get) => ({
    tasks: initialTasks,
    createTask: async (newTask) => {
        const { tasks } = get();
        const newTasks = [...tasks, newTask];
        set({ tasks: newTasks });
    },
    editTask: async (indexToEdit, taskEdited) => {
        const { tasks } = get();
        const newTasks = tasks.map((task, index) => {
            if (index === indexToEdit) {
                return taskEdited
            }
            return task
        })
        set({ tasks: newTasks })
    },
    toggleProgress: async (index) => {
        const { tasks } = get();
        const newTasks = tasks.map((task, i) => {
            if (i === index) {
                return {
                    ...task,
                    status: task.status === TaskStatus.ToDo ? TaskStatus.Done : TaskStatus.ToDo,
                };
            }
            return task;
        });
        set({ tasks: newTasks });
    },

    eliminateTasksDone: async () => {
        const { tasks } = get();
        const newTasks = tasks.filter((task) => task.status !== TaskStatus.Done);
        set({ tasks: newTasks });
    },
    eliminateOneTask: async (indexToEliminate) => {
        const { tasks } = get();
        const newTasks = tasks.filter((_task, index) => index !== indexToEliminate);
        set({ tasks: newTasks });
    }
}));
