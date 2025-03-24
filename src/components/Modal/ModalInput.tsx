import { forwardRef } from "react";

interface ModalInputProps {
  text: string;
  isTextArea?: boolean;
  type?: string;
  placeholder?: string;
  name: string;
}

const ModalInput = forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  ModalInputProps
>(function ModalInput(
  { text, isTextArea = false, type, placeholder, name }: ModalInputProps,
  ref
) {
  const classes =
    "w-full p-2 md:p-3 border-black border-2 rounded-lg mb-3 md:mb-2 outline-none focus:border-[#CF8561] transition-all duration-300";

  let content = (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className={classes}
      ref={ref as React.Ref<HTMLInputElement>}
    />
  );

  if (isTextArea) {
    content = (
      <textarea
        name={name}
        className={classes}
        defaultValue={placeholder}
        ref={ref as React.Ref<HTMLTextAreaElement>}
      ></textarea>
    );
  }

  return (
    <p className="flex flex-col gap-1">
      <label className="text-[2B2B2D] mb-1">
        {text}
      </label>
      {content}
    </p>
  );
});

export default ModalInput;
