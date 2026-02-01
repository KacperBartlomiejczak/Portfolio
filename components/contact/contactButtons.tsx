"use client";

import { DialogClose, DialogFooter } from "@/components/ui/dialog";
import { inter } from "@/app/ui/fonts";
import { Send } from "@/public/svg/logos";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function ContactButtons({ isSended }: { isSended: boolean }) {
  const [isHovered, setIsHovered] = useState(false);

  // Animation variants for Cancel button
  const cancelButtonVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.05,
      backgroundColor: "rgb(248 113 113)",
      borderColor: "rgb(248 113 113)",
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 10,
      },
    },
    tap: {
      scale: 0.95,
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 10,
      },
    },
  };

  // Animation variants for Send button
  const sendButtonVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 10,
      },
    },
    tap: {
      scale: 0.95,
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
    <DialogFooter
      className={`flex flex-row justify-end items-center gap-2 ${inter.className}`}
    >
      <DialogClose asChild>
        <motion.button
          variants={cancelButtonVariants}
          initial="initial"
          whileHover="hover"
          whileTap="tap"
          className="px-4 py-2 border-2 border-red-400 rounded-lg cursor-pointer dark:border-red-400 text-black dark:text-white"
          aria-label="Zamknij formularz kontaktowy"
        >
          Odrzuć
        </motion.button>
      </DialogClose>

      <motion.button
        type="submit"
        variants={sendButtonVariants}
        initial="initial"
        whileHover={!isSended ? "hover" : undefined}
        whileTap={!isSended ? "tap" : undefined}
        animate={isSended ? "disabled" : "initial"}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className={`px-7 py-2 bg-primary-color rounded-lg text-white border-2 border-primary-color cursor-pointer text-left relative dark:bg-brand dark:border-brand ${
          isSended ? "pr-12" : ""
        }`}
        disabled={isSended}
        aria-label={isSended ? "Wysyłanie wiadomości…" : "Wyślij wiadomość"}
      >
        <motion.p
          className="block text-left"
          variants={textVariants}
          animate={isHovered && !isSended ? "hover" : "initial"}
        >
          {isSended ? "Wysyłanie" : "Wyślij"}
        </motion.p>

        {/* Icon appears ONLY on hover */}
        <AnimatePresence>
          {isHovered && !isSended && (
            <motion.div
              variants={iconVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="absolute top-1/2 right-4 -translate-y-1/2"
            >
              <Send width="18" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Loading dots */}
        {isSended && (
          <div className="absolute top-1/2 right-4 -translate-y-1/2 flex gap-1">
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
    </DialogFooter>
  );
}
