import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import SettingsIcon from "@/icons/SettingsIcon";
import SettingsDialogContent from "./SettingsDialogContent";
import { Separator } from "@/components/ui/separator";
import SettingsPreferences from "./SettingsPreferences";

function HomeHeader() {
  return (
    <header className="w-full bg-gray-500 border-red-400 border-1 flex items-center h-[7vh] p-2 text-4xl">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="default" size={"icon"}>
            <SettingsIcon />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] bg-slate-400">
          <DialogHeader>
            <DialogTitle>Configuración</DialogTitle>
            <DialogDescription>
              Configura los tiempos que quieres manejar para tu pomodoro
            </DialogDescription>
          </DialogHeader>
          <SettingsDialogContent />
          <SettingsPreferences/>
          <Separator className="my-4 bg-black" />
          <DialogFooter>
            <DialogClose asChild={true}>
              <Button type="submit">Ok</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </header>
  );
}

export default HomeHeader;
