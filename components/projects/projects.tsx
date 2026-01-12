"use client";

import SectionLayout from "../section/sectionLayout";
import ProjectCard from "./projectCard";
import { demoProjectCard } from "./demoProjectCard";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import ProjectDetails from "./projectDetails";

export default function Projects() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const selectedProject = demoProjectCard.find((p) => p.id === selectedId);

  return (
    <SectionLayout id="projects" title="Projekty">
      <div className="w-full relative min-h-[500px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center mb-12">
          {demoProjectCard.map((project) => (
            <ProjectCard
              key={project.id}
              {...project}
              onClick={() => setSelectedId(project.id)}
            />
          ))}
        </div>

        <AnimatePresence>
          {selectedId && selectedProject && (
            <ProjectDetails
              {...selectedProject}
              onClose={() => setSelectedId(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </SectionLayout>
  );
}
