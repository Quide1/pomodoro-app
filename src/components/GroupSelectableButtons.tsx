// ButtonGroup.tsx
import React, { useEffect, useState } from "react";
import SelectableButton from "./SelectableButton";
import { useConfigTimer } from "@/hooks/useConfigTimers";
import { useTimerEntries } from "@/hooks/useTimerEntries";
import { TimerSettings } from "@/types/pomodoros";
import { useTimerFunctionalities } from "@/hooks/useTimerFunctionalities";
import { useTheme } from "@/hooks/useTheme";

const ButtonGroup: React.FC = () => {
    const { timerLabels } = useTimerEntries();
    const {  changeCurrentTimer,} = useConfigTimer();
    const {currentTimer } =useTimerFunctionalities()
    const [selectedButton, setSelectedButton] = useState<string>(currentTimer);
    const buttonEntries = Object.entries(timerLabels);
    const {checkBackGround} = useTheme()
    useEffect(()=>{
    setSelectedButton((currentTimer))
    checkBackGround()
    },[currentTimer])
    const handleButtonClick = (keyLabel: string) => {
        if(keyLabel == selectedButton){
            return
        }
        setSelectedButton(keyLabel);
        const newKey =  keyLabel as keyof TimerSettings
        changeCurrentTimer({ value:newKey });
    };

    return (
        <div className="flex space-x-2">
            {buttonEntries.map(([key, value]) => (
                <SelectableButton
                    key={key}
                    label={value}
                    isSelected={selectedButton === key}
                    onClick={() => handleButtonClick(key)}
                />
            ))}
        </div>
    );
};

export default ButtonGroup;
