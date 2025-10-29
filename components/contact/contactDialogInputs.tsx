"use client";

import ContactInput from "./contactInput";
import { UseFormRegister } from "react-hook-form";

interface ContactDialogInputProps {
  register: UseFormRegister<{
    name: string;
    email: string;
    message: string;
  }>;
}

export default function ContactDialogInput({
  register,
}: ContactDialogInputProps) {
  return (
    <div className="flex flex-col gap-4 my-4">
      <ContactInput title="Twoje Imię" htmlFor="name" {...register("name")} />
      <ContactInput
        title="Twoj email"
        htmlFor="email"
        type="email"
        {...register("email")}
      />
      <ContactInput
        title="Wiadomość"
        htmlFor="message"
        textArea
        {...register("message")}
        
      />
    </div>
  );
}
