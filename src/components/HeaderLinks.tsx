import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdLocalPhone } from "react-icons/md";

import HeaderLink from "./HeaderLink";

export default function HeaderLinks() {
  const iconStyles =
    "text-white text-4xl hover:text-primary focus:text-primary transition-colors duration-300 md:mr-2 group-focus:text-primary group-hover:text-primary";

  return (
    <div className="flex justify-center gap-4 mt-2 mb-3">
      <HeaderLink
        link="https://github.com/KacperBartlomiejczak?tab=repositories"
        title="Projects"
        isButton={false}
      >
        <FaGithub className={iconStyles} />
      </HeaderLink>
      <HeaderLink
        link="https://www.linkedin.com/in/kacper-bart%C5%82omiejczak-1315802b1/"
        title="LinkedIn"
        isButton={false}
      >
        <FaLinkedin className={iconStyles} />
      </HeaderLink>
      <HeaderLink
        link="https://discord.gg/5eVDrE8NFp"
        title="Contact me"
        isButton={true}
      >
        <MdLocalPhone className={iconStyles} />
      </HeaderLink>
    </div>
  );
}
