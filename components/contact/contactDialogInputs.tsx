"use client";

import ContactInput from "./contactInput";
import type { UseFormRegister, FieldErrors } from "react-hook-form";
import { useTranslations } from "next-intl";

interface FormShape {
  name: string;
  email: string;
  message: string;
}

interface ContactDialogInputProps {
  register: UseFormRegister<FormShape>;
  errors?: FieldErrors<FormShape>;
}

export default function ContactDialogInputs({
  register,
  errors,
}: ContactDialogInputProps) {
  const t = useTranslations("Contact.dialog");
  return (
    <div className="flex flex-col gap-4 my-4">
      <ContactInput
        title={t("name_label")}
        htmlFor="name"
        {...register("name")}
        error={errors?.name?.message as string | undefined}
      />
      <ContactInput
        title={t("email_label")}
        htmlFor="email"
        type="email"
        {...register("email")}
        error={errors?.email?.message as string | undefined}
      />
      <ContactInput
        title={t("message_label")}
        htmlFor="message"
        textArea
        {...register("message")}
        error={errors?.message?.message as string | undefined}
      />
    </div>
  );
}
