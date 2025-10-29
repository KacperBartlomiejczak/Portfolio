"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";

import { useState } from "react";

import { SubmitHandler, useForm } from "react-hook-form";
import ContactDialogInput from "./contactDialogInputs";
import ContactButtons from "./contactButtons";
import ContactDialogTrigger from "./contactDialogTrigger";
import ContactDialogHeader from "./contactDialogHeader";
import emailjs from "@emailjs/browser";
import toast, { Toast } from "react-hot-toast";

interface formInput {
  name: string;
  email: string;
  message: string;
}

export default function ContactDialog() {
  const [isOpen, setIsOpen] = useState(false);

  const { register, handleSubmit, reset } = useForm<formInput>();

  const onSubmit: SubmitHandler<formInput> = (data) => {
    emailjs
      .send("service_wv83fim", "template_wb1zldu", data, "WOZX1rmbs_We_U3Bv")
      .then(
        (response) => {
          console.log("Succes!", response.status, response.text);
          toast.success("Pomyślnie wysłaliśmy twojego maila");

          setIsOpen(false);
          reset();
        },
        (error) => {
          console.log("Failed...", error.text);
        }
      );
  };
  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (!isOpen) {
      reset();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <ContactDialogTrigger />
      <DialogContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ContactDialogHeader />
          <ContactDialogInput register={register} />
          <ContactButtons />
        </form>
      </DialogContent>
    </Dialog>
  );
}
