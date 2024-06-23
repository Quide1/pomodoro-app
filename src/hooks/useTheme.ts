import { usePomodoroStore } from "@/store/pomodoros";

export function useTheme () {
    const currentBackground = usePomodoroStore(
        (state) => state.preferences.background
      );
    const checkBackGround = usePomodoroStore((state)=>state.changeBackGround)
    return{
      currentBackground,
      checkBackGround
    }
}