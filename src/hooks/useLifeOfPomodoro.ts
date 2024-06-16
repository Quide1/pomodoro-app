import { usePomodoroStore } from "@/store/pomodoros";
import { useEffect } from "react";


export function useLifeOfPomodoro () {
    const completeTimer = usePomodoroStore(
        (state) => state.completeTimer
      );
   
    return{
      completeTimer
    }
}