"use client";
import HeaderTitle from "./headerTitle";
import HeaderImg from "./headerImg";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <header className="flex justify-center items-center min-h-screen bg-bg-color dark:bg-background overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="container flex flex-col items-center justify-center gap-4 p-2 my-8 lg:flex-row-reverse"
      >
        <HeaderImg />
        <HeaderTitle />
      </motion.div>
    </header>
  );
}
