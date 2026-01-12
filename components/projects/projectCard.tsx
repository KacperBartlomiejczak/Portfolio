import { inter } from "@/app/ui/fonts";
import Image from "next/image";
import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";

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
  id,
  title,
  subtitle,
  description,
  tags,
  projectImg,
  onClick,
  websiteLink,
  repoLink,
}: CardProps & { onClick: () => void }) => {
  // 3D Tilt Effect Setup
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

  function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    x.set(clientX - left - width / 2);
    y.set(clientY - top - height / 2);
  }

  function onMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const rotateX = useTransform(mouseY, [-300, 300], [5, -5]); // Inverted for natural tilt
  const rotateY = useTransform(mouseX, [-300, 300], [-5, 5]);

  return (
    <motion.div
      layoutId={`card-${id}`}
      onClick={onClick}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="group relative w-full rounded-2xl cursor-pointer perspective-1000 md:h-[400px] lg:h-[450px]"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
    >
      {/* Card Container */}
      <div className="relative h-full flex flex-col md:block bg-gray-900/40 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:shadow-primary-color/20">
        {/* Image Section */}
        <motion.div
          layoutId={`image-${id}`}
          className="relative w-full h-48 md:h-[400px] lg:h-[450px] md:absolute md:inset-0"
        >
          <Image
            src={projectImg}
            alt={`Projekt ${title}`}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 500px"
          />
          {/* Overlay Gradient - Stronger on all screens for readability */}
          <div className="absolute inset-0 bg-linear-to-t from-gray-900 via-gray-900/40 to-transparent md:from-black/90 md:via-black/50 md:to-transparent/10 transition-opacity duration-300" />
        </motion.div>

        {/* Content Section - Overlay on Desktop */}
        <div className="relative p-5 flex flex-col gap-3 h-full justify-end md:absolute md:inset-0 md:p-8 z-30">
          <div className="flex flex-col gap-1">
            {/* Top accent - Always visible but styled */}
            <motion.div
              className="w-10 h-1 bg-primary-color rounded-full mb-2 hidden md:block" // Removed opacity-0 to make it always visible
            />

            <motion.h3
              layoutId={`title-${id}`}
              className={`${inter.className} text-xl md:text-3xl font-bold text-white tracking-tight drop-shadow-lg`}
            >
              {title}
            </motion.h3>

            <motion.p
              layoutId={`subtitle-${id}`}
              className="text-primary-color/90 font-medium text-sm md:text-base"
            >
              {subtitle}
            </motion.p>
          </div>

          <motion.div
            className="md:translate-y-0 md:opacity-100 transition-all duration-500 ease-out flex flex-col gap-4" // Made description always visible
          >
            <p className="text-gray-300 text-sm line-clamp-3 md:line-clamp-3 leading-relaxed drop-shadow-md">
              {description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] md:text-xs font-semibold text-white/90 bg-white/10 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10 hover:bg-white/20 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="flex items-center gap-3 pt-2 text-white/60 text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="flex items-center gap-1 hover:text-primary-color transition-colors">
                Kliknij aby zobaczyć szczegóły <ArrowUpRight size={14} />
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default React.memo(ProjectCard);
