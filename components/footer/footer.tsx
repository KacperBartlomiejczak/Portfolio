"use client";
import { inter } from "@/app/ui/fonts";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const linkVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
    },
  },
};

export default function Footer() {
  const t = useTranslations("Footer");
  const tNav = useTranslations("Header.nav");

  const navigationLinks = [
    { titleKey: "projects", href: "/#projects" },
    { titleKey: "about", href: "/#aboutme" },
    { titleKey: "contact", href: "/#contact" },
  ];

  return (
    <footer className="bg-primary-color dark:bg-brand text-white relative overflow-hidden">
      {/* Animated background gradient */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent pointer-events-none"
      />

      <div className="container mx-auto px-4 py-8 md:py-12 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
        >
          {/* Brand Section */}
          <motion.div
            variants={itemVariants}
            className="text-center md:text-left"
          >
            <motion.h3
              className={`${inter.className} text-xl font-bold mb-3`}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Kacper Bartłomiejczak
            </motion.h3>
            <motion.p
              className="text-sm text-white/80 hover:text-white cursor-default transition-colors duration-300"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.8 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              whileHover={{ opacity: 1, scale: 1.02 }}
            >
              {t("brand_desc")}
            </motion.p>
          </motion.div>

          {/* Site Map */}
          <motion.div
            variants={itemVariants}
            className="text-center md:text-left"
          >
            <motion.h4
              className={`${inter.className} text-lg font-semibold mb-3 hover:text-white/90 transition-colors duration-300 cursor-default`}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {t("sitemap")}
            </motion.h4>
            <nav>
              <motion.ul
                className="space-y-2"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {navigationLinks.map((link, index) => (
                  <motion.li key={link.href} variants={linkVariants}>
                    <Link
                      href={link.href}
                      className="group relative inline-block"
                    >
                      <motion.span
                        className="text-sm text-white/80 group-hover:text-white transition-colors duration-300 relative z-10"
                        whileHover={{ x: 5, scale: 1.05 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 10,
                        }}
                      >
                        {tNav(link.titleKey)}
                      </motion.span>
                      <motion.span
                        className="absolute -left-2 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-white rounded-full opacity-0 group-hover:opacity-100"
                        initial={{ scale: 0 }}
                        whileHover={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 500 }}
                      />
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            </nav>
          </motion.div>

          {/* Legal Section */}
          <motion.div
            variants={itemVariants}
            className="text-center md:text-left"
          >
            <motion.h4
              className={`${inter.className} text-lg font-semibold mb-3 hover:text-white/90 transition-colors duration-300 cursor-default`}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {t("legal")}
            </motion.h4>
            <Link
              href="/polityka-prywatnosci"
              className="group relative inline-block"
            >
              <motion.span
                className="text-sm text-white/80 group-hover:text-white transition-colors duration-300 relative"
                whileHover={{ x: 5, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {t("privacy")}
              </motion.span>
              <motion.span
                className="absolute -bottom-0.5 left-0 h-0.5 bg-white/50 origin-left"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
                style={{ width: "100%" }}
              />
            </Link>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 pt-6 border-t border-white/20 text-center"
        >
          <motion.p
            className={`${inter.className} text-sm text-white/80`}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            © 2025 Kacper Bartłomiejczak. {t("rights")}
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
}
