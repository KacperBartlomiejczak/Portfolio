"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutMeImg() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
      className="relative block w-52 h-52 md:h-72 md:w-72 lg:h-80 lg:w-80 xl:h-90 xl:w-90"
    >
      <Image
        src="/aboutmeImg.webp"
        alt="Chłopak z koniem na kiju"
        fill
        className="rounded-full object-cover object-center ring-offset-3 transition-all duration-300 hover:ring-2 focus:ring-2 ring-primary-color dark:ring-offset-background"
        sizes="(max-width: 768px) 208px, (max-width: 1024px) 288px, (max-width: 1280px) 320px, 360px"
      />
    </motion.div>
  );
}
