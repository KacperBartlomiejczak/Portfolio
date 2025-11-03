import "./hamburger.css";

export default function Hamburger({
  isOpen,
  onOpen,
}: {
  isOpen: boolean;
  onOpen: () => void;
}) {
  return (
    <button
      className={`hamburger hamburger--spin relative z-20 ${
        isOpen && "is-active"
      } inline-block lg:hidden dark:bg-white`}
      type="button"
      onClick={onOpen}
      aria-expanded={isOpen}
      aria-controls="mobile-menu"
      aria-label={isOpen ? "Zamknij menu" : "Otwórz menu"}
    >
      <span className="hamburger-box">
        <span className="hamburger-inner bg-black before:bg-black after:bg-black dark:bg-white dark:before:bg-white dark:after:bg-white"></span>
      </span>
    </button>
  );
}
