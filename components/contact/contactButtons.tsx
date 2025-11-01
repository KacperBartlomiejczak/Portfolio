import { DialogClose, DialogFooter } from "@/components/ui/dialog";
import { inter } from "@/app/ui/fonts";
import { Send } from "@/public/svg/logos";
import classes from "./contactButton.module.css";

export default function ContactButtons({ isSended }: { isSended: boolean }) {
  return (
    <DialogFooter
      className={`flex flex-row justify-end items-center gap-2 ${inter.className}`}
    >
      <DialogClose asChild>
        <button className="px-4 py-2 border-2 hover:border-red-400 rounded-lg hover:bg-red-400 transition-colors cursor-pointer">
          Odrzuć
        </button>
      </DialogClose>
      <button
        type="submit"
        className={`px-7 py-2 bg-primary-color rounded-lg text-white border-2 border-primary-color hover:bg-secondary-bg hover:border-secondary-bg hover:text-black transition-colors cursor-pointer text-left relative  ${
          isSended ? classes.sending : classes.button
        }`}
        disabled={isSended}
      >
        <p className={`block text-left ${!isSended && classes.buttonText}`}>
          {isSended ? "Wysyłanie" : "Wyślij"}
        </p>

        <div
          className={`absolute top-1/2 right-4 translate-y-[-50%] ${classes.buttonIcon}`}
        >
          {!isSended && <Send width="18" />}
        </div>
      </button>
    </DialogFooter>
  );
}
