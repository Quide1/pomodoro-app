import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { type Task } from "@/types/tasks";

function CardTAsk({ description, status }: Task) {
    return (
        <Card className=" w-full mt-2 bg-gray-600">
            <CardHeader className="flex flex-row items-center justify-center">
            </CardHeader>
            <CardContent>
                <p>{description}</p>
            </CardContent>
            <CardFooter>

            </CardFooter>
        </Card>
    )
}

export default CardTAsk
