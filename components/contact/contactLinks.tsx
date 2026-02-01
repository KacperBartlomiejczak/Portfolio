"use client";

import {
  LinkedIn,
  Github,
  Mail,
  Discord,
  ArrowTopRight,
} from "@/public/svg/logos";

import ContactLink from "./contactLink";
import { firaCode } from "@/app/ui/fonts";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function ContactLinks() {
  const t = useTranslations("Contact.links");
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
    <div className="w-full flex flex-row flex-wrap items-center my-5 p-4 gap-5 justify-center md:gap-8">
      <a
        href="mailto:kacperbartlomiejczak@proton.me"
        aria-label={t("mail_aria")}
        className="relative w-full md:w-[40%]"
        target="_blank"
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
              <Mail width="24" />
            </motion.div>
            <p className="font-medium">Mail</p>
          </div>

          {/* Arrow icon */}
          <motion.div variants={iconVariants} className="z-10 relative">
            <ArrowTopRight
              width="24"
              className="fill-current stroke-current group-hover:text-white transition-colors duration-300"
            />
          </motion.div>
        </motion.div>
      </a>

      <ContactLink
        href="https://www.linkedin.com/in/kacper-bartlomiejczak-b12a19385/"
        title="LinkedIn"
        ariaLabel={t("linkedin_aria")}
      >
        <LinkedIn width="24" />
      </ContactLink>
      <ContactLink
        href="https://github.com/KacperBartlomiejczak"
        title="Github"
        ariaLabel={t("github_aria")}
      >
        <Github width="24" />
      </ContactLink>

      <ContactLink
        href="https://discord.gg/ktx2zJ735w"
        title="Discord"
        ariaLabel={t("discord_aria")}
      >
        <Discord width="24" />
      </ContactLink>
    </div>
  );
}
