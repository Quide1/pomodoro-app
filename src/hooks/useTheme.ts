import { usePomodoroStore } from "@/store/pomodoros";

export function useTheme () {
    const currentBackground = usePomodoroStore(
        (state) => state.preferences.background
      );
      
    return{
      currentBackground
    }
}