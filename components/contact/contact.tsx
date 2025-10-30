import SectionLayout from "../ui/sectionLayout";

import ContactLinks from "./contactLinks";
import { inter } from "@/app/ui/fonts";
import dynamic from 'next/dynamic';

const ContactDialog = dynamic(() => import('./contactDialog'));
import ContactHr from "./contactHr";

export default function Contact() {
  return (
    <SectionLayout title="Skontaktuj się ze mną" id="contact" center>
      <ContactLinks />
      <div className="flex flex-row items-center justify-center gap-6">
        <ContactHr />
        <p className={`${inter.className} text-base md:text-lg lg:text-xl`}>
          lub
        </p>
        <ContactHr />
      </div>

      <ContactDialog />
    </SectionLayout>
  );
}
