import classes from "./button.module.css";

import { inter } from "@/app/ui/fonts";
import Link, { type LinkProps } from "next/link";
import type { ReactNode } from "react";

interface ButtonProps extends Omit<LinkProps, "href"> {
  children?: ReactNode;
  href?: string;
  variant?: string;
  target?: string;
  rel?: string;
}

export default function Button({
  children,
  href = "",
  variant,
  target,
  rel,
  ...props
}: ButtonProps) {
  let classNames = `flex bg-cta px-4 py-2 rounded-xl font-bold text-white cursor-pointer ${inter.className} antialiased hover:bg-[#2b8883] transition-colors focus:bg-[#2b8883]  md:px-6 md:py-3 ${classes.buttonAnimation} text-lg lg:px-8 lg:py-3 xl:px-10 xl:text-xl dark:bg-accent dark:hover:bg-[#2cb68d]`;

  if (variant === "primary") {
    classNames = `px-3 py-1 bg-primary-color rounded-xl border-2 border-transparent text-white ${inter.className} font-semibold ${classes.buttonAnimation} dark:bg-brand`;
  }
  if (variant === "secondary") {
    classNames = `px-2 py-1 bg-white rounded-xl text-primary-color ${inter.className} font-semibold border-2 border-primary-color hover:bg-primary-color hover:text-white transition-colors dark:bg-transparent dark:hover:bg-brand dark:border-brand`;
  }

  return (
    <Link
      href={href}
      className={classNames}
      target={target}
      rel={rel}
      {...props}
    >
      {children}
    </Link>
  );
}
