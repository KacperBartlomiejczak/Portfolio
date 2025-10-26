import SectionLayout from "../ui/sectionLayout";
import AboutMeHeading from "./aboutmeHeading";
import AboutMeImg from "./aboutmeImg";

import AboutMeTechnology from "./aboutmeTechnology";

export default function AboutMe() {
  return (
    <SectionLayout id="aboutme" title="O mnie">
      <div className="w-full flex flex-col items-center justify-center my-8 md:gap-10 lg:flex-row lg:gap-25 ">
        <AboutMeImg />
        <AboutMeHeading />
      </div>
      <AboutMeTechnology />
    </SectionLayout>
  );
}
