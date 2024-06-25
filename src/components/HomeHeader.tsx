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
import { useTheme } from "@/hooks/useTheme";

function HomeHeader() {
  const {currentBackground} = useTheme()
  return (
    <header className={`w-full ${currentBackground} border-1 flex items-center h-[7vh] p-2 text-4xl justify-center mb-0`}>
      <Dialog>
        <DialogTrigger asChild>
          <Button aria-label="Abrir configuracion" variant="default"  className="border-white bg-gray-800 " size={"icon"}>
            <SettingsIcon />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] bg-gray-400">
          <DialogHeader>
            <DialogTitle>Configuración</DialogTitle>
            <DialogDescription className="text-gray-800">
              Configura los tiempos que quieres manejar para tu pomodoro
            </DialogDescription>
          </DialogHeader>
          <SettingsDialogContent />
          <Separator className="my-4 bg-black" />
          <SettingsPreferences />
          <DialogFooter>
            <DialogClose asChild={true}>
              <Button aria-label="Aceptar configuracion" type="submit">Ok</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </header>
  );
}

export default HomeHeader;
