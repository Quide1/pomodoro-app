import Timer from "@/components/Timer";
import Tasks from "./Tasks";
import { useTheme } from "@/hooks/useTheme";
function HomeMain() {
  const { currentBackground } = useTheme()
  return (
    <main className={`p-2 ${currentBackground} min-h-screen flex flex-col items-center overflow-hidden`}>
      <Timer />
      <Tasks />
    </main>
  );
}

export default HomeMain;
