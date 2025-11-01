"use client";

import ContactInput from "./contactInput";
import type { UseFormRegister, FieldErrors } from "react-hook-form";

interface FormShape {
  name: string;
  email: string;
  message: string;
}

interface ContactDialogInputProps {
  register: UseFormRegister<FormShape>;
  errors?: FieldErrors<FormShape>;
}

export default function ContactDialogInput({
  register,
  errors,
}: ContactDialogInputProps) {
  return (
    <div className="flex flex-col gap-4 my-4">
      <ContactInput
        title="Twoje Imię"
        htmlFor="name"
        {...register("name")}
        error={errors?.name?.message as string | undefined}
      />
      <ContactInput
        title="Twoj email"
        htmlFor="email"
        type="email"
        {...register("email")}
        error={errors?.email?.message as string | undefined}
      />
      <ContactInput
        title="Wiadomość"
        htmlFor="message"
        textArea
        {...register("message")}
        error={errors?.message?.message as string | undefined}
      />
    </div>
  );
}
