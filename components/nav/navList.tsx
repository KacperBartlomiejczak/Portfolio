import NavLink from "./navLink";
import { navData } from "./listInfo";
import { Moon, Sun } from "lucide-react";
interface NavListProps {
  isOpen: boolean;
  isDark: boolean;
  onClose: () => void;
  onToggleDark: () => void;
}

export default function NavList({
  isOpen,
  onClose,
  onToggleDark,
  isDark,
}: NavListProps) {
  return (
    <ul
      id="mobile-menu"
      className={`fixed bg-white dark:bg-background lg:bg-transparent text-black dark:text-secondary flex flex-col justify-center items-center inset-0 gap-6 z-10 transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full lg:translate-x-0"
      } lg:relative lg:flex-row lg:translate-x-0`}
    >
      {navData.map((link) => (
        <NavLink
          title={link.title}
          href={link.href}
          onOpen={onClose}
          key={link.href}
        />
      ))}
      <button
        onClick={onToggleDark}
        className="w-[35px] h-[35px] p-0 rounded-full bg-secondary-color flex items-center justify-center cursor-pointer hover:bg-secondary transition-colors duration-300 dark:bg-white dark:hover:bg-secondary"
        aria-pressed={isDark}
        aria-label="Zmiana motywu strony"
      >
        {isDark ? (
          <Sun className="text-background" />
        ) : (
          <Moon className="text-bg-color" />
        )}
      </button>
    </ul>
  );
}
