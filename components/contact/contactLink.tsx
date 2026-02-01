"use client";

import Link from "next/link";
import { ArrowTopRight } from "@/public/svg/logos";
import { firaCode } from "@/app/ui/fonts";
import { motion } from "framer-motion";

interface ContactLinkProps {
  href: string;
  children: React.ReactNode;
  title: string;
  ariaLabel: string;
}

export default function ContactLink({
  href,
  children,
  title,
  ariaLabel,
}: ContactLinkProps) {
  const linkVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.02,
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 15,
      },
    },
    tap: {
      scale: 0.98,
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 15,
      },
    },
  };

  const iconVariants = {
    initial: { x: 0, rotate: 0 },
    hover: {
      x: 4,
      rotate: 45,
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 12,
      },
    },
  };

  const backgroundVariants = {
    initial: { scaleX: 0 },
    hover: {
      scaleX: 1,
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 20,
      },
    },
  };

  return (
    <Link
      href={href}
      target="_blank"
      aria-label={ariaLabel}
      className="relative w-full md:w-[40%]"
    >
      <motion.div
        variants={linkVariants}
        initial="initial"
        whileHover="hover"
        whileTap="tap"
        className={`relative border-2 border-primary-color text-primary-color p-3 rounded-xl flex flex-row justify-between items-center cursor-pointer overflow-hidden dark:border-brand dark:text-brand group ${firaCode.className}`}
      >
        {/* Animated background */}
        <motion.div
          variants={backgroundVariants}
          className="absolute inset-0 bg-linear-to-r from-primary-color to-primary-color dark:from-brand dark:to-brand origin-left"
          style={{ zIndex: 0 }}
        />

        {/* Content */}
        <div className="h-full flex flex-row items-center gap-4 z-10 relative group-hover:text-white transition-colors duration-300">
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{
              type: "spring" as const,
              stiffness: 400,
              damping: 10,
            }}
          >
            {children}
          </motion.div>
          <p className="font-medium">{title}</p>
        </div>

        {/* Arrow icon */}
        <motion.div variants={iconVariants} className="z-10 relative">
          <ArrowTopRight
            width="24"
            className="fill-current stroke-current group-hover:text-white transition-colors duration-300"
          />
        </motion.div>
      </motion.div>
    </Link>
  );
}
