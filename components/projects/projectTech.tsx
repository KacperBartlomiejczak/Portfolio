interface ProjectTechProps {
  children?: React.ReactNode;
}
import { inter } from "@/app/ui/fonts";

export default function ProjectTech({ children }: ProjectTechProps) {
  return (
    <li className="py-1 px-3 bg-secondary-bg rounded-full">
      <p
        className={`${inter.className} text-[0.7rem] font-bold text-primary-color`}
      >
        {children}
      </p>
    </li>
  );
}
