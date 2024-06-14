import { useConfigTimer } from "@/hooks/useConfigTimers";
function Timer() {
  const { time } = useConfigTimer();
  return (
    <div>
      <p>{time}</p>
    </div>
  );
}

export default Timer;
