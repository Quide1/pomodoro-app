import React from 'react'
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

type SwitchProps = {
  onSwitchFunction: () => void,
  label: string,
  checked: boolean
}
function SwitchUi({ label, onSwitchFunction, checked }: SwitchProps) {
  return (
    <div className='flex flex-row  items-center justify-center gap-2'>
      <Label>{label}</Label>
      <Switch className='border-2 border-red-400' onCheckedChange={onSwitchFunction} checked={checked} />

    </div>

  )
}

export default SwitchUi
