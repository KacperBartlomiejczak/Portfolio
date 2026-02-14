"use client";

import SectionLayout from "../section/sectionLayout";
import ProjectCard from "./projectCard";
import { demoProjectCard } from "./demoProjectCard";
import { useState } from "react";
import ProjectDetails from "./projectDetails";
import { useTranslations } from "next-intl";

export default function Projects() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const t = useTranslations("Projects");

  const selectedProject = demoProjectCard.find((p) => p.id === selectedId);

  return (
    <SectionLayout id="projects" title={t("title")}>
      <div className="w-full relative min-h-[400px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center mb-8">
          {demoProjectCard.map((project) => (
            <ProjectCard
              key={project.id}
              {...project}
              onClick={() => setSelectedId(project.id)}
            />
          ))}
        </div>

        {selectedId && selectedProject && (
          <ProjectDetails
            {...selectedProject}
            onClose={() => setSelectedId(null)}
          />
        )}
      </div>
    </SectionLayout>
  );
}
