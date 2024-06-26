import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type InputPomodoroProps = {
  id: string;
  label: string;
  currentTime: number;
  createOnChangeHandler: OnChangeFunction
};

export type OnChangeFunction = (
  event: React.ChangeEvent<HTMLInputElement>
) => void



function InputPomodoroSettings({ id, label, currentTime,createOnChangeHandler }: InputPomodoroProps) {

 
  return (
    <div className="grid grid-cols-4 items-center gap-6 ">
      <Label htmlFor={id} className="text-center col-span-2">
        {label}
      </Label>
      <Input
        min="1"
        step="1"
        id={id}
        type="number"
        defaultValue={currentTime}
        className="col-span-2 border-0 border-blue-700"
        onChange={createOnChangeHandler}
      />
    </div>
  );
}

export default InputPomodoroSettings;
