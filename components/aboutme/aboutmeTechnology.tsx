"use client";

import { motion } from "framer-motion";
import {
  ReactLogo,
  TailwindLogo,
  ScssLogo,
  NextjsLogo,
  TypescriptLogo,
} from "@/public/svg/logos";
import { inter } from "@/app/ui/fonts";
import { useState } from "react";
import { useMobile } from "@/context/mobileContext";

const TECHNOLOGIES = [
  { id: 1, name: "React", Component: ReactLogo },
  { id: 2, name: "Tailwind CSS", Component: TailwindLogo },
  { id: 3, name: "Next.js", Component: NextjsLogo },
  { id: 4, name: "SCSS", Component: ScssLogo },
  { id: 5, name: "TypeScript", Component: TypescriptLogo },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function AboutMeTechnology() {
  const isMobile = useMobile();
  const [activeId, setActiveId] = useState<number | null>(null);

  const handleMobileClick = (id: number) => {
    if (!isMobile) return;
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className="w-full flex flex-col gap-6 items-center justify-center p-4 my-4">
      <h3 className={`${inter.className} font-bold text-base md:text-lg`}>
        Technologie
      </h3>
      {/* kolor bazowy = primary, a wszystkie svg użyją go jako fill/stroke */}
      <motion.ul
        className="flex flex-row gap-6 flex-wrap justify-center items-center text-primary-color dark:text-brand"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        {TECHNOLOGIES.map(({ id, name, Component }, index) => (
          <motion.li
            key={id}
            variants={itemVariants}
            whileHover={isMobile ? undefined : { scale: 1.1, rotate: 5, y: -15 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleMobileClick(id)}
            className="relative group cursor-pointer"
          >
            <div className="p-2 bg-white/5 rounded-2xl backdrop-blur-sm border border-transparent hover:border-primary-color/20 dark:hover:border-brand/20 transition-colors">
              <Component width="46" />
            </div>
            <span
              className={`absolute -bottom-10 left-1/2 -translate-x-1/2 transition-opacity text-xs md:text-sm font-medium whitespace-nowrap bg-gray-900 text-white px-2 py-1 rounded shadow-lg dark:bg-gray-100 dark:text-gray-900 pointer-events-none z-10 ${isMobile && activeId === id
                ? "opacity-100"
                : "opacity-0 group-hover:opacity-100"
                }`}
            >
              {name}
            </span>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}
