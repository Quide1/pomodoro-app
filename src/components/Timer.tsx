import { useConfigTimer } from "@/hooks/useConfigTimers";
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import GroupSelectableButtons from "./GroupSelectableButtons";
import FooterTimerCard from "./FooterTimerCard";
function Timer() {
  const { currentTime } = useConfigTimer();
  console.log(currentTime)
  return (
    <Card className=" w-full max-w-[500px] flex flex-col items-center">
      <CardHeader className="flex flex-row items-center justify-center">
        <GroupSelectableButtons />
      </CardHeader>
      <CardContent>
        <p className="text-9xl">{currentTime}</p>
      </CardContent>
     <FooterTimerCard/>
    </Card>
  );
}

export default Timer;
