"use client";
import { inter, firaCode } from "@/app/ui/fonts";
import Button from "../ui/button";
import { motion, Variants } from "framer-motion";
import { useTranslations } from "next-intl";

export default function HeaderTitle() {
  const t = useTranslations("Hero");

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.4,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center p-2 text-center gap-2 lg:flex-1 lg:text-left lg:items-start"
    >
      <motion.h1
        variants={itemVariants}
        className={`${inter.className} text-secondary-color font-extrabold antialiased text-base md:text-2xl lg:text-3xl xl:text-4xl dark:text-secondary`}
      >
        {t("headline")}
      </motion.h1>
      <motion.p
        variants={itemVariants}
        className={`${firaCode.className} text-sm/loose mb-4 md:text-lg/loose  xl:w-3/4 dark:text-white`}
      >
        {t("subheadline")}
      </motion.p>
      <motion.div variants={itemVariants}>
        <Button href="#contact" ariaLabel={t("cta")}>
          {t("cta")}
        </Button>
      </motion.div>
    </motion.div>
  );
}
