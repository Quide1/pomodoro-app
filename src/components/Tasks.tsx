import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useTaskFunctionalities } from "@/hooks/useTaskFunctionalities";
import CardTAsk from "./CardTask";
import DeleteTaskDone from "./DeleteTaskDone";
import CreateNewTask from "./CreateNewTask";

function Tasks() {
    const { tasks } = useTaskFunctionalities()

    return (
        <Card className=" w-full max-w-[500px] flex flex-col items-center mt-6">
            <div className="flex flex-row flex-wrap gap-4 w-full items-center justify-center p-2 m-2">
                <DeleteTaskDone />
                <CreateNewTask/>
            </div>
            <CardContent className="flex flex-col gap-4 w-full items-center">
                {
                    tasks.length> 0 ? 
                    tasks.map((task, index) => {
                        return <CardTAsk key={index} description={task.description} status={task.status} index={index} ></CardTAsk>
                    })  : <p className="text-gray-600">Sin tareas pendientes</p>
                }
            </CardContent>
            <CardFooter>

            </CardFooter>
        </Card>
    )
}

export default Tasks
