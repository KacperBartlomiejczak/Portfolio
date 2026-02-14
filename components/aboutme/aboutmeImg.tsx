"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutMeImg() {
  return (
    <div className="relative group p-4 flex items-center justify-center">
      {/* Rotating dashed border */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 border-2 border-dashed border-primary-color/30 rounded-full dark:border-brand/20"
      />

      {/* Floating glow effect */}
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-4 bg-primary-color/20 rounded-full blur-2xl group-hover:bg-primary-color/40 transition-colors"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
        className="relative z-10 w-52 h-52 md:h-72 md:w-72 lg:h-80 lg:w-80 xl:h-90 xl:w-90"
      >
        <Image
          src="/aboutmeImg.webp"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
          alt="Man on hobby horse"
          className="object-cover rounded-3xl"
          quality={60}
        />
      </motion.div>
    </div>
  );
}
