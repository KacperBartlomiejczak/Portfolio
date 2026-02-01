import { inter } from "@/app/ui/fonts";
import Image from "next/image";
import React, { useCallback, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
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
  const description = tItem("description");

  // Detect if device is mobile/touch-enabled
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);

  // 3D Tilt Effect Setup
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

  const handleMouseMove = useCallback(
    ({ currentTarget, clientX, clientY }: React.MouseEvent) => {
      const { left, top, width, height } =
        currentTarget.getBoundingClientRect();
      x.set(clientX - left - width / 2);
      y.set(clientY - top - height / 2);
    },
    [x, y],
  );

  const handleMouseLeave = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  // Touch handlers for mobile 3D tilt
  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (e.touches.length === 1) {
        const touch = e.touches[0];
        const { left, top, width, height } =
          e.currentTarget.getBoundingClientRect();
        x.set(touch.clientX - left - width / 2);
        y.set(touch.clientY - top - height / 2);
      }
    },
    [x, y],
  );

  const handleTouchEnd = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

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

  const rotateX = useTransform(mouseY, [-300, 300], [5, -5]);
  const rotateY = useTransform(mouseX, [-300, 300], [-5, 5]);

  return (
    <motion.div
      layoutId={`card-${id}`}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onTouchMove={isMobile ? undefined : handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={t("aria.open_details", { title })}
      style={{
        rotateX: isMobile ? 0 : rotateX,
        rotateY: isMobile ? 0 : rotateY,
        transformStyle: "preserve-3d",
        willChange: "transform",
      }}
      className="group relative w-full rounded-2xl cursor-pointer perspective-1000 md:h-[400px] lg:h-[450px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-color focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-50 dark:focus-visible:ring-offset-gray-900"
      whileHover={{ scale: 1.02 }}
      whileTap={{
        scale: 0.98,
        rotateX: 0,
        rotateY: 0,
        transition: { duration: 0.1 },
      }}
      transition={{
        type: "spring",
        stiffness: isMobile ? 500 : 400,
        damping: isMobile ? 35 : 30,
      }}
    >
      {/* Glow Effect Layer */}
      <div className="absolute inset-0 rounded-2xl bg-primary-color/0 blur-2xl transition-all duration-300 group-hover:bg-primary-color/20 group-active:bg-primary-color/30 pointer-events-none" />

      {/* Card Container */}
      <div className="relative h-full flex flex-col md:block bg-white/80 dark:bg-gray-900/40 backdrop-blur-2xl border border-gray-200 dark:border-white/10 rounded-2xl overflow-hidden shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] dark:shadow-[0_10px_40px_-15px_rgba(0,0,0,0.4)] hover:shadow-[0_25px_60px_-12px_rgba(107,70,193,0.4)] dark:hover:shadow-[0_25px_60px_-12px_rgba(107,70,193,0.6)] active:shadow-[0_35px_80px_-12px_rgba(107,70,193,0.8)] transition-all duration-300 group-hover:border-primary-color/30 group-active:border-primary-color/50">
        {/* Image Section */}
        <motion.div
          layoutId={`image-${id}`}
          className="relative w-full h-52 md:h-[400px] lg:h-[450px] md:absolute md:inset-0"
        >
          <Image
            src={projectImg}
            alt={`Projekt ${title}`} // Assuming this is fine to keep partially untranslated or use t('image_alt', {title}) if needed.
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 500px"
            loading="lazy"
          />
          {/* Overlay Gradient - Enhanced for better contrast */}
          <div className="absolute inset-0 bg-linear-to-t from-gray-900 via-gray-900/50 to-transparent md:from-black/95 md:via-black/60 md:to-transparent/20 transition-opacity duration-300 group-hover:via-gray-900/40" />
        </motion.div>

        {/* Content Section - Overlay on Desktop */}
        <div className="relative p-5 flex flex-col gap-3 md:h-full md:justify-end md:absolute md:inset-0 md:p-8 z-30">
          <div className="flex flex-col gap-1">
            {/* Top accent - Enhanced visibility */}
            <motion.div
              className="w-12 h-1 bg-primary-color rounded-full mb-2 shadow-[0_0_10px_rgba(107,70,193,0.6)] hidden md:block"
              initial={{ width: 40 }}
              whileHover={{ width: 60 }}
              transition={{ duration: 0.3 }}
            />

            <motion.h3
              layoutId={`title-${id}`}
              className={`${inter.className} text-xl md:text-3xl font-bold text-gray-900 dark:text-white md:text-white tracking-tight drop-shadow-sm dark:drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] md:drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]`}
            >
              {title}
            </motion.h3>

            <motion.p
              layoutId={`subtitle-${id}`}
              className="text-primary-color font-semibold text-sm md:text-base drop-shadow-lg"
            >
              {subtitle}
            </motion.p>
          </div>

          <motion.div className="flex flex-col gap-4 transition-all duration-500 ease-out">
            <p className="text-gray-600 dark:text-gray-200 md:text-gray-200 text-sm line-clamp-3 md:line-clamp-3 leading-relaxed drop-shadow-sm dark:drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)] md:drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">
              {description}
            </p>

            {/* Tags - Enhanced styling */}
            <div className="flex flex-wrap gap-2">
              {tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] md:text-xs font-semibold text-gray-700 dark:text-white md:text-white bg-gray-100 dark:bg-white/15 md:bg-white/15 backdrop-blur-md px-3 py-1.5 rounded-full border border-gray-200 dark:border-white/20 md:border-white/20 hover:bg-gray-200 dark:hover:bg-white/25 md:hover:bg-white/25 hover:border-primary-color/40 transition-all duration-200 shadow-sm dark:shadow-lg md:shadow-lg"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Quick Actions - Enhanced visibility on mobile */}
            <div className="flex items-center gap-3 pt-2 text-gray-500 dark:text-white/70 md:text-white/70 text-xs font-mono opacity-0 md:group-hover:opacity-100 md:opacity-0 group-active:opacity-100 transition-opacity duration-300">
              <span className="flex items-center gap-1 hover:text-primary-color transition-colors">
                {t("buttons.details")} <ArrowUpRight size={14} />
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default React.memo(ProjectCard);
