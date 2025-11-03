"use client";

import { useState, useEffect } from "react";
import { inter } from "@/app/ui/fonts";
import Hamburger from "./hamburger";
import Link from "next/link";
import NavLink from "./navLink";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // nowy state dla trybu dark
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
      } catch {}
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
    } catch {}
  }, []);

  //Making body overflow hidden when navigation is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

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
      className={`p-6 w-full flex flex-row justify-center items-center fixed top-0  ${
        isScrolled ? "bg-bg-color dark:bg-background" : "transparent"
      } transition-colors z-30`}
    >
      <div className="container flex flex-row items-center justify-between z-20">
        <Link href="#">
          <p
            className={`${inter.className} antialiased text-primary-color dark:text-brand relative z-20 text-lg md:text-xl font-bold hover:text-cta dark:hover:text-accent transition-colors duration-500`}
          >
            Kacper Bartłomiejczak
          </p>
        </Link>
        <Hamburger isOpen={isOpen} onOpen={openNavHandler} />
        <ul
          id="mobile-menu"
          className={`fixed bg-white dark:bg-background lg:bg-transparent text-black dark:text-secondary flex flex-col justify-center items-center inset-0 gap-6 z-10 transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full lg:translate-x-0"
          } lg:relative lg:flex-row lg:translate-x-0`}
        >
          <NavLink title="Projekty" href="#projects" onOpen={closeNavHandler} />
          <NavLink title="O mnie" href="#aboutme" onOpen={closeNavHandler} />
          <NavLink title="Kontakt" href="#contact" onOpen={closeNavHandler} />
          <button
            onClick={toggleDarkHandler}
            className="w-[50px] h-[50px] p-0 rounded-full bg-secondary-color flex items-center justify-center cursor-pointer hover:bg-secondary transition-colors"
            aria-pressed={isDark}
            aria-label="Toggle dark mode"
          >
            {isDark ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="http://www.w3.org/2000/svg"
                width="24px"
                fill="#e5e7eb"
              >
                <path d="M480-280q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="http://www.w3.org/2000/svg"
                width="24px"
                fill="#e5e7eb"
              >
                <path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Z" />
              </svg>
            )}
          </button>
        </ul>
      </div>
    </nav>
  );
}
