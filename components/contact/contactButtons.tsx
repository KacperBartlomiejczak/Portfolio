"use client";

import { inter } from "@/app/ui/fonts";
import { Send } from "@/public/svg/logos";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { useMobile } from "@/context/mobileContext";

export default function ContactButtons({ isSended }: { isSended: boolean }) {
  const [isHovered, setIsHovered] = useState(false);
  const t = useTranslations("Contact.form");
  const isMobile = useMobile();

  // Animation variants for Send button
  const sendButtonVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.02,
      boxShadow: "0 10px 30px rgba(127, 90, 240, 0.3)",
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 10,
      },
    },
    tap: {
      scale: 0.98,
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 10,
      },
    },
    disabled: {
      opacity: 0.6,
      cursor: "not-allowed" as const,
    },
  };

  // Animation for text - slides left when hovered
  const textVariants = {
    initial: { x: 0 },
    hover: {
      x: -10,
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 20,
      },
    },
  };

  // Animation for the Send icon - appears only on hover
  const iconVariants = {
    hidden: {
      opacity: 0,
      x: -10,
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 20,
      },
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 20,
      },
    },
  };

  // Animation for loading dots
  const dotVariants = {
    animate: {
      opacity: [0, 1, 0],
      transition: {
        duration: 1.2,
        repeat: Infinity,
        ease: "easeInOut" as const,
      },
    },
  };

  return (
    <motion.button
      type="submit"
      variants={sendButtonVariants}
      initial="initial"
      whileHover={!isSended && !isMobile ? "hover" : undefined}
      whileTap={!isSended ? "tap" : undefined}
      animate={isSended ? "disabled" : "initial"}
      onHoverStart={!isMobile ? () => setIsHovered(true) : undefined}
      onHoverEnd={!isMobile ? () => setIsHovered(false) : undefined}
      className={`w-full px-8 py-4 bg-primary-color rounded-xl text-white border-2 border-primary-color cursor-pointer text-center relative dark:bg-brand dark:border-brand font-semibold text-lg ${inter.className} ${isSended ? "pr-12" : ""
        }`}
      disabled={isSended}
      aria-label={isSended ? t("sending") : t("send")}
    >
      <motion.span
        className="block"
        variants={textVariants}
        animate={isHovered && !isSended ? "hover" : "initial"}
      >
        {isSended ? t("sending") : t("send")}
      </motion.span>

      {/* Icon appears ONLY on hover */}
      <AnimatePresence>
        {isHovered && !isSended && (
          <motion.div
            variants={iconVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="absolute top-1/2 right-6 -translate-y-1/2"
          >
            <Send width="20" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Loading dots */}
      {isSended && (
        <div className="absolute top-1/2 right-6 -translate-y-1/2 flex gap-1">
          {[0, 1, 2].map((index) => (
            <motion.span
              key={index}
              variants={dotVariants}
              animate="animate"
              style={{
                animationDelay: `${index * 0.2}s`,
              }}
              className="w-1.5 h-1.5 bg-white rounded-full"
            />
          ))}
        </div>
      )}
    </motion.button>
  );
}
