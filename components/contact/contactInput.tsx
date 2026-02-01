import { Label } from "@/components/ui/label";
import { Input } from "../ui/input";
import { inter } from "@/app/ui/fonts";
import { Textarea } from "../ui/textarea";
import React from "react";
import { User, Mail, MessageSquare, Tag } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

type SharedAttrs = React.InputHTMLAttributes<HTMLInputElement> &
  React.TextareaHTMLAttributes<HTMLTextAreaElement>;

interface ContactInputProps extends SharedAttrs {
  htmlFor: string;
  title: string;
  type?: string;
  textArea?: boolean;
  error?: string;
}

const getIcon = (htmlFor: string) => {
  switch (htmlFor) {
    case "name":
      return <User className="w-4 h-4" />;
    case "email":
      return <Mail className="w-4 h-4" />;
    case "subject":
      return <Tag className="w-4 h-4" />;
    case "message":
      return <MessageSquare className="w-4 h-4" />;
    default:
      return null;
  }
};

export default function ContactInput({
  title,
  htmlFor,
  textArea,
  type = "text",
  error,
  ...props
}: ContactInputProps) {
  const t = useTranslations("Contact.form.placeholders");
  const icon = getIcon(htmlFor);
  const placeholder = t(htmlFor as any);

  let content = (
    <div className="group">
      <Label
        htmlFor={htmlFor}
        className={`flex items-center gap-2 text-sm font-medium text-gray-900 dark:text-white mb-2 transition-colors group-focus-within:text-primary-color dark:group-focus-within:text-brand ${inter.className}`}
      >
        {icon && (
          <span className="text-primary-color dark:text-brand transition-colors">
            {icon}
          </span>
        )}
        {title}
      </Label>
      <motion.div
        whileFocus={{ scale: 1.01 }}
        transition={{ type: "spring" as const, stiffness: 300, damping: 20 }}
      >
        <Input
          type={type}
          id={htmlFor}
          placeholder={placeholder}
          className={`text-sm ${inter.className} antialiased bg-white dark:bg-card/30 border-gray-300 dark:border-white/10 focus:border-primary-color dark:focus:border-brand focus:ring-4 focus:ring-primary-color/10 dark:focus:ring-brand/10 focus:shadow-lg transition-all text-gray-900 dark:text-white`}
          {...props}
          required
        />
      </motion.div>
      {error ? (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-sm text-red-600 dark:text-red-400 mt-1"
          role="alert"
        >
          {error}
        </motion.p>
      ) : null}
    </div>
  );

  if (textArea) {
    content = (
      <div className="group">
        <Label
          htmlFor={htmlFor}
          className={`flex items-center gap-2 text-sm font-medium text-gray-900 dark:text-white mb-2 transition-colors group-focus-within:text-primary-color dark:group-focus-within:text-brand ${inter.className}`}
        >
          {icon && (
            <span className="text-primary-color dark:text-brand transition-colors">
              {icon}
            </span>
          )}
          {title}
        </Label>
        <motion.div
          whileFocus={{ scale: 1.01 }}
          transition={{ type: "spring" as const, stiffness: 300, damping: 20 }}
        >
          <Textarea
            id={htmlFor}
            placeholder={placeholder}
            className={`text-sm ${inter.className} antialiased min-h-[120px] bg-white dark:bg-card/30 border-gray-300 dark:border-white/10 focus:border-primary-color dark:focus:border-brand focus:ring-4 focus:ring-primary-color/10 dark:focus:ring-brand/10 focus:shadow-lg transition-all resize-none text-gray-900 dark:text-white`}
            {...props}
            required
          />
        </motion.div>
        {error ? (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm text-red-600 dark:text-red-400 mt-1"
            role="alert"
          >
            {error}
          </motion.p>
        ) : null}
      </div>
    );
  }

  return <div className="flex flex-col">{content}</div>;
}
