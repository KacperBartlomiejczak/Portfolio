import SectionLayout from "../ui/sectionLayout";
import ProjectCard from "./projectCard";
import { demoProjectCard } from "./demoProjectCard";

export default function Projects() {
  return (
    <SectionLayout id="projects" title="Projekty">
      <div className="flex flex-row flex-wrap justify-center w-full my-4 gap-6 md:my-6 lg:my-8 md:gap-8 lg:gap-12">
        {demoProjectCard.map((project) => {
          return <ProjectCard key={project.id} {...project} />;
        })}
      </div>
    </SectionLayout>
  );
}
