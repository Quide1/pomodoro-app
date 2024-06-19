import Timer from "@/components/Timer";
import Tasks from "./Tasks";

function HomeMain() {
  return (
    <main className="p-2 bg-gray-800 border-2 border-red-600 min-h-screen flex flex-col items-center ">
      <Timer />
      <Tasks/>
    </main>
  );
}

export default HomeMain;
