import { LinkedIn } from "@/public/svg/logos";

import SectionLayout from "../ui/sectionLayout";
import Link from "next/link";

export default function Contact() {
  return (
    <SectionLayout title="Skontaktuj się ze mną" id="contact">
      <div className="w-full flex flex-row flex-wrap items-center">
        <Link
          className="border-2 border-primary-color w-full p-2 rounded-lg"
          href=""
        >
          <LinkedIn width="24" />
        </Link>
      </div>
    </SectionLayout>
  );
}
