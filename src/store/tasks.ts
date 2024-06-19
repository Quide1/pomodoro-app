import { Task } from "@/types/tasks";
import { create } from "zustand";

interface AppState {
    Tasks:Task[],
    CreateTask: ()=>Promise<void>
    ToggleProgress:()=>Promise<void>,
    EliminateTasks:()=>Promise<void>

}
export const useTaskStore = create<AppState>((set,get)=>({

}))