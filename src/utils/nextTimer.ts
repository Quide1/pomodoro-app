import { type TimerSettings } from "@/types/pomodoros";

// Definir el tipo de la función nextTimer
type FunctionNextTimer = (
    currentTimer: keyof TimerSettings,
    pomodoroCount: number
) => keyof TimerSettings;

// Implementar la función nextTimer con el tipo explícito
export const nextTimer: FunctionNextTimer = (currentTimer, pomodoroCount) => {
    console.log(currentTimer,pomodoroCount)
    if (currentTimer === "pomodoro" || currentTimer === 'shortBreak') {
        return pomodoroCount % 4 === 0 && pomodoroCount !== 0
            ? "longBreak"
            : "shortBreak";
    } else {
        return "pomodoro";
    }
};
