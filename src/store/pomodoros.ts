import { create } from "zustand";
import {
    type TimerSettings,
    type PomodoroSession,
    type TimerStatus,
    type Preferences,
} from "@/types/pomodoros";
import { nextTimer } from "@/utils/nextTimer";
import { playSound } from "@/utils/playSound";
import { SoundRoutes } from "@/constants/soundRoutes";
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
    changeCurrentTimer: ({
        value,
    }: {
        value: keyof TimerSettings;
    }) => Promise<void>;
    completeTimer: () => Promise<void>;
    restOneSecond: () => Promise<void>;
    changeAutoStart: () => Promise<void>
    changeSoundAlert: (newSound: string) => Promise<void>
}

const initialTimerSettings: TimerSettings = {
    pomodoro: 3,
    shortBreak: 2,
    longBreak: 1200,
};
const initialPomodoroSession: PomodoroSession = {
    pomodoroCount: 0,
    completedSessions: 0
};
const initialPreferences: Preferences = {
    background: "bg-green-900",
    autoPlay: false,
    soundNotification: `${SoundRoutes[0].path}`,
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
            timersState: initialTimersStates
        });

    },

    changeCurrentTimer: async ({ value }) => {
        const newTimerStatus = {
            isRunning: false,
            currentTimer: value,
        };
        set({ timerStatus: newTimerStatus });
    },
    completeTimer: async () => {
        const { timerStatus, pomodoroSession, resetTimer, startTimer, preferences } = get()
        playSound(preferences.soundNotification)
        const currentTimer = timerStatus.currentTimer
        console.log(currentTimer)
        const nexTimer = nextTimer(currentTimer, pomodoroSession.pomodoroCount)
        console.log(pomodoroSession.pomodoroCount)
        console.log(nexTimer)
        const newPomodoroSession = {
            ...pomodoroSession,
            pomodoroCount: pomodoroSession.pomodoroCount + 1
        }
        const newTimerStatus = {
            isRunning: false,
            currentTimer: nexTimer,
        };
        set({ timerStatus: newTimerStatus });
        set({ pomodoroSession: newPomodoroSession })
        resetTimer()
        if (preferences.autoPlay) {
            startTimer()

        }
    },

    changeAutoStart: async () => {
        const { preferences } = get()
        set({
            preferences: {
                ...preferences,
                autoPlay: !preferences.autoPlay
            }
        })
    },
    changeSoundAlert: async (newSound: string) => {
        const { preferences } = get()
        set({
            preferences: {
                ...preferences,
                soundNotification: newSound
            }
        })
    }
}));
