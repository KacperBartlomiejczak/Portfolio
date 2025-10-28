"use client";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import classes from "@/components/ui/button.module.css";
import { inter } from "@/app/ui/fonts";
import ContactInput from "./contactInput";
import { SubmitHandler, useForm } from "react-hook-form";

interface formInput {
  name: string;
  email: string;
  message: string;
}

export default function ContactDialog() {
  const { register, handleSubmit } = useForm<formInput>();

  const onSubmit: SubmitHandler<formInput> = (data) => {
    console.log(data);
  };

  return (
    <Dialog>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogTrigger asChild>
          <button
            className={`flex bg-cta px-4 py-2 rounded-xl font-bold text-white cursor-pointer ${inter.className} antialiased hover:bg-[#2b8883] transition-colors focus:bg-[#2b8883]  md:px-6 md:py-3 ${classes.buttonAnimation} text-lg lg:px-8 lg:py-3 xl:px-10 xl:text-xl mb-4 md:mb-6 lg:mb-8`}
          >
            Wyślij formularz
          </button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader className="text-left">
            <DialogTitle className={`${inter.className}`}>
              Wyślij zgłoszenie
            </DialogTitle>
            <DialogDescription>
              Potrzebujesz strony internetowej?
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-4 my-4">
            <ContactInput
              title="Twoje Imię"
              htmlFor="name"
              {...register("name")}
            />
            <ContactInput
              title="Twoj email"
              htmlFor="email"
              type="email"
              {...register("email")}
            />
            <ContactInput
              title="Twoj email"
              htmlFor="text"
              textArea
              {...register("message")}
            />
          </div>
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
        </DialogContent>
      </form>
    </Dialog>
  );
}
