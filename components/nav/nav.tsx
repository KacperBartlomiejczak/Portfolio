"use client";

import { useState, useEffect } from "react";
import { inter } from "@/app/ui/fonts";
import Hamburger from "./hamburger";
import Link from "next/link";
import NavLink from "./navLink";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  //Opening nav logic
  const openNavHandler = () => {
    setIsOpen((prevState) => !prevState);
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

  return (
    <nav className="p-4 flex flex-row justify-center items-center sticky">
      <div className="container flex flex-row items-center justify-between z-10">
        <h2
          className={`${inter.className} antialiased text-primary-color relative z-10 text-lg`}
        >
          Kacper Bartłomiejczak
        </h2>
        <Hamburger isOpen={isOpen} onOpen={openNavHandler} />
        <ul
          className={`fixed bg-white text-black flex flex-col justify-center items-center inset-0 gap-6 z-0 transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <NavLink title="Projekty" href="#projects" onOpen={openNavHandler}/>
          <NavLink title="O mnie" href="#omnie" onOpen={openNavHandler}/>
          <NavLink title="Kontakt" href="#kontakt" onOpen={openNavHandler}/>
        </ul>
      </div>
    </nav>
  );
}
