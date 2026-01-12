"use client";

import { motion } from "framer-motion";
import { X, ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import ProjectTech from "./projectTech";
import { useEffect } from "react";

interface ProjectDetailsProps {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  websiteLink: string;
  repoLink: string;
  projectImg: string;
  onClose: () => void;
}

export default function ProjectDetails({
  id,
  title,
  subtitle,
  description,
  tags,
  websiteLink,
  repoLink,
  projectImg,
  onClose,
}: ProjectDetailsProps) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 grid place-items-center p-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-md"
      />
      <motion.div
        layoutId={`card-${id}`}
        layout // Enable layout animation
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="relative w-full max-w-5xl bg-[#1a1a2e] rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row border border-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-black/40 hover:bg-black/60 backdrop-blur-md rounded-full transition-colors text-white"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Hero Image Section */}
        <div className="w-full md:w-3/5 relative min-h-[300px] md:min-h-[500px]">
          <motion.div
            layoutId={`image-${id}`}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={projectImg}
              alt={title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-linear-to-r from-[#1a1a2e] via-transparent to-transparent opacity-90 md:opacity-100" />
            <div className="absolute inset-0 bg-linear-to-t from-[#1a1a2e] to-transparent md:hidden" />
          </motion.div>
        </div>

        {/* Content Section */}
        <div className="w-full md:w-2/5 p-8 flex flex-col justify-center relative z-10">
          <motion.div layoutId={`content-${id}`}>
            <motion.h2
              layoutId={`title-${id}`}
              className="text-4xl md:text-5xl font-bold text-white mb-2"
            >
              {title}
            </motion.h2>
            <motion.p
              layoutId={`subtitle-${id}`}
              className="text-primary-color font-medium text-lg mb-6"
            >
              {subtitle}
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-gray-300 leading-relaxed text-base">
              {description}
            </p>

            <div>
              <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">
                Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-semibold text-white bg-white/5 px-3 py-1.5 rounded-full border border-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-4 pt-4 mt-4 border-t border-white/5">
              <a
                href={websiteLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-primary-color text-white rounded-xl hover:bg-purple-600 transition-all font-medium"
              >
                <ExternalLink size={18} />
                Live Demo
              </a>
              <a
                href={repoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-white/5 text-white rounded-xl hover:bg-white/10 transition-all font-medium border border-white/5"
              >
                <Github size={18} />
                Kod
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
