import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { inter } from "@/app/ui/fonts";

export default function ContactDialogHeader() {
  return (
    <DialogHeader className="text-left">
      <DialogTitle className={`${inter.className}`}>
        Wyślij zgłoszenie
      </DialogTitle>
      <DialogDescription>Potrzebujesz strony internetowej?</DialogDescription>
    </DialogHeader>
  );
}
