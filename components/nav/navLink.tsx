import Link from "next/link";
import classes from "./navlink.module.css";

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
        className={`hover:text-primary-color focus:text-primary-color text-lg ${classes.navLink} md:text-xl`}
      >
        {title}
      </Link>
    </li>
  );
}
