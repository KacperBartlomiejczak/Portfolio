"use client";

import { useState, useEffect } from "react";

import SectionHeader from "../section/sectionHeader";
import AboutMeHeading from "./aboutmeHeading";
import AboutMeImg from "./aboutmeImg";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import AboutMeTechnology from "./aboutmeTechnology";

export default function AboutMe() {
  const t = useTranslations("About");
  // Detect if device is mobile/touch-enabled
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(
      typeof window !== "undefined" &&
        ("ontouchstart" in window || navigator.maxTouchPoints > 0),
    );
  }, []);

  return (
    <section className="relative w-full p-4 overflow-hidden scroll-mt-32 md:scroll-mt-36 lg:scroll-mt-40 bg-bg-color dark:bg-background">
      {/* Decorative background blobs - Strictly contained */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={
            isMobile
              ? undefined
              : {
                  scale: [1, 1.2, 1],
                  rotate: [0, 45, 0],
                  y: [0, 30, 0],
                }
          }
          transition={
            isMobile
              ? undefined
              : {
                  duration: 25,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
          }
          className="absolute -top-[100px] -left-[100px] w-96 h-96 bg-primary-color/[0.07] rounded-full blur-[100px] dark:bg-brand/5"
          style={{ filter: "blur(100px)" }}
        />
        <motion.div
          animate={
            isMobile
              ? undefined
              : {
                  scale: [1, 1.15, 1],
                  rotate: [0, -45, 0],
                  y: [0, 50, 0],
                }
          }
          transition={
            isMobile
              ? undefined
              : {
                  duration: 30,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
          }
          className="absolute -bottom-[100px] -right-[100px] w-[500px] h-[500px] bg-secondary-color/[0.07] rounded-full blur-[120px] dark:bg-secondary/5"
          style={{ filter: "blur(120px)" }}
        />
      </div>

      <div className="container mx-auto flex flex-col items-center gap-4">
        <SectionHeader>{t("title")}</SectionHeader>

        <div className="relative w-full pb-16">
          <div className="relative z-10 w-full flex flex-col items-center justify-center my-8 md:gap-10 lg:flex-row lg:gap-25 ">
            <AboutMeImg />
            <AboutMeHeading />
          </div>
          <AboutMeTechnology />
        </div>
      </div>
    </section>
  );
}
