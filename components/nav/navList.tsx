import NavLink from "./navLink";
import { Moon, Sun } from "lucide-react";
interface NavListProps {
  isOpen: boolean;
  isDark: boolean;
  onClose: () => void;
  onToggleDark: () => void;
}
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "../ui/language-switcher";

export default function NavList({
  isOpen,
  onClose,
  onToggleDark,
  isDark,
}: NavListProps) {
  const t = useTranslations("Header.nav");

  const navLinks = [
    { titleKey: "projects", href: "/#projects" },
    { titleKey: "about", href: "/#aboutme" },
    { titleKey: "contact", href: "/#contact" },
  ];

  return (
    <ul
      id="mobile-menu"
      className={`fixed bg-bg-color dark:bg-background lg:bg-transparent text-black dark:text-secondary flex flex-col justify-center items-center inset-0 gap-6 z-10 transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full lg:translate-x-0"
      } lg:relative lg:flex-row lg:translate-x-0 lg:bg-transparent lg:dark:bg-transparent`}
    >
      {navLinks.map((link) => (
        <NavLink
          title={t(link.titleKey)}
          href={link.href}
          onOpen={onClose}
          key={link.href}
        />
      ))}
      <li>
        <LanguageSwitcher />
      </li>
      <li>
        <AnimatePresence mode="wait">
          <button
            onClick={onToggleDark}
            className="w-[35px] h-[35px] p-0 rounded-full bg-secondary-color flex items-center justify-center cursor-pointer hover:bg-secondary transition-colors duration-300 dark:bg-white dark:hover:bg-secondary"
            aria-pressed={isDark}
            aria-label="Zmiana motywu strony"
          >
            <motion.div
              key={isDark ? "dark" : "light"}
              initial={{ rotate: 0, opacity: 0 }}
              animate={{ rotate: -360, opacity: 1 }}
              exit={{ rotate: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {isDark ? (
                <Sun className="text-background" />
              ) : (
                <Moon className="text-bg-color" />
              )}
            </motion.div>
          </button>
        </AnimatePresence>
      </li>
    </ul>
  );
}
