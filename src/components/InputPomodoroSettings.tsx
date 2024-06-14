import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type InputPomodoroProps = {
  id: string;
  label: string;
  currentTime: number;
};


function InputPomodoroSettings({ id, label, currentTime }: InputPomodoroProps) {


  return (
    <div className="grid grid-cols-4 items-center gap-6 ">
      <Label htmlFor={id} className="text-right col-span-2">
        {label}
      </Label>
      <Input
        id={id}
        type="number"
        defaultValue={currentTime}
        className="col-span-2 border-0 border-blue-700"
      />
    </div>
  );
}

export default InputPomodoroSettings;
