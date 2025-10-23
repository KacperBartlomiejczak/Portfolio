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
      } inline-block lg:hidden`}
      type="button"
      onClick={onOpen}
      aria-expanded={isOpen}
      aria-controls="mobile-menu"
    >
      <span className="hamburger-box">
        <span className="hamburger-inner"></span>
      </span>
    </button>
  );
}
