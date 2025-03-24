import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdLocalPhone } from "react-icons/md";

import HeaderLink from "./HeaderLink";

interface HeaderLinksProps {
  onOpen: () => void;
}

export default function HeaderLinks({ onOpen }: HeaderLinksProps) {
  const iconStyles =
    "text-white text-4xl hover:text-primary focus:text-primary transition-colors duration-300 md:mr-2 group-focus:text-primary group-hover:text-primary";

  return (
    <div className="ml-5 flex justify-center items-center gap-8 mt-3 md:mt-2 md:mb-3">
      <HeaderLink
        link="https://github.com/KacperBartlomiejczak?tab=repositories"
        title="Projects"
      >
        <FaGithub className={iconStyles} />
      </HeaderLink>
      <HeaderLink
        link="https://www.linkedin.com/in/kacper-bart%C5%82omiejczak-1315802b1/"
        title="LinkedIn"
      >
        <FaLinkedin className={iconStyles} />
      </HeaderLink>
      <HeaderLink clickProp={onOpen} title="Contact me" isButton={true}>
        <MdLocalPhone className={iconStyles} />
      </HeaderLink>
    </div>
  );
}
