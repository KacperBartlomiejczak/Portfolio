"use client";

import { useState, useCallback } from "react";
import { inter, firaCode } from "@/app/ui/fonts";
import classes from "@/components/ui/button.module.css";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useMobile } from "@/context/mobileContext";
import toast from "react-hot-toast";

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
  const isMobile = useMobile();
  const [isDownloaded, setIsDownloaded] = useState(false);

  const handleDownload = useCallback(() => {
    if (isDownloaded) return;

    const link = document.createElement("a");
    link.href = "/KacperCV.pdf";
    link.download = "KacperCV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    toast.success(t("cv_downloaded"));
    setIsDownloaded(true);

    setTimeout(() => {
      setIsDownloaded(false);
    }, 1000);
  }, [isDownloaded, t]);

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
      <motion.div
        variants={itemVariants}
        whileHover={isMobile || isDownloaded ? undefined : { scale: 1.05 }}
        whileTap={isDownloaded ? undefined : { scale: 0.95 }}
      >
        <button
          onClick={handleDownload}
          disabled={isDownloaded}
          aria-label={t("cv_aria")}
          className={`relative group overflow-hidden flex bg-cta px-4 py-2 rounded-xl font-bold text-white cursor-pointer ${inter.className} antialiased hover:bg-[#2b8883] transition-all focus:bg-[#2b8883] md:px-6 md:py-3 ${classes.buttonAnimation} text-lg lg:px-8 lg:py-3 xl:px-10 xl:text-xl dark:bg-accent dark:hover:bg-[#2cb68d] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:bg-cta dark:disabled:hover:bg-accent`}
        >
          {/* Shimmer effect */}
          {!isDownloaded && (
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{
                repeat: Infinity,
                duration: 2,
                repeatDelay: 3,
                ease: "linear",
              }}
              className="absolute inset-0 w-1/2 h-full bg-linear-to-r from-transparent via-white/20 to-transparent skew-x-12"
            />
          )}
          <span className="relative z-10">
            {isDownloaded ? t("cv_downloaded") : t("cv_button")}
          </span>
        </button>
      </motion.div>
    </motion.div>
  );
}
