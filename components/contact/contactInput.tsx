import { Label } from "@/components/ui/label";
import { Input } from "../ui/input";
import { inter } from "@/app/ui/fonts";
import { Textarea } from "../ui/textarea";

interface ContactInputProps {
  htmlFor: string;
  title: string;
  type?: string;
  textArea?: boolean;
}

export default function ContactInput({
  title,
  htmlFor,
  textArea,
  type = "text",
  ...props
}: ContactInputProps) {
  let content = (
    <>
      <Label htmlFor={htmlFor} className={`${inter.className}`}>
        {title}
      </Label>
      <Input
        type="text"
        id={htmlFor}
        placeholder={htmlFor}
        className={`text-sm ${inter.className} antialiased`}
        {...props}
        required
      />
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
      </>
    );
  }

  return <div className="flex flex-col gap-3">{content}</div>;
}
