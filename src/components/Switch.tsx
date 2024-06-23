import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

type SwitchProps = {
  onSwitchFunction: () => void,
  label: string,
  checked: boolean
}
function SwitchUi({ label, onSwitchFunction, checked }: SwitchProps) {
  return (
    <div className='flex flex-row  items-center justify-between gap-2 content-start '>
      <Label>{label}</Label>
      <Switch className='border-2 border-black bg-blackA6 border-l-green-950 rounded-full relative shadow-[0_2px_10px] shadow-black focus:shadow-[0_0_0_2px] focus:shadow-black data-[state=checked]:bg-slate-700 outline-none cursor-default' onCheckedChange={onSwitchFunction} checked={checked} />

    </div>

  )
}

export default SwitchUi
