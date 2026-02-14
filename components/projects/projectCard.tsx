import { inter } from "@/app/ui/fonts";
import Image from "next/image";
import React, { useCallback } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";

interface CardProps {
  id: number;
  translationKey: string;
  tags: string[];
  websiteLink: string;
  repoLink: string;
  projectImg: string;
}

const ProjectCard = ({
  id,
  translationKey,
  tags,
  projectImg,
  onClick,
}: CardProps & { onClick: () => void }) => {
  const t = useTranslations("Projects");
  const tItem = useTranslations(`Projects.items.${translationKey}`);

  const title = tItem("title");
  const subtitle = tItem("subtitle");

  // Keyboard handler for accessibility
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        onClick();
      }
    },
    [onClick],
  );

  return (
    <motion.div
      layoutId={`card-${id}`}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={t("aria.open_details", { title })}
      className="group relative w-full rounded-2xl cursor-pointer 
                 h-[350px] sm:h-[380px] md:h-[420px]
                 focus-visible:outline-none focus-visible:ring-2 
                 focus-visible:ring-primary-color focus-visible:ring-offset-2 
                 focus-visible:ring-offset-zinc-50 dark:focus-visible:ring-offset-gray-900"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 25,
      }}
    >
      {/* Card Container - Simplified */}
      <div className="relative h-full flex flex-col bg-white dark:bg-gray-900/60 
                      border border-gray-200 dark:border-white/10 
                      rounded-2xl overflow-hidden 
                      shadow-lg hover:shadow-2xl 
                      dark:shadow-black/40 dark:hover:shadow-black/60
                      transition-all duration-300 
                      group-hover:border-primary-color/40">

        {/* Image Section */}
        <motion.div
          layoutId={`image-${id}`}
          className="relative w-full h-48 sm:h-52 shrink-0"
        >
          <Image
            src={projectImg}
            alt={`Projekt ${title}`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            loading="lazy"
          />
          {/* Simplified gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        </motion.div>

        {/* Content Section - Clean & Minimal */}
        <div className="relative p-5 sm:p-6 flex flex-col gap-3 flex-2 md:flex-1">
          {/* Title & Subtitle */}
          <div className="flex flex-col gap-1">
            <motion.h3
              layoutId={`title-${id}`}
              className={`${inter.className} text-xl sm:text-2xl font-bold 
                         text-gray-900 dark:text-white tracking-tight`}
            >
              {title}
            </motion.h3>

            <motion.p
              layoutId={`subtitle-${id}`}
              className="text-primary-color font-medium text-sm sm:text-base"
            >
              {subtitle}
            </motion.p>
          </div>

          {/* Tags - Max 3, minimal style */}
          <div className="flex flex-wrap gap-2 mt-auto">
            {tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium 
                           text-gray-700 dark:text-gray-300
                           bg-gray-100 dark:bg-white/10 
                           px-3 py-1 rounded-full
                           border border-gray-200 dark:border-white/10
                           transition-colors duration-200
                           group-hover:bg-gray-200 dark:group-hover:bg-white/15
                           group-hover:border-primary-color/30"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Hover CTA - Minimal */}
          <div className="flex items-center gap-1 text-xs font-medium
                          text-gray-500 dark:text-gray-400
                          opacity-0 group-hover:opacity-100 
                          transition-opacity duration-300">
            <span>{t("buttons.details")}</span>
            <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default React.memo(ProjectCard);
