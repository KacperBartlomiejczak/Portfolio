import { DialogClose, DialogFooter } from "@/components/ui/dialog";
import { inter } from "@/app/ui/fonts";

export default function ContactButtons() {
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
        className={`px-4 py-2 bg-primary-color rounded-lg text-white border-2 border-primary-color hover:bg-secondary-bg hover:border-secondary-bg hover:text-black transition-colors cursor-pointer`}
      >
        Wyślij
      </button>
    </DialogFooter>
  );
}
