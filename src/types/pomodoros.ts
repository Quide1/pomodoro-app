
    export interface TimerSettings {
        pomodoro: number;
        shortBreak: number;
        longBreak: number;
    }

    export interface PomodoroSession {
        pomodoroCount:number,
        completedSessions:number
    }
    export interface TimerStatus {
        isRunning: boolean;
        currentTimer: keyof(TimerSettings)
    }
    export interface Preferences {
        background: string;
        autoPlay:boolean;
        soundNotification: string;
    }

    type EnumThemes  = {
        [K in keyof TimerSettings]:string
    }
    
    export const ThemesStrings: EnumThemes = {
        pomodoro:"bg-green-900",
        longBreak:"bg-blue-900",
        shortBreak:"bg-yellow-900"
    }