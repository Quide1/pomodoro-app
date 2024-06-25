import { CrossIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useTaskFunctionalities } from "@/hooks/useTaskFunctionalities";
import { Task, TaskStatus } from "@/types/tasks";
import { useState } from "react";

function CreateNewTask() {
    const { createTask } = useTaskFunctionalities();
    const [error, setError] = useState<string | null>(null);
    const [inputValue, setInputValue] = useState<string>("");

    const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        if (value.length >= 4 && value.length <= 255) {
            setInputValue(value);
            setError(null); // Limpiar el error si la longitud es suficiente
        } else {
            setInputValue(value); // También actualiza el inputValue aquí
            setError("Descripciones válidas mínimo 4, máximo 255 caracteres");
        }
    };

    const onClickHandler = () => {
        if (inputValue.length >= 4 && inputValue.length <= 255) {
            const newTask = {
                description: inputValue,
                status: TaskStatus.ToDo,
            } as Task;

            createTask(newTask);
            setError(null);
        }
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button aria-label="Crear nueva tarea" className="flex flex-row items-center justify-between border-2 border-white bg-gray-800   ">
                    Crear nueva tarea
                    <CrossIcon className="m-2 h-4 w-4" />
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px] w-full bg-gray-400">
                <form>
                    <DialogHeader>
                        <DialogTitle>Crea una nueva tarea</DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-4 py-4 flex-wrap">
                        <div className="flex flex-row flex-wrap items-center gap-4">
                            <Label htmlFor="description" className="text-right">
                                Descripción
                            </Label>
                            <Input
                                defaultValue={""}
                                autoComplete="off"
                                name="description"
                                maxLength={255}
                                id="description"
                                className="col-span-3 border-2 border-gray-900"
                                onChange={onChangeInput}
                            />
                        </div>
                    </div>
                    {error && (
                        <div className="text-red-500">
                            <p>{error}</p>
                        </div>
                    )}

                    <DialogFooter>
                        <DialogClose asChild>
                            <Button
                            aria-label="Aceptar menu de crear nueva tarea"
                                type="button"
                                disabled={error !== null}
                                onClick={onClickHandler}
                            >
                                Listo
                            </Button>
                        </DialogClose>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}

export default CreateNewTask;
