import { usePomodoroStore } from "@/store/pomodoros";
import { convertSecondsToMinutesAndSeconds } from "@/utils/convertorSeconstToMins";
export const useTimerFunctionalities = () => {
    const startTimer = usePomodoroStore((state) => state.startTimer);
    const pauseTimer = usePomodoroStore((state) => state.stopTimer);
    const restOneSecond = usePomodoroStore((state) => state.restOneSecond);

    const timerStatus = usePomodoroStore((state) => state.timerStatus);
    const currentTimer = usePomodoroStore(
        (state) => state.timerStatus.currentTimer
    );

    const currentTimeInSeconds = usePomodoroStore(
        (state) => state.timersState[currentTimer]
    );

    const currentTime = convertSecondsToMinutesAndSeconds(currentTimeInSeconds);


    return {
        startTimer,
        currentTimer,
        currentTime,
        timerStatus,
        restOneSecond,
        pauseTimer,
        currentTimeInSeconds,
    };
};
