import Link from "next/link";
import { ArrowTopRight } from "@/public/svg/logos";

interface ContactLinkProps {
  href: string;
  children: React.ReactNode;
  title: string;
  ariaLabel: string;
}

export default function ContactLink({
  href,
  children,
  title,
  ariaLabel,
}: ContactLinkProps) {
  return (
    <Link
      className="relative border-2 border-primary-color text-primary-color w-full p-2 rounded-lg flex flex-row justify-between items-center cursor-pointer md:w-[40%] overflow-hidden before:content-[''] before:absolute before:inset-0 before:bg-primary-color before:scale-x-0 before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100 hover:before:origin-right hover:text-white before:z-0 z-10 transition-colors delay-250 dark:border-brand dark:before:bg-brand dark:text-brand dark:hover:text-white"
      href={href}
      target="_blank"
      aria-label={ariaLabel}
    >
      <div className="h-full flex flex-row items-center gap-4 z-10">
        {children}
        <p>{title}</p>
      </div>
      <ArrowTopRight width="24" className="fill-current stroke-current z-10" />
    </Link>
  );
}
