import { Link } from "@/i18n/routing";
import classes from "./navlink.module.css";
import { firaCode } from "@/app/ui/fonts";

interface NavLinkProps {
  title: string;
  href: string;
  onOpen: () => void;
}

export default function NavLink({ title, href, onOpen }: NavLinkProps) {
  return (
    <li>
      <Link
        href={href}
        onClick={onOpen}
        className={`${firaCode.className} hover:text-primary-color focus:text-primary-color text-lg ${classes.navLink} md:text-xl`}
        prefetch
      >
        {title}
      </Link>
    </li>
  );
}
