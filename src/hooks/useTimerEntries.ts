import { usePomodoroStore } from "@/store/pomodoros";
import { TimerSettings } from '@/types/pomodoros'

export  function useTimerEntries() {
    const timers = usePomodoroStore((state) => state.timerSettings);
    const timerEntries = Object.entries(timers) as [keyof TimerSettings, number][]
    const timerLabels: { [key in keyof TimerSettings]: string } = {
        pomodoro: "Pomodoro",
        shortBreak: "Descanso corto",
        longBreak: "Descanso largo",
    };

    return {
        timerEntries,
        timerLabels
    }
}