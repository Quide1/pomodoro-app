import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { SoundRoutes } from "@/constants/soundRoutes";
function AlarmPreferences() {
    return (
        <div className="flex flex-row  items-center justify-between gap-2 ">
            <Label>Elegir sonido de alarma</Label>
            <Select onValueChange={() => { console.log('asdsads') }}>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Alarma" />
                </SelectTrigger>
                <SelectContent >
                    {SoundRoutes.map((value,index) => {
                        return <SelectItem key={index} value={value.path}>{value.label}</SelectItem>;
                    })}
                </SelectContent>
            </Select>
        </div>
    );
}

export default AlarmPreferences;
