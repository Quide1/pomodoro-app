import Timer from "@/components/Timer";
import Tasks from "./Tasks";
import { useTheme } from "@/hooks/useTheme";

import QuestionsSection from "./QuestionsSection";

function HomeMain() {
  const { currentBackground } = useTheme();
  return (
    <main className={`p-4 ${currentBackground} flex flex-col items-center overflow-hidden p-0 mt-0 pt-0`}>
      <section className="min-h-[93vh]  w-full flex flex-col items-center">
        <Timer />
        <Tasks />
      </section>
    <QuestionsSection/>
    </main>
  );
}

export default HomeMain;
