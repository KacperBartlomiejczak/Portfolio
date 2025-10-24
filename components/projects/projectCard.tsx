import { inter } from "@/app/ui/fonts";
import Image from "next/image";
import Link from "next/link";
import classes from "@/components/ui/button.module.css";
import ProjectTech from "./projectTech";

export default function ProjectCard() {
  return (
    <div className=" w-[300px]  bg-white shadow-md shadow-black/20 rounded-lg">
      <div className="relative w-full h-46">
        <Image
          src="/project1.png"
          alt="project 1"
          fill
          className="rounded-t-lg object-cover"
        />
      </div>
      <div className="p-2">
        <div>
          <h3 className={`${inter.className} font-bold`}>To do manager</h3>
          <p
            className={`${inter.className} font-regular text-[0.7rem] text-[#9F9F9F]`}
          >
            Zarzadzanie codziennymi zadaniami
          </p>
        </div>
        <p className="text-[0.7rem] my-2">
          Przekształć swoje "muszę" w "zrobione". Proste narzędzie do realizacji
          codziennych celów.
        </p>
        <hr className="rounded-xl border my-4" />
        <ul className="flex flex-wrap items-start gap-2 p-1 my-2">
          <ProjectTech>React</ProjectTech>
          <ProjectTech>Tailwind</ProjectTech>
          <ProjectTech>Typescript</ProjectTech>
          <ProjectTech>LocalStorage</ProjectTech>
        </ul>
        <div className="flex flex-row items-center justify-start mt-4 gap-2">
          <Link
            href="https://kacperbartlomiejczak.github.io/rn-task-manager/"
            target="_blank"
            className={`px-3 py-1 bg-primary-color rounded-xl border-2 border-transparent text-white ${inter.className} font-semibold ${classes.buttonAnimation}`}
          >
            Strona
          </Link>
          <Link
            href="https://kacperbartlomiejczak.github.io/rn-task-manager/"
            target="_blank"
            className={`px-2 py-1 bg-white rounded-xl text-primary-color ${inter.className} font-semibold border-2 border-primary-color hover:bg-primary-color hover:text-white transition-colors `}
          >
            Repozytorium
          </Link>
        </div>
      </div>
    </div>
  );
}
