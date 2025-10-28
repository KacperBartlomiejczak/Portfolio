import classes from "./button.module.css";

import { inter } from "@/app/ui/fonts";
import Link from "next/link";
import type { ReactNode } from "react";

interface ButtonProps {
  children?: ReactNode;
  href?: string;
  variant?: string;
}

export default function Button({ children, href = "", variant }: ButtonProps) {
  let classNames = `flex bg-cta px-4 py-2 rounded-xl font-bold text-white cursor-pointer ${inter.className} antialiased hover:bg-[#2b8883] transition-colors focus:bg-[#2b8883]  md:px-6 md:py-3 ${classes.buttonAnimation} text-lg lg:px-8 lg:py-3 xl:px-10 xl:text-xl`;

  if (variant === "primary") {
    classNames = `px-3 py-1 bg-primary-color rounded-xl border-2 border-transparent text-white ${inter.className} font-semibold ${classes.buttonAnimation}`;
  }
  if (variant === "secondary") {
    classNames = `px-2 py-1 bg-white rounded-xl text-primary-color ${inter.className} font-semibold border-2 border-primary-color hover:bg-primary-color hover:text-white transition-colors `;
  }

  return (
    <Link href={href} className={classNames}>
      {children}
    </Link>
  );
}
