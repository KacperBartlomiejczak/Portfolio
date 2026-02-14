"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useMobile } from "@/context/mobileContext";

export default function HeaderImg() {
  const isMobile = useMobile();

  return (
    <div className="relative">
      <motion.figure
        initial={{ scale: 0, opacity: 0 }}
        animate={
          isMobile
            ? { scale: 1, opacity: 1, y: 0 }
            : {
              scale: 1,
              opacity: 1,
              y: [0, -30, 0],
            }
        }
        transition={
          isMobile
            ? {
              duration: 0.8,
              ease: "easeOut",
            }
            : {
              scale: {
                type: "spring",
                stiffness: 260,
                damping: 20,
              },
              opacity: { duration: 0.5 },
              y: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }
        }
        whileHover={isMobile ? undefined : { scale: 1.1, rotate: 5 }}
        className="relative bg-transparent w-52 h-52 z-0 md:w-[250px] md:h-[250px] lg:w-[350px] lg:h-[350px] xl:w-[450px] xl:h-[450px] rounded-full hover:ring-2 ring-primary-color ring-offset-4 focus:ring-2 dark:ring-brand dark:ring-offset-background"
      >
        <Image
          src={"/headerImg.webp"}
          fill
          alt="Man in suit"
          className="rounded-full object-cover object-center "
          sizes="(max-width: 768px) 208px, (max-width: 1024px) 250px, (max-width: 1280px) 350px, 450px"
          priority={true}
          quality={80}
        />
      </motion.figure>
    </div>
  );
}
