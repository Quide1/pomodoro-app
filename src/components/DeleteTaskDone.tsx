import { Button } from "@/components/ui/button";
import { useTaskFunctionalities } from "@/hooks/useTaskFunctionalities";
import ThrashIcon from "@/icons/ThrashIcon";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
function DeleteTaskDone() {

    const { eliminateTasksDone } = useTaskFunctionalities()

    const onClickDeleteTaskDone = () => {

        eliminateTasksDone()
    }
    return (
        <> <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button className="flex flex-row items-center justify-between border-2 border-white bg-gray-800  ">
                    Eliminar hechas <ThrashIcon className="m-2 h-4 w-4" />
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent className="bg-gray-400">
                <AlertDialogHeader>
                    <AlertDialogTitle>Estas seguro?</AlertDialogTitle>
                    <AlertDialogDescription className="text-gray-800">
                        Esta acción eliminara todas las tareas que tengas marcadas como "completas" y es irreversible
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={onClickDeleteTaskDone} >Continue</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
        </>
    )
}

export default DeleteTaskDone
