import { Card, CardContent } from "@/components/ui/card";
import { useTaskFunctionalities } from "@/hooks/useTaskFunctionalities";
import CardTAsk from "./CardTask";
import DeleteTaskDone from "./DeleteTaskDone";
import CreateNewTask from "./CreateNewTask";
import { ScrollArea } from "@/components/ui/scroll-area"

function Tasks() {
    const { tasks } = useTaskFunctionalities()

    return (
        <Card className=" w-full max-w-[500px] flex flex-col items-center mt-6 mb-4 bg-gray-400 border-white bg-opacity-20">
            <div className="flex flex-row flex-wrap gap-4 w-full items-center justify-center p-2 m-2">
                <DeleteTaskDone />
                <CreateNewTask />
            </div>
            <ScrollArea className=" h-[500px] w-full">
                <CardContent className="flex flex-col-reverse gap-4items-center w-full gap-2">
                    {
                        tasks.length > 0 ?
                            tasks.map((task, index) => {
                                return <CardTAsk key={index} description={task.description} status={task.status} index={index} ></CardTAsk>
                            }) : <p className="text-gray-600">Sin tareas pendientes</p>
                    }
                </CardContent>
            </ScrollArea>


        </Card>
    )
}

export default Tasks
