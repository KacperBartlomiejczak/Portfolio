import { inter } from "@/app/ui/fonts";
import Image from "next/image";
import React, { useCallback } from "react";
import { useTranslations } from "next-intl";
import { useMobile } from "@/context/mobileContext";

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

  const isMobile = useMobile();

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
    <div
      onClick={onClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={t("aria.open_details", { title })}
      className="group relative w-full rounded-xl cursor-pointer 
                 h-[300px] sm:h-[300px] md:h-[320px]
                 focus-visible:outline-none focus-visible:ring-2 
                 focus-visible:ring-primary-color focus-visible:ring-offset-2 
                 focus-visible:ring-offset-zinc-50 dark:focus-visible:ring-offset-gray-900
                 flex flex-col bg-white dark:bg-gray-900/60 
                 border border-gray-200/60 dark:border-white/5 
                 overflow-hidden 
                 shadow-sm hover:shadow-md 
                 dark:shadow-black/20 dark:hover:shadow-black/40
                 hover:border-primary-color/20
                 transition-all duration-200
                 active:scale-[0.98]"
    >
      {/* Image Section */}
      <div className="relative w-full h-44 sm:h-40 md:h-44 shrink-0">
        <Image
          src={projectImg}
          alt={`Projekt ${title}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          loading="lazy"
        />
      </div>

      {/* Content Section */}
      <div className="relative p-4 sm:p-5 flex flex-col gap-2 flex-1">
        {/* Title & Subtitle */}
        <div className="flex flex-col gap-1">
          <h3
            className={`${inter.className} text-xl sm:text-xl md:text-2xl font-bold 
                       text-gray-900 dark:text-white tracking-tight line-clamp-1`}
          >
            {title}
          </h3>

          <p className="text-primary-color font-medium text-sm sm:text-sm line-clamp-1">
            {subtitle}
          </p>
        </div>

        {/* Tags - Max 3 on mobile, 4 on desktop */}
        <div className="flex flex-wrap gap-1.5 mt-auto mb-2">
          {tags.slice(0, isMobile ? 3 : 4).map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium 
                         text-gray-700 dark:text-gray-300
                         bg-gray-100 dark:bg-white/5 
                         px-2.5 py-1 rounded-full
                         border border-gray-200/50 dark:border-white/5"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default React.memo(ProjectCard);
