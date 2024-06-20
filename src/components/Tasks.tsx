import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTaskFunctionalities } from "@/hooks/useTaskFunctionalities";
import CardTAsk from "./CardTask";
import ThrashIcon from "@/icons/ThrashIcon";

function Tasks() {
    const { tasks } = useTaskFunctionalities()
    return (
        <Card className=" w-full max-w-[500px] flex flex-col items-center mt-2">
            <CardHeader className="flex flex-row items-center justify-center">
                <Button>
                    <ThrashIcon className="mr-2 h-4 w-4" /> Eliminar hechas
                </Button>
            </CardHeader>
            <CardContent>
                {
                    tasks.map((task, index) => {
                        console.log(task)
                        return <CardTAsk key={index} description={task.description} status={task.status} index={index} ></CardTAsk>
                    })
                }
            </CardContent>
            <CardFooter>

            </CardFooter>
        </Card>
    )
}

export default Tasks
