import SectionHeder from "../ui/sectionHeader";
import ProjectCard from "./projectCard";

export default function Projects() {
  return (
    <section className="flex items-center p-4 justify-center" id="projects">
      <div className="container flex flex-col items-start gap-4">
        <SectionHeder>Projekty</SectionHeder>
        <div className="flex flex-col items-center justifty-center w-full my-2">
          <ProjectCard />
        </div>
      </div>
    </section>
  );
}
