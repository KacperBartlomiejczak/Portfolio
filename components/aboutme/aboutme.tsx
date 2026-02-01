import SectionLayout from "../section/sectionLayout";
import AboutMeHeading from "./aboutmeHeading";
import AboutMeImg from "./aboutmeImg";
import { useTranslations } from "next-intl";

import AboutMeTechnology from "./aboutmeTechnology";

export default function AboutMe() {
  const t = useTranslations("About");
  return (
    <SectionLayout id="aboutme" title={t("title")}>
      <div className="w-full flex flex-col items-center justify-center my-8 md:gap-10 lg:flex-row lg:gap-25 ">
        <AboutMeImg />
        <AboutMeHeading />
      </div>
      <AboutMeTechnology />
    </SectionLayout>
  );
}
