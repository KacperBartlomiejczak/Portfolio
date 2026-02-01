"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { Discord, LinkedIn, Github } from "@/public/svg/logos";
import { inter } from "@/app/ui/fonts";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

export default function ContactInfo() {
  const t = useTranslations("Contact.info");
  const titleVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut" as const,
      },
    }),
  };

  const contactItems = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: t("email"),
      description: "kacperbartlomiejczak@proton.me",
      href: "mailto:kacperbartlomiejczak@proton.me",
    },
    {
      icon: <Discord width="24" />,
      title: t("discord"),
      description: t("discord_desc"),
      href: "https://discord.gg/ktx2zJ735w",
    },
    {
      icon: <LinkedIn className="w-6 h-6" width="24" />,
      title: t("linkedin"),
      description: t("linkedin_desc"),
      href: "https://www.linkedin.com/in/kacper-bartlomiejczak-b12a19385/",
    },
    {
      icon: <Github className="w-6 h-6" width="24" />,
      title: t("github"),
      description: t("github_desc"),
      href: "https://github.com/KacperBartlomiejczak",
    },
  ];

  // Random quotes
  const quotes = [
    {
      text: t("quotes.q1.text"),
      author: t("quotes.q1.author"),
    },
    {
      text: t("quotes.q2.text"),
      author: t("quotes.q2.author"),
    },
    {
      text: t("quotes.q3.text"),
      author: t("quotes.q3.author"),
    },
    {
      text: t("quotes.q4.text"),
      author: t("quotes.q4.author"),
    },
  ];

  const [randomQuote, setRandomQuote] = useState(quotes[0]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setRandomQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  }, [t]);

  // Animation variants for contact link cards
  const linkVariants = {
    initial: {
      scale: 1,
      y: 0,
    },
    hover: {
      scale: 1.03,
      y: -4,
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 15,
      },
    },
  };

  // Animation for the icon container
  const iconContainerVariants = {
    initial: {
      rotate: 0,
      scale: 1,
    },
    hover: {
      rotate: [0, -10, 10, -10, 0],
      scale: 1.1,
      transition: {
        rotate: {
          duration: 0.5,
          ease: "easeInOut" as const,
        },
        scale: {
          type: "spring" as const,
          stiffness: 400,
          damping: 12,
        },
      },
    },
  };

  // Background gradient animation
  const bgGradientVariants = {
    initial: {
      opacity: 0,
      scale: 0.8,
    },
    hover: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <div className="flex flex-col justify-center h-full space-y-6">
      {/* Title */}
      <motion.div
        variants={titleVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-linear-to-r from-primary-color via-brand to-cta dark:from-brand dark:via-primary-color dark:to-cta pb-1">
          {t("title")}
        </h2>
        <p
          className={`text-base md:text-lg text-gray-700 dark:text-secondary max-w-lg leading-relaxed ${inter.className}`}
        >
          {t("description")}
        </p>
      </motion.div>

      {/* Contact Items */}
      <div className="space-y-4">
        {contactItems.map((item, index) => (
          <motion.div
            key={item.title}
            custom={index}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 group cursor-pointer relative overflow-hidden rounded-xl p-4 border border-transparent"
              variants={linkVariants}
              initial="initial"
              whileHover="hover"
            >
              {/* Animated background gradient */}
              <motion.div
                className="absolute inset-0 bg-linear-to-r from-primary-color/5 to-brand/5 dark:from-brand/10 dark:to-primary-color/10 rounded-xl"
                variants={bgGradientVariants}
                initial="initial"
              />

              {/* Animated border glow */}
              <motion.div
                className="absolute inset-0 rounded-xl border-2 border-primary-color/20 dark:border-brand/20"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              />

              <motion.div
                className="shrink-0 w-12 h-12 rounded-lg bg-primary-color/10 dark:bg-brand/10 flex items-center justify-center text-primary-color dark:text-brand relative z-10"
                variants={iconContainerVariants}
                initial="initial"
              >
                {item.icon}
              </motion.div>
              <div className="relative z-10">
                <motion.h3
                  className={`text-lg font-semibold text-gray-900 dark:text-white mb-1 ${inter.className}`}
                  whileHover={{ x: 4 }}
                  transition={{
                    type: "spring" as const,
                    stiffness: 400,
                    damping: 20,
                  }}
                >
                  {item.title}
                </motion.h3>
                <p
                  className={`text-gray-600 dark:text-secondary ${inter.className}`}
                >
                  {item.description}
                </p>
              </div>
            </motion.a>
          </motion.div>
        ))}
      </div>

      {/* Optional Quote */}
      <motion.div
        variants={titleVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="border-l-4 border-primary-color dark:border-brand pl-4 mt-4"
      >
        <p
          className={`text-gray-700 dark:text-secondary italic ${inter.className}`}
        >
          &quot;{randomQuote?.text}&quot;
        </p>
        <p
          className={`text-sm text-primary-color dark:text-brand font-semibold mt-2 ${inter.className}`}
        >
          — {randomQuote?.author}
        </p>
      </motion.div>
    </div>
  );
}
