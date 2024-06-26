import { CardFooter } from "@/components/ui/card";
import { Button } from "./ui/button";
import { useTimerFunctionalities } from "@/hooks/useTimerFunctionalities";
import PlayIcon from "@/icons/PlayIcon";
import PauseIcon from "@/icons/PauseIcon";
import { playSound } from "@/utils/playSound";
function FooterTimerCard() {
  const { startTimer, timerStatus, pauseTimer } = useTimerFunctionalities();
  const onPauseClick = () => {
    pauseTimer()
    playSound("public/button-press.mp3")
  }

  const onStartClick = () => {
    startTimer()
    playSound("public/button-press.mp3")

  }
  return (
    <CardFooter>
      {timerStatus.isRunning ? (
        <Button aria-label="Pausar temporizador" className="bg-gray-800  " onClick={onPauseClick}>
          Pausar <PauseIcon className={'ml-2'} /></Button>
      ) : (
        <Button aria-label="Comenzar o reanudar el temporizador" className="bg-gray-800  " onClick={onStartClick}>Comenzar  <PlayIcon className="ml-2" /></Button>
      )}
    </CardFooter>
  );
}

export default FooterTimerCard;
