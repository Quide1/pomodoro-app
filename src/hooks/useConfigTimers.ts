import { usePomodoroStore } from "@/store/pomodoros";

export function useConfigTimer() {
  const changeConfigTimer = usePomodoroStore(
    (state) => state.changeConfigTimer
  );

  const changeCurrentTimer = usePomodoroStore(
    (state) => state.changeCurrentTimer
  );
  const changeSoundAlert = usePomodoroStore((state)=>state.changeSoundAlert)
  const changeAutoStart = usePomodoroStore((state)=>state.changeAutoStart)
  const preferences = usePomodoroStore((state)=>state.preferences)
  const timerSettings = usePomodoroStore((state) => state.timerSettings);
  const soundPreferences = usePomodoroStore((state)=>state.preferences.soundNotification)

  return {
    changeSoundAlert,
    changeConfigTimer,
    timerSettings,
    changeCurrentTimer,
    changeAutoStart,
    preferences,
    soundPreferences
  };
}
