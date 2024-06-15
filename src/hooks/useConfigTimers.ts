import { usePomodoroStore } from "@/store/pomodoros";

export function useConfigTimer() {
  const changeConfigTimer = usePomodoroStore(
    (state) => state.changeConfigTimer
  );

  const changeCurrentTimer = usePomodoroStore(
    (state) => state.changeCurrentTimer
  );

  const currentTimer = usePomodoroStore(
    (state) => state.timerStatus.currentTimer
  );
  const currentTime = usePomodoroStore(
    (state) => state.timerSettings[currentTimer]
  );
  const timerSettings = usePomodoroStore((state) => state.timerSettings);
  return {
    changeConfigTimer,
    currentTimer,
    currentTime,
    timerSettings,
    changeCurrentTimer,
  };
}
