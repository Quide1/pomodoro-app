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
    timersState: TimerSettings; // Estado de los relojes
    /**Actions */
    changeConfigTimer: ({
        key,
        value,
    }: {
        key: keyof TimerSettings;
        value: number;
    }) => Promise<void>;
    startTimer: () => Promise<void>;
    stopTimer: () => Promise<void>;
    resetTimer: () => Promise<void>;
    completePomodoro: () => Promise<void>;
    changeCurrentTimer: ({
        value,
    }: {
        value: keyof TimerSettings;
    }) => Promise<void>;
    completeTimer: () => Promise<void>;
    restOneSecond: () => Promise<void>;
}

const initialTimerSettings: TimerSettings = {
    pomodoro: 1500,
    shortBreak: 300,
    longBreak: 1200,
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
const initialTimersStates = initialTimerSettings;
export const usePomodoroStore = create<AppState>((set, get) => ({
    timerSettings: initialTimerSettings,
    pomodoroSession: initialPomodoroSession,
    preferences: initialPreferences,
    timerStatus: initialStatus,
    timersState: initialTimersStates,
    changeConfigTimer: async ({ key, value }) => {
        const { timerSettings } = get();
        const newTimerSettings = {
            ...timerSettings,
            [key]: value,
        };
        set(() => ({ timerSettings: newTimerSettings }));
        set({ timersState: newTimerSettings });
    },

    startTimer: async () => {
        console.log("Start Timer");
        const { timerStatus } = get();
        set({
            timerStatus: {
                ...timerStatus,
                isRunning: true,
            },
        });
    },
    restOneSecond: async () => {
        const { timerStatus, timersState } = get();
        const { currentTimer } = timerStatus;
        const currentTime = timersState[currentTimer];
        const newTime = currentTime - 1;
        set({
            timersState: {
                ...timersState,
                [currentTimer]: newTime,
            },
        });
    },
    stopTimer: async () => {
        console.log("Stop Timer");
        const { timerStatus } = get();
        set({
            timerStatus: {
                ...timerStatus,
                isRunning: false,
            },
        });
    },
    resetTimer: async () => {
        console.log("Reset Timer");
        const { timerStatus } = get();
        set({
            timerStatus: {
                ...timerStatus,
                isRunning: false,
            },
        });
    },
    completePomodoro: async () => {
        console.log("Complete Pomodoro");
    },
    changeCurrentTimer: async ({ value }) => {
        const newTimerStatus = {
            isRunning: false,
            currentTimer: value,
        };
        set({ timerStatus: newTimerStatus });
    },
    completeTimer: async () => {
        console.log("Complete Timer");
    },
}));
