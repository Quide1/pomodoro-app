import { usePomodoroStore } from "@/store/pomodoros";

export function useConfigTimer() {
  const configNewTimers = usePomodoroStore((state) => state.changeConfigTimer);
  const currentTimer = usePomodoroStore(
    (state) => state.timerStatus.currentTimer
  );
  const time = usePomodoroStore((state) => state.timerSettings[currentTimer]);
  const timerSettings = usePomodoroStore((state) => state.timerSettings);

  return { configNewTimers, currentTimer, time, timerSettings };
}
