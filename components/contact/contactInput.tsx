import { Label } from "@/components/ui/label";
import { Input } from "../ui/input";
import { inter } from "@/app/ui/fonts";
import { Textarea } from "../ui/textarea";
import React from "react";

type SharedAttrs = React.InputHTMLAttributes<HTMLInputElement> &
  React.TextareaHTMLAttributes<HTMLTextAreaElement>;

interface ContactInputProps extends SharedAttrs {
  htmlFor: string;
  title: string;
  type?: string;
  textArea?: boolean;
  error?: string;
}

export default function ContactInput({
  title,
  htmlFor,
  textArea,
  type = "text",
  error,
  ...props
}: ContactInputProps) {
  let content = (
    <>
      <Label htmlFor={htmlFor} className={`${inter.className}`}>
        {title}
      </Label>
      <Input
        type={type}
        id={htmlFor}
        placeholder={htmlFor}
        className={`text-sm ${inter.className} antialiased`}
        {...props}
        required
      />
      {error ? (
        <p className="text-sm text-red-600 mt-1" role="alert">
          {error}
        </p>
      ) : null}
    </>
  );

  if (textArea) {
    content = (
      <>
        <Label htmlFor={htmlFor} className={`${inter.className}`}>
          {title}
        </Label>
        <Textarea
          id={htmlFor}
          placeholder="napisz wiadomość tutaj"
          className={`text-sm ${inter.className} antialiased`}
          {...props}
          required
        />
        {error ? (
          <p className="text-sm text-red-600 mt-1" role="alert">
            {error}
          </p>
        ) : null}
      </>
    );
  }

  return <div className="flex flex-col gap-3">{content}</div>;
}
