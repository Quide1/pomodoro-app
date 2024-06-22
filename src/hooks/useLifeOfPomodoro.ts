import { usePomodoroStore } from "@/store/pomodoros";


export function useLifeOfPomodoro () {
    const completeTimer = usePomodoroStore(
        (state) => state.completeTimer
      );
   
    return{
      completeTimer
    }
}