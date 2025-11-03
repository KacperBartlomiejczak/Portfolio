import { DialogTrigger } from "@/components/ui/dialog";
import classes from "@/components/ui/button.module.css";
import { inter } from "@/app/ui/fonts";
export default function ContactDialogTrigger() {
  return (
    <DialogTrigger asChild>
      <button
        className={`flex bg-cta px-4 py-2 rounded-xl font-bold text-white cursor-pointer ${inter.className} antialiased hover:bg-[#2b8883] transition-colors focus:bg-[#2b8883]  md:px-6 md:py-3 ${classes.buttonAnimation} text-lg lg:px-8 lg:py-3 xl:px-10 xl:text-xl mb-4 md:mb-6 lg:mb-8 dark:bg-accent dark:hover:bg-[#2cb68d]`}
      >
        Wyślij formularz
      </button>
    </DialogTrigger>
  );
}
