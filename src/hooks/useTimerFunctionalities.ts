import { usePomodoroStore } from "@/store/pomodoros";
import { TimerSettings } from '@/types/pomodoros'

export const useTimerFunctionalities = () =>{

    const {startTimer} = usePomodoroStore()
    
    return {startTimer}
}