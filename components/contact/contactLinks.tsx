import { LinkedIn, Github, Mail, Discord } from "@/public/svg/logos";

import ContactLink from "./contactLink";

export default function ContactLinks() {
  return (
    <div className="w-full flex flex-row flex-wrap items-center my-5 p-4 gap-5 justify-center md:gap-8">
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
        href="mailto:kacperbartlomiejczak@proton.me"
        title="Mail"
        ariaLabel="Wyślij do mnie maila"
      >
        <Mail width="24" />
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
