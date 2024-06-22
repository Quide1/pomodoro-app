import { usePomodoroStore } from "@/store/pomodoros";

export function useTheme () {
    const currentTimer = usePomodoroStore(
        (state) => state.timerStatus.currentTimer
      );
      
    return{
      currentTimer
    }
}