"use client";

import { useState, useEffect } from "react";
import { useScrollLock } from "@/hooks/useScrollLock";

import Hamburger from "./hamburger";

import NavBrandText from "./navBrandText";
import NavList from "./navList";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const [isDark, setIsDark] = useState(false);

  //Opening nav logic
  const openNavHandler = () => {
    setIsOpen((prevState) => !prevState);
  };

  const closeNavHandler = () => {
    setIsOpen(false);
  };

  // toggle dark mode handler
  const toggleDarkHandler = () => {
    setIsDark((prev) => {
      const next = !prev;
      try {
        localStorage.setItem("isDark", String(next));
      } catch { }
      return next;
    });
  };

  // sync html class with isDark
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  // read saved preference on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem("isDark");
      if (saved !== null) setIsDark(saved === "true");
    } catch { }
  }, []);

  // Lock scroll when navigation is open (conditionally)
  useScrollLock(isOpen);

  //adding background logic
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`p-3 w-full flex flex-row justify-center items-center fixed top-0  ${isScrolled ? "bg-bg-color dark:bg-background" : "transparent"
        } transition-colors z-30 lg:p-6`}
      aria-label="Główna nawigacja"
    >
      <div className="container flex flex-row items-center justify-between z-20">
        <NavBrandText />
        <Hamburger isOpen={isOpen} onOpen={openNavHandler} />
        <NavList
          isOpen={isOpen}
          isDark={isDark}
          onClose={closeNavHandler}
          onToggleDark={toggleDarkHandler}
        />
      </div>
    </nav>
  );
}
