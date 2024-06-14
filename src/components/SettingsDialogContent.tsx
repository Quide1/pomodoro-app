import InputPomodoroSettings from "./InputPomodoroSettings";
import { useTimerEntries } from "@/hooks/useTimerEntries";
import { useConfigTimer } from "@/hooks/useConfigTimers";
import { type TimerSettings } from "@/types/pomodoros";
import { useCallback } from "react";
import { type OnChangeFunction } from "./InputPomodoroSettings";
// Función que se va a ejecutar en el mapeo y va a devolver el onChangeHandler
type CreatorOfOnChangeHandler = (key: keyof TimerSettings) => OnChangeFunction;

function SettingsDialogContent() {
  const { timerEntries, timerLabels } = useTimerEntries();
  const { changeConfigTimer } = useConfigTimer();

  const createOnChangeHandler: CreatorOfOnChangeHandler = useCallback(
    (key) =>
      (event: React.ChangeEvent<HTMLInputElement>): void => {
        const newValue = parseInt(event.target.value);
        changeConfigTimer({ key, value: newValue });
      },
    []
  );

  return (
    <div className="grid gap-4 py-4">
      {timerEntries.map(([key, value]) => (
        <InputPomodoroSettings
          key={key}
          id={key}
          label={timerLabels[key]}
          currentTime={value}
          createOnChangeHandler={createOnChangeHandler(key)}
        />
      ))}
    </div>
  );
}

export default SettingsDialogContent;
