export interface TimerSettings {
    pomodoro: number;
    shortBreak: number;
    longBreak: number;
}

export interface PomodoroSession {
    completedPomodoros: number;
}
export interface TimerStatus {
    isRunning: boolean;
    currentTimer: keyof(TimerSettings)
}
export interface Preferences {
    background: string;
    notificationSettings: {
        enabled: boolean;
        sound: string;
    };
}
