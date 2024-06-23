import { Card, CardContent, CardHeader } from "@/components/ui/card";
import GroupSelectableButtons from "./GroupSelectableButtons";
import FooterTimerCard from "./FooterTimerCard";
import { useTimerFunctionalities } from "@/hooks/useTimerFunctionalities";
import { useEffect } from "react";
import { useLifeOfPomodoro } from "@/hooks/useLifeOfPomodoro";

function Timer() {

  const {
    currentTime,
    timerStatus,
    restOneSecond,
    pauseTimer,
    currentTimeInSeconds,
    currentTimer,
  } = useTimerFunctionalities();
  const { completeTimer } = useLifeOfPomodoro();
  useEffect(() => {
    if (!timerStatus.isRunning) {
      return; // No establecer el intervalo si no está corriendo
    }

    const IntervalTime = setInterval(() => {
      restOneSecond();
    }, 1000);

    // Limpiar el intervalo cuando el componente se desmonte o cuando timerStatus cambie
    return () => clearInterval(IntervalTime);
  }, [timerStatus.isRunning, restOneSecond]);

  useEffect(() => {
    if (currentTimeInSeconds <= 0) {
      pauseTimer();
      completeTimer();
    }
  }, [currentTimeInSeconds, pauseTimer, completeTimer, currentTimer]);


  return (
    <Card className={` w-full max-w-[500px] flex flex-col items-center bg-gray-400 border-black bg-opacity-20 mt-4 `}>
      <CardHeader className="flex flex-row items-center justify-center">
        <GroupSelectableButtons />
      </CardHeader>
      <CardContent>
        <p className="text-8xl lg:text-10xl text-white">{currentTime}</p>
      </CardContent>
      <FooterTimerCard />
    </Card>
  );
}

export default Timer;
