import { usePomodoroStore } from "@/store/pomodoros";
import { convertSecondsToMinutesAndSeconds } from "@/utils/convertorSeconstToMins";

export const useTimerFunctionalities = () => {
    const startTimer = usePomodoroStore((state) => state.startTimer);
    const pauseTime= usePomodoroStore((state)=> state.stopTimer)
    const restOneSecond = usePomodoroStore((state) => state.restOneSecond);

    const timerStatus = usePomodoroStore((state) => state.timerStatus)
    const currentTimer = usePomodoroStore(
        (state) => state.timerStatus.currentTimer
    );
    const currentTime = convertSecondsToMinutesAndSeconds(
        usePomodoroStore((state) => state.timersState[currentTimer])
    );
   
   

    return { startTimer, currentTimer, currentTime,timerStatus,restOneSecond,pauseTime };
};
