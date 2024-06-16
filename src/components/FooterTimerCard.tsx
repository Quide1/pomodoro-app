import { CardFooter } from "@/components/ui/card";
import { Button } from "./ui/button";
import { useTimerFunctionalities } from "@/hooks/useTimerFunctionalities";

function FooterTimerCard() {
  const { startTimer, timerStatus, pauseTimer } = useTimerFunctionalities();
  return (
    <CardFooter>
      {timerStatus.isRunning ? (
        <Button onClick={pauseTimer}>Pausar</Button>
      ) : (
        <Button onClick={startTimer}>Comenzar</Button>
      )}
    </CardFooter>
  );
}

export default FooterTimerCard;
