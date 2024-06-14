import { create } from "zustand";
import {
    type TimerSettings,
    type PomodoroSession,
    type TimerStatus,
    type Preferences,
} from "@/types/pomodoros";
export interface AppState {
    timerSettings: TimerSettings; // configuraciones del temporizador
    pomodoroSession: PomodoroSession; // sesión de Pomodoro
    timerStatus: TimerStatus; // estado del temporizador
    preferences: Preferences; // preferencias del usuario
    /**Actions */
    changeConfigTimer: (newSettingsTimer: TimerSettings) => Promise<void>;
    startTimer: () => Promise<void>;
    stopTimer: () => Promise<void>;
    resetTimer: () => Promise<void>;
    completePomodoro: () => Promise<void>;
    changeTimer: () => Promise<void>;
    completeTimer: () => Promise<void>;
}

const initialTimerSettings: TimerSettings = {
    pomodoro: 25,
    longBreak: 20,
    shortBreak: 5,
};
const initialPomodoroSession: PomodoroSession = {
    completedPomodoros: 0,
};
const initialPreferences: Preferences = {
    background: "#fafafa",
    notificationSettings: {
        enabled: false,
        sound: "pajarito",
    },
};
const initialStatus: TimerStatus = {
    currentTimer: "pomodoro",
    isRunning: false,
};
export const usePomodoroStore = create<AppState>((set) => ({
    timerSettings: initialTimerSettings,
    pomodoroSession: initialPomodoroSession,
    preferences: initialPreferences,
    timerStatus: initialStatus,
    changeConfigTimer: async (newSettingsTimer) => {
        set((state) => ({ ...state, timerSettings: newSettingsTimer }));
    },
    startTimer: async () => {
        console.log("Start Timer");
    },
    stopTimer: async () => {
        console.log("Stop Timer");
    },
    resetTimer: async () => {
        console.log("Reset Timer");
    },
    completePomodoro: async () => {
        console.log("Complete Pomodoro");
    },
    changeTimer: async () => {
        console.log("Change Timer");
    },
    completeTimer: async () => {
        console.log("Complete Timer");
    },
}));
