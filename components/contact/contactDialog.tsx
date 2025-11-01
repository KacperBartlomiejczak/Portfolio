"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";

import { useState } from "react";

import { SubmitHandler, useForm } from "react-hook-form";
import ContactDialogInputs from "./contactDialogInputs";
import ContactButtons from "./contactButtons";
import ContactDialogTrigger from "./contactDialogTrigger";
import ContactDialogHeader from "./contactDialogHeader";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

interface formInput {
  name: string;
  email: string;
  message: string;
}

export default function ContactDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSended, setIsSended] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors },
  } = useForm<formInput>();

  const onSubmit: SubmitHandler<formInput> = async (data) => {
    // ustaw błędy per pole (dokładnie który input jest pusty)
    let hadEmpty = false;
    if (!data.name || !data.name.trim()) {
      setError("name", {
        type: "manual",
        message: "Pole imię nie może być puste",
      });
      hadEmpty = true;
    }
    if (!data.email || !data.email.trim()) {
      setError("email", {
        type: "manual",
        message: "Pole email nie może być puste",
      });
      hadEmpty = true;
    }
    if (!data.message || !data.message.trim()) {
      setError("message", {
        type: "manual",
        message: "Pole wiadomość nie może być puste",
      });
      hadEmpty = true;
    }
    setIsEmpty(hadEmpty);
    if (hadEmpty) return;

    // dalej: wysyłaj - użyj try/catch/finally żeby zawsze zresetować isSended
    setIsSended(true);
    try {
      const response = await emailjs.send(
        "service_wv83fim",
        "template_wb1zldu",
        {
          name: data.name,
          email: data.email,
          message: data.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );
      console.log("Succes!", response.status, response.text);
      toast.success("Pomyślnie wysłaliśmy twojego maila");

      setIsOpen(false);
      setIsEmpty(false);
      reset();
    } catch (error: any) {
      console.log("Failed...", error?.text ?? error);
      toast.error("Wystąpił błąd przy wysyłce");
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
      <DialogContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ContactDialogHeader />
          <ContactDialogInputs register={register} errors={errors} />
          <ContactButtons isSended={isSended} />
        </form>
      </DialogContent>
    </Dialog>
  );
}
