interface BasicPageProps {
  link: string;
  title: string;
  isButton?: boolean;
  clickProp?: () => void;
  children: React.ReactNode | React.ReactNode[];
}

export default function HeaderLink({
  link,
  children,
  title,
  isButton = false,
  clickProp,
}: BasicPageProps) {
  if (isButton) {
    return (
      <button
        onClick={clickProp}
        className="group flex flex-col justify-center items-center text-white p-3 md:flex-row 
      hover:text-primary  focus:text-primary transition-colors duration-300 link"
      >
        <span className="flex justify-center items-center flex-col md:flex-row">
          {children} <p className="text-white">{title}</p>
        </span>
      </button>
    );
  }

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col justify-center items-center text-white p-3 md:flex-row 
  hover:text-primary  focus:text-primary transition-colors duration-300 link"
    >
      <span className="flex justify-center items-center flex-col md:flex-row">
        {children} <p>{title}</p>
      </span>
    </a>
  );
}
