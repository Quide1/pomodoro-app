import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { SoundRoutes } from "@/constants/soundRoutes";
import { useConfigTimer } from "@/hooks/useConfigTimers";
import SpeakerIcon from "@/icons/SpeakerIcon";
import { Button } from "./ui/button";
import { playSound } from "@/utils/playSound";
function AlarmPreferences() {
    const { changeSoundAlert, soundPreferences } = useConfigTimer();
    const onChangeHandler = (event: string) => {
        changeSoundAlert(event);
    };
    return (
        <div className="flex flex-row  items-center justify-between gap-2 ">
            <Label>Elegir sonido de alarma</Label>
            <Select onValueChange={onChangeHandler} defaultValue={soundPreferences}>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Alarma" />
                </SelectTrigger>
                <SelectContent>
                    {SoundRoutes.map((value, index) => {
                        return (
                            <SelectItem key={index} value={value.path}>
                                {value.label}
                            </SelectItem>
                        );
                    })}
                </SelectContent>
            </Select>
            <Button  aria-label="Escuchar sonido" variant="outline" size="icon" onClick={
               ()=>{
                playSound(soundPreferences)
               }
            }>
                <SpeakerIcon className="w-8 rounded-sm p-1 h-auto border-1 bg-slate-300 border-red-600" />
            </Button>
        </div>
    );
}

export default AlarmPreferences;
