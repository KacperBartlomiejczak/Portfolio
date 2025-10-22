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
      className={`hamburger hamburger--spin relative z-10 ${
        isOpen && "is-active"
      }`}
      type="button"
      onClick={onOpen}
    >
      <span className="hamburger-box">
        <span className="hamburger-inner"></span>
      </span>
    </button>
  );
}
