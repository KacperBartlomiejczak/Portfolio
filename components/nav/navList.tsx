import NavLink from "./navLink";

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
      <NavLink title="Projekty" href="/#projects" onOpen={onClose} />
      <NavLink title="O mnie" href="/#aboutme" onOpen={onClose} />
      <NavLink title="Kontakt" href="/#contact" onOpen={onClose} />
      <button
        onClick={onToggleDark}
        className="w-[50px] h-[50px] p-0 rounded-full bg-secondary-color flex items-center justify-center cursor-pointer hover:bg-secondary transition-colors duration-300 dark:bg-white dark:hover:bg-secondary"
        aria-pressed={isDark}
        aria-label="Zmiana motywu strony"
      ></button>
    </ul>
  );
}
