import { Card, CardContent, CardHeader } from "@/components/ui/card";
import GroupSelectableButtons from "./GroupSelectableButtons";
import FooterTimerCard from "./FooterTimerCard";
import { useTimerFunctionalities } from "@/hooks/useTimerFunctionalities";
import { useEffect } from "react";
function Timer() {
  const { currentTime, timerStatus, restOneSecond } = useTimerFunctionalities();
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
  return (
    <Card className=" w-full max-w-[500px] flex flex-col items-center">
      <CardHeader className="flex flex-row items-center justify-center">
        <GroupSelectableButtons />
      </CardHeader>
      <CardContent>
        <p className="text-9xl">{currentTime}</p>
      </CardContent>
      <FooterTimerCard />
    </Card>
  );
}

export default Timer;
