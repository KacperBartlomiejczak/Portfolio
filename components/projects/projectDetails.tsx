"use client";

import { X, ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useScrollLock } from "@/hooks/useScrollLock";
import { useIsMobile } from "@/hooks/useIsMobile";

interface ProjectDetailsProps {
  id: number;
  translationKey: string;
  tags: string[];
  websiteLink: string;
  repoLink: string;
  projectImg: string;
  onClose: () => void;
}

export default function ProjectDetails({
  id,
  translationKey,
  tags,
  websiteLink,
  repoLink,
  projectImg,
  onClose,
}: ProjectDetailsProps) {
  const t = useTranslations("Projects");
  const tItem = useTranslations(`Projects.items.${translationKey}`);

  const title = tItem("title");
  const subtitle = tItem("subtitle");
  const description = tItem("description");

  // Lock scroll when modal is open
  useScrollLock();

  const isMobile = useIsMobile();

  return (
    <div className="fixed inset-0 z-50 grid place-items-center p-4">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      />

      {/* Modal Content */}
      <div
        className="relative w-full max-w-5xl max-h-[85vh] md:max-h-[90vh] 
                   bg-white dark:bg-gray-900/95 rounded-2xl overflow-y-auto 
                   shadow-xl flex flex-col md:flex-row 
                   border border-gray-200/60 dark:border-white/5
                   animate-in zoom-in-95 fade-in duration-200"
        onClick={(e) => e.stopPropagation()}
        data-scrollable="true"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-20 p-2 
                     bg-white dark:bg-gray-800 
                     hover:bg-gray-100 dark:hover:bg-gray-700 
                     rounded-full transition-colors 
                     text-gray-900 dark:text-white 
                     shadow-sm border border-gray-200/60 dark:border-white/5"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Image Section */}
        <div className="w-full md:w-3/5 relative h-48 md:h-auto md:min-h-[500px] shrink-0">
          <Image
            src={projectImg}
            alt={title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Content Section */}
        <div className="w-full md:w-2/5 p-5 md:p-8 flex flex-col justify-center relative z-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
              {title}
            </h2>
            <p className="text-primary-color font-medium text-base md:text-lg mb-5">
              {subtitle}
            </p>
          </div>

          <div className="space-y-5">
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm md:text-base">
              {description}
            </p>

            {/* Tech Stack */}
            <div>
              <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2.5">
                {t("labels.stack")}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium text-gray-700 dark:text-gray-300 
                               bg-gray-100 dark:bg-white/5 px-2.5 py-1 rounded-full 
                               border border-gray-200/50 dark:border-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4 mt-4 border-t border-gray-100 dark:border-white/5">
              <a
                href={websiteLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-5 py-2.5 
                           bg-primary-color text-white rounded-xl 
                           hover:bg-purple-600 transition-all font-medium 
                           shadow-sm text-sm"
              >
                <ExternalLink size={16} />
                {t("buttons.live")}
              </a>
              <a
                href={repoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-5 py-2.5 
                           bg-gray-100 dark:bg-white/5 text-gray-900 dark:text-white 
                           rounded-xl hover:bg-gray-200 dark:hover:bg-white/10 
                           transition-all font-medium 
                           border border-gray-200/60 dark:border-white/5 text-sm"
              >
                <Github size={16} />
                {t("buttons.code")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
