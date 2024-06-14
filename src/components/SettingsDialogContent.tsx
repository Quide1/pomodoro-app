import InputPomodoroSettings from "./InputPomodoroSettings";
import { useTimerEntries } from "@/hooks/useTimerEntries";
import { useConfigTimer } from "@/hooks/useConfigTimers";

function SettingsDialogContent() {
  const { timerEntries, timerLabels } = useTimerEntries();
  const { configNewTimers, timerSettings } = useConfigTimer();
  console.log(timerSettings);

  return (
    <div className="grid gap-4 py-4">
      {timerEntries.map(([key, value]) => (
        <InputPomodoroSettings
          key={key}
          id={key}
          label={timerLabels[key]}
          currentTime={value}
        />
      ))}
    </div>
  );
}

export default SettingsDialogContent;
