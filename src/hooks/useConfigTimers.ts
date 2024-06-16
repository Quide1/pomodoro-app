import { usePomodoroStore } from "@/store/pomodoros";

export function useConfigTimer() {
  const changeConfigTimer = usePomodoroStore(
    (state) => state.changeConfigTimer
  );

  const changeCurrentTimer = usePomodoroStore(
    (state) => state.changeCurrentTimer
  );


  const timerSettings = usePomodoroStore((state) => state.timerSettings);
  return {
    changeConfigTimer,
    timerSettings,
    changeCurrentTimer,
  };
}
