import { CardFooter } from "@/components/ui/card";
import { Button } from "./ui/button";
import { useTimerFunctionalities } from "@/hooks/useTimerFunctionalities";
import PlayIcon from "@/icons/PlayIcon";
import PauseIcon from "@/icons/PauseIcon";
function FooterTimerCard() {
  const { startTimer, timerStatus, pauseTimer } = useTimerFunctionalities();
  return (
    <CardFooter>
      {timerStatus.isRunning ? (
        <Button onClick={pauseTimer}>
         Pausar <PauseIcon className={'ml-2'}/></Button>
      ) : (
        <Button onClick={startTimer}>Comenzar  <PlayIcon className="ml-2"/></Button>
      )}
    </CardFooter>
  );
}

export default FooterTimerCard;
