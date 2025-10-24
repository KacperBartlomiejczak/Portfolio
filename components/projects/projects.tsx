import SectionHeder from "../ui/sectionHeader";
import ProjectCard from "./projectCard";

export default function Projects() {
  return (
    <section className="flex items-center p-4 justify-center" id="projects">
      <div className="container flex flex-col items-start gap-4">
        <SectionHeder>Projekty</SectionHeder>
        <div className="flex flex-row flex-wrap items-center justify-center w-full my-2 gap-4 md:my-4 lg:my-8 md:gap-6 lg:gap-8">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    </section>
  );
}
