// ButtonGroup.tsx
import React, { useState } from "react";
import SelectableButton from "./SelectableButton";
import { useConfigTimer } from "@/hooks/useConfigTimers";
import { useTimerEntries } from "@/hooks/useTimerEntries";
import { TimerSettings } from "@/types/pomodoros";

const ButtonGroup: React.FC = () => {
    const { timerLabels } = useTimerEntries();
    const { currentTimer, changeCurrentTimer } = useConfigTimer();
    const [selectedButton, setSelectedButton] = useState<string>(currentTimer);
    const buttonEntries = Object.entries(timerLabels);
    const handleButtonClick = (keyLabel: string) => {
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
                    isSelected={selectedButton === value}
                    onClick={() => handleButtonClick(key)}
                    bgColor="bg-red-800"
                />
            ))}
        </div>
    );
};

export default ButtonGroup;
