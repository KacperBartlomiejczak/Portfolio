import { inter } from "@/app/ui/fonts";
import Image from "next/image";
import ProjectTech from "./projectTech";
import Button from "../ui/button";
import React from "react";

interface CardProps {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  websiteLink: string;
  repoLink: string;
  projectImg: string;
}

const ProjectCard = ({
  // Changed to a const
  title,
  subtitle,
  description,
  tags,
  websiteLink,
  repoLink,
  projectImg,
}: CardProps) => {
  return (
    <div className=" w-[300px] md:w-[350px]  bg-white shadow-md shadow-dark/20 rounded-lg hover:scale-110 focus:scale-110 transition-[scale] dark:bg-card">
      <div className="relative w-full h-46">
        <Image
          src={projectImg}
          alt={`Zrzut ekranu projektu ${title}`}
          fill
          className="rounded-t-lg object-cover"
          sizes="(max-width: 768px) 300px, 350px"
        />
      </div>
      <div className="p-2">
        <div>
          <h3 className={`${inter.className} font-bold md:text-lg`}>{title}</h3>
          <p
            className={`${inter.className} font-regular text-[0.7rem] text-[#9F9F9F] md:text-sm`}
          >
            {subtitle}
          </p>
        </div>
        <p className="text-[0.7rem] my-2 md:text-sm">{description}</p>
        <hr className="rounded-xl border my-4" />
        <ul className="w-full flex flex-wrap items-start gap-2 p-1 my-2">
          {tags.map((tag) => (
            <ProjectTech key={tag}>{tag}</ProjectTech>
          ))}
        </ul>
        <div className="flex flex-row items-end justify-start mt-4 gap-2 md:py-2">
          <Button href={websiteLink} variant="primary">
            Strona
          </Button>
          <Button href={repoLink} variant="secondary">
            Repozytorium
          </Button>
        </div>
      </div>
    </div>
  );
};

export default React.memo(ProjectCard); // Wrapped in React.memo
