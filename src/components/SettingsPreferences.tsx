import SwitchUi from "./Switch";
import { useConfigTimer } from "@/hooks/useConfigTimers";
function SettingsPreferences() {
    const { changeAutoStart, preferences } = useConfigTimer();
    const autoStart = preferences.autoPlay;
    return (
        <div>
            <SwitchUi
                label="Inicio automático"
                onSwitchFunction={changeAutoStart}
                checked={autoStart}
            />
        </div>
    );
}

export default SettingsPreferences;
