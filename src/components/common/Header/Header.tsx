"use client";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Header() {
  const themes = [
    "base",
    "dark-blue",
    "red",
    "aqua",
    "white",
    "dark",
    "pink",
    "blue",
  ];
  const [currentThemeIndex, setCurrentThemeIndex] = useState(0);

  const onClick = () => {
    const nextThemeIndex = (currentThemeIndex + 1) % themes.length;
    const nextTheme = themes[nextThemeIndex];
    document.body.dataset.theme = nextTheme;
    setCurrentThemeIndex(nextThemeIndex);
  };

  return (
    <main className="mx-auto ">
      <div className="w-full h-[120px] hidden md:flex  justify-center items-center ">
        <div className="w-[75%] flex flex-row justify-around items-center">
          <motion.div
            initial={{ y: -300, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3, type: "spring" }}
          >
            <Link
              href="/"
              className="text-[18px] text-[var(--text-color)] hover:text-[var(--third-color)] duration-500 text-underline"
            >
              About
            </Link>
          </motion.div>

          <motion.div
            initial={{ y: -300, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5, type: "spring" }}
            className="w-[6px] h-[6px] rounded-[50%] bg-[var(--text-color)]"
          ></motion.div>
          <motion.div
            initial={{ y: -300, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7, type: "spring" }}
          >
            <Link
              href="/"
              className="text-[18px] text-[var(--text-color)] text-underline hover:text-[var(--third-color)] duration-500"
            >
              Works
            </Link>
          </motion.div>

          <motion.div
            initial={{ y: -500, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9, type: "spring" }}
            className="w-[6px] h-[6px] rounded-[50%] bg-[var(--text-color)]"
          ></motion.div>
          <motion.div
            initial={{ y: -300, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1, type: "spring" }}
          >
            <Link
              href="/"
              onClick={onClick}
              className="cursor-pointer w-[70px] h-[70px] bg-[var(--third-color)] rounded-[8px] text-[36px] text-[var(--text-color)] flex justify-center items-center
          hover:bg-[var(--text-color)] hover:text-[var(--background-color)] duration-500"
            >
              CK
            </Link>
          </motion.div>

          <motion.div
            initial={{ y: -300, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9, type: "spring" }}
            className="w-[6px] h-[6px] rounded-[50%] bg-[var(--text-color)]"
          ></motion.div>
          <motion.div
            initial={{ y: -300, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7, type: "spring" }}
          >
            <Link
              href="/"
              className="text-[18px] text-[var(--text-color)] text-underline hover:text-[var(--third-color)] duration-500"
            >
              Home
            </Link>
          </motion.div>

          <motion.div
            initial={{ y: -300, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5, type: "spring" }}
            className="w-[6px] h-[6px] rounded-[50%] bg-[var(--text-color)]"
          ></motion.div>
          <motion.div
            initial={{ y: -300, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3, type: "spring" }}
          >
            <Link
              href="/"
              className="text-[18px] text-[var(--text-color)] text-underline hover:text-[var(--third-color)] duration-500"
            >
              Contact
            </Link>
          </motion.div>
        </div>
      </div>
      <div className="md:hidden "></div>
    </main>
  );
}
