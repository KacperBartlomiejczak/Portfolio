"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import ContactDialogInputs from "./contactDialogInputs";
import ContactButtons from "./contactButtons";
import ContactDialogTrigger from "./contactDialogTrigger";
import ContactDialogHeader from "./contactDialogHeader";
import toast from "react-hot-toast";
import { useTranslations } from "next-intl";

interface FormInput {
  name: string;
  email: string;
  message: string;
}

export default function ContactDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSended, setIsSended] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const t = useTranslations("Contact.dialog");
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors },
  } = useForm<FormInput>();

  const onSubmit: SubmitHandler<FormInput> = async (data) => {
    // ustaw błędy per pole (dokładnie który input jest pusty)
    let hadEmpty = false;
    if (!data.name || !data.name.trim()) {
      setError("name", {
        type: "manual",
        message: t("validation.name"),
      });
      hadEmpty = true;
    }
    if (!data.email || !data.email.trim()) {
      setError("email", {
        type: "manual",
        message: t("validation.email"),
      });
      hadEmpty = true;
    }
    if (!data.message || !data.message.trim()) {
      setError("message", {
        type: "manual",
        message: t("validation.message"),
      });
      hadEmpty = true;
    }
    setIsEmpty(hadEmpty);
    if (hadEmpty) return;

    setIsSended(true);
    try {
      const emailjs = (await import("@emailjs/browser")).default;

      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS configuration is missing. Please check your environment variables.");
      }

      const response = await emailjs.send(
        serviceId,
        templateId,
        {
          name: data.name,
          email: data.email,
          message: data.message,
        },
        publicKey,
      );
      console.log("Success!", response.status, response.text);
      toast.success(t("success"));

      setIsOpen(false);
      setIsEmpty(false);
      reset();
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : String(error);
      console.error("Failed to send email:", errorMessage);
      toast.error(t("error"));
    } finally {
      setIsSended(false);
    }
  };
  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    // when dialog closes, clear sending state and errors
    if (!open) {
      setIsSended(false);
      setIsEmpty(false);
      reset();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <ContactDialogTrigger />
      <DialogContent className="bg-bg-color dark:bg-background">
        <form onSubmit={handleSubmit(onSubmit)}>
          <ContactDialogHeader />
          <ContactDialogInputs register={register} errors={errors} />
          <ContactButtons isSended={isSended} />
        </form>
      </DialogContent>
    </Dialog>
  );
}
