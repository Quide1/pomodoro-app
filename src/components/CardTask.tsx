import { Card, CardContent, CardDescription } from "@/components/ui/card";
import { TaskStatus, type Task } from "@/types/tasks";
import CircleIcon from "@/icons/CircleIcon";
import CheckedIcon from "@/icons/CheckedIcon";
import { useTaskFunctionalities } from "@/hooks/useTaskFunctionalities";
import ThrashIcon from "@/icons/ThrashIcon";
import PencilIcon from "@/icons/PencilIcon";

type TaskProps = Task & {
    index: number
}



function CardTask({ description, status, index }: TaskProps) {
    const { toggleProgress } = useTaskFunctionalities()
    const toggleProgressHandler = () => {
        toggleProgress(index)
    }
    return (
        <Card className={`w-full max-w-2xl border-2 border-black ${status === TaskStatus.Done ? 'bg-slate-800' : 'bg-slate-600'}`}>
            <CardContent className={`flex items-center justify-start p-4 `}>
                <div onClick={toggleProgressHandler} className="flex items-center gap-3">
                    {
                        status === TaskStatus.ToDo ? <CircleIcon /> : <CheckedIcon />
                    }
                </div>
                <CardDescription className={`text-white m-4 text-ellipsis ${status === TaskStatus.Done ? 'line-through' : ''}`}>
                    {description}
                </CardDescription>
                <div className="flex flex-col gap-4">
                    <ThrashIcon className="w-5 h-5 cursor-pointer" />
                    <PencilIcon className="w-5 h-5 cursor-pointer" />
                </div>
            </CardContent>
        </Card>
    );
}

export default CardTask;
