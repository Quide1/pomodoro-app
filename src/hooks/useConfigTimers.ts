import { usePomodoroStore } from "@/store/pomodoros";

export function useConfigTimer() {
  const changeConfigTimer = usePomodoroStore(
    (state) => state.changeConfigTimer
  );

  const changeCurrentTimer = usePomodoroStore(
    (state) => state.changeCurrentTimer
  );
  const changeAutoStart = usePomodoroStore((state)=>state.changeAutoStart)
  const preferences = usePomodoroStore((state)=>state.preferences)
  const timerSettings = usePomodoroStore((state) => state.timerSettings);
  return {
    changeConfigTimer,
    timerSettings,
    changeCurrentTimer,
    changeAutoStart,
    preferences
  };
}
