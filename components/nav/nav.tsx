"use client";

import { useState, useEffect } from "react";
import { inter } from "@/app/ui/fonts";
import Hamburger from "./hamburger";
import Link from "next/link";
import NavLink from "./navLink";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  //Opening nav logic
  const openNavHandler = () => {
    setIsOpen((prevState) => !prevState);
  };

  const closeNavHandler = () => {
    setIsOpen(false);
  };

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
        isScrolled ? "bg-bg-color" : "transparent"
      } transition-colors z-30`}
    >
      <div className="container flex flex-row items-center justify-between z-20">
        <Link href="#">
          <p
            className={`${inter.className} antialiased text-primary-color relative z-20 text-lg md:text-xl font-bold`}
          >
            Kacper Bartłomiejczak
          </p>
        </Link>
        <Hamburger isOpen={isOpen} onOpen={openNavHandler} />
        <ul
          id="mobile-menu"
          className={`fixed bg-white lg:bg-transparent text-black flex flex-col justify-center items-center inset-0 gap-6 z-10 transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full lg:translate-x-0"
          } lg:relative lg:flex-row lg:translate-x-0`}
        >
          <NavLink title="Projekty" href="#projects" onOpen={closeNavHandler} />
          <NavLink title="O mnie" href="#aboutme" onOpen={closeNavHandler} />
          <NavLink title="Kontakt" href="#contact" onOpen={closeNavHandler} />
        </ul>
      </div>
    </nav>
  );
}
