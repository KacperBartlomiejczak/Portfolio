"use client";

import { inter, firaCode } from "@/app/ui/fonts";
import classes from "@/components/ui/button.module.css";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const containerVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      staggerChildren: 0.2,
      duration: 0.5,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

export default function AboutMeHeading() {
  const t = useTranslations("About");

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="flex flex-col items-center justify-center gap-4 mt-6 p-2 lg:items-start lg:max-w-[700px] flex-2"
    >
      <motion.h2
        variants={itemVariants}
        className={`${inter.className} text-secondary-color font-bold text-xl text-center md:text-2xl lg:text-left dark:text-secondary`}
      >
        {t("heading")}
      </motion.h2>
      <motion.p
        variants={itemVariants}
        className={`${firaCode.className} text-sm/loose text-center mb-4 px-2 md:text-base/loose lg:text-left md:px-0`}
      >
        {t("description")}
      </motion.p>
      <motion.div variants={itemVariants}>
        <a
          href="/KacperCV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          download
          aria-label={t("cv_aria")}
          className={`flex bg-cta px-4 py-2 rounded-xl font-bold text-white cursor-pointer ${inter.className} antialiased hover:bg-[#2b8883] transition-colors focus:bg-[#2b8883]  md:px-6 md:py-3 ${classes.buttonAnimation} text-lg lg:px-8 lg:py-3 xl:px-10 xl:text-xl dark:bg-accent dark:hover:bg-[#2cb68d]`}
        >
          {t("cv_button")}
        </a>
      </motion.div>
    </motion.div>
  );
}
