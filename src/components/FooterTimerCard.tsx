import { CardFooter } from "@/components/ui/card";
import { Button } from "./ui/button";
import { useTimerFunctionalities } from "@/hooks/useTimerFunctionalities";


function FooterTimerCard() {
    const {startTimer} = useTimerFunctionalities()
    return (
    <CardFooter>
      <Button onClick={startTimer}>Comenzar</Button>
    </CardFooter>
  );
}

export default FooterTimerCard;
