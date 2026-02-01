"use client";

import SectionLayout from "../section/sectionLayout";
import AboutMeHeading from "./aboutmeHeading";
import AboutMeImg from "./aboutmeImg";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

import AboutMeTechnology from "./aboutmeTechnology";

export default function AboutMe() {
  const t = useTranslations("About");
  return (
    <SectionLayout id="aboutme" title={t("title")}>
      <div className="relative w-full pb-16">
        {/* Decorative background blobs - Softened and more subtle */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 45, 0],
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-40 -left-40 w-96 h-96 bg-primary-color/[0.07] rounded-full blur-[120px] dark:bg-brand/5 pointer-events-none"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, -45, 0],
            x: [0, -80, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-secondary-color/[0.07] rounded-full blur-[150px] dark:bg-secondary/5 pointer-events-none"
        />

        <div className="relative z-10 w-full flex flex-col items-center justify-center my-8 md:gap-10 lg:flex-row lg:gap-25 ">
          <AboutMeImg />
          <AboutMeHeading />
        </div>
        <AboutMeTechnology />
      </div>
    </SectionLayout>
  );
}
