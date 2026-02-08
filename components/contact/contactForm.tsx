"use client";

import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { inter } from "@/app/ui/fonts";
import ContactInput from "./contactInput";
import ContactButtons from "./contactButtons";
import toast from "react-hot-toast";
import { useTranslations } from "next-intl";

interface FormInput {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactForm() {
  const [isSended, setIsSended] = useState(false);
  const t = useTranslations("Contact.form");
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors },
  } = useForm<FormInput>();

  const onSubmit: SubmitHandler<FormInput> = async (data) => {
    // Validation
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
    if (!data.subject || !data.subject.trim()) {
      setError("subject", {
        type: "manual",
        message: t("validation.subject"),
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
          subject: data.subject,
          message: data.message,
        },
        publicKey,
      );
      console.log("Success!", response.status, response.text);
      toast.success(t("success"));
      reset();
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : String(error);
      console.error("Failed to send email:", errorMessage);
      toast.error(t("error"));
    } finally {
      setIsSended(false);
    }
  };

  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <motion.div
      variants={formVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="w-full"
    >
      <div className="bg-white dark:bg-card/50 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-2xl p-6 md:p-8 shadow-xl">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Name and Email in a row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ContactInput
              title={t("name")}
              htmlFor="name"
              {...register("name")}
              error={errors?.name?.message as string | undefined}
            />
            <ContactInput
              title={t("email")}
              htmlFor="email"
              type="email"
              {...register("email")}
              error={errors?.email?.message as string | undefined}
            />
          </div>

          {/* Subject */}
          <ContactInput
            title={t("subject")}
            htmlFor="subject"
            {...register("subject")}
            error={errors?.subject?.message as string | undefined}
          />

          {/* Message */}
          <ContactInput
            title={t("message")}
            htmlFor="message"
            textArea
            {...register("message")}
            error={errors?.message?.message as string | undefined}
          />

          {/* Submit Button */}
          <div className="pt-2">
            <ContactButtons isSended={isSended} />
          </div>
        </form>
      </div>
    </motion.div>
  );
}
