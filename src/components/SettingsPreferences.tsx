import AlarmPreferences from "./AlarmPreferences";
import SwitchUi from "./Switch";
import { useConfigTimer } from "@/hooks/useConfigTimers";
function SettingsPreferences() {
    const { changeAutoStart, preferences } = useConfigTimer();
    const autoStart = preferences.autoPlay;
    return (
        <div className="flex flex-col gap-4">
            <SwitchUi
                label="Inicio automático"
                onSwitchFunction={changeAutoStart}
                checked={autoStart}
            />
            <AlarmPreferences />
        </div>
    );
}

export default SettingsPreferences;
