import { Card, CardContent, CardDescription } from "@/components/ui/card";
import { TaskStatus, type Task } from "@/types/tasks";
import CircleIcon from "@/icons/CircleIcon";
import CheckedIcon from "@/icons/CheckedIcon";
import { useTaskFunctionalities } from "@/hooks/useTaskFunctionalities";
import ThrashIcon from "@/icons/ThrashIcon";
import PencilIcon from "@/icons/PencilIcon";
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useState } from "react";

type TaskProps = Task & {
    index: number;
};

function CardTask({ description, status, index }: TaskProps) {
    const { toggleProgress, eliminateOneTask, editTask } = useTaskFunctionalities();
    const [error, setError] = useState<string | null>(null);
    const [inputValue, setInputValue] = useState<string>("");

    const toggleProgressHandler = () => {
        toggleProgress(index);
    };

    const onDeleteHandler = () => {
        eliminateOneTask(index);
    };

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

            editTask(index,newTask);
            setError(null);
        }
    };

    return (
        <>
            <Dialog>
                <Card className={`w-full min-h-[80px] flex flex-row b-2 b-red-500 max-w-2xl ${status === TaskStatus.Done ? 'bg-slate-800' : 'bg-slate-600'}`}>
                    <CardContent className="w-full flex flex-row items-center justify-between p-3 border-2  rounded-xl">
                        <div className="flex flex-row">
                            <div onClick={toggleProgressHandler} className="flex items-center gap-3">
                                {status === TaskStatus.ToDo ? <CircleIcon /> : <CheckedIcon />}
                            </div>
                            <CardDescription className={`text-white text-base m-4 text-ellipsis ${status === TaskStatus.Done ? 'line-through' : ''}`}>
                                {description}
                            </CardDescription>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="bg-red-500 p-1 b-2 rounded-sm">
                                <ThrashIcon onClickFunction={onDeleteHandler} className="w-5 h-5 cursor-pointer" />
                            </div>
                            <DialogTrigger asChild>
                                <div className="bg-red-500 p-1 b-2 rounded-sm">
                                    <PencilIcon className="w-5 h-5 cursor-pointer" />
                                </div>
                            </DialogTrigger>
                        </div>
                    </CardContent>
                </Card>
                <DialogContent className="sm:max-w-[500px]">
                    <form>
                        <DialogHeader>
                            <DialogTitle>Edita una tarea</DialogTitle>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="description" className="text-right">
                                    Descripción
                                </Label>
                                <Input
                                    placeholder={description}
                                    autoComplete="off"
                                    name="description"
                                    maxLength={255}
                                    id="description"
                                    className="col-span-3 border-2 border-gray-900"
                                    onChange={onChangeInput}
                                    value={inputValue}
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
        </>
    );
}

export default CardTask;
