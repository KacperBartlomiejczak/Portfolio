import {
  LinkedIn,
  Github,
  Mail,
  Discord,
  ArrowTopRight,
} from "@/public/svg/logos";

import ContactLink from "./contactLink";

export default function ContactLinks() {
  return (
    <div className="w-full flex flex-row flex-wrap items-center my-5 p-4 gap-5 justify-center md:gap-8">
      <a
        href="mailto:kacperbartlomiejczak@proton.me"
        aria-label="Wyślij do mnia maila"
        className="relative border-2 border-primary-color text-primary-color w-full p-2 rounded-lg flex flex-row justify-between items-center cursor-pointer md:w-[40%] overflow-hidden before:content-[''] before:absolute before:inset-0 before:bg-primary-color before:scale-x-0 before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100 hover:before:origin-right hover:text-white before:z-0 z-10 transition-colors delay-250 dark:border-brand dark:before:bg-brand dark:text-brand dark:hover:text-white"
        target="_blank"
      >
        <div className="h-full flex flex-row items-center gap-4 z-10">
          <Mail width="24" />
          <p>Mail</p>
        </div>
        <ArrowTopRight
          width="24"
          className="fill-current stroke-current z-10"
        />
      </a>
      <ContactLink
        href="https://www.linkedin.com/in/kacper-bartlomiejczak-b12a19385/"
        title="LinkedIn"
        ariaLabel="Odwiedź mnie na LinkedIn"
      >
        <LinkedIn width="24" />
      </ContactLink>
      <ContactLink
        href="https://github.com/KacperBartlomiejczak"
        title="Github"
        ariaLabel="Odwiedź mój profil na Githubie"
      >
        <Github width="24" />
      </ContactLink>

      <ContactLink
        href="https://discord.gg/ktx2zJ735w"
        title="Discord"
        ariaLabel="Odwiedź mój serwer discord"
      >
        <Discord width="24" />
      </ContactLink>
    </div>
  );
}
