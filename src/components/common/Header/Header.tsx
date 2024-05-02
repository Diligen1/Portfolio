"use client";

import "../../../styles/globals.css";
import style from "@/styles/Header/Header.module.css";
import { motion } from "framer-motion";
import { useState, useRef } from "react";
import Link from "next/link";
import Theme from "../Theme/Theme";
export default function Header() {
  const [isActive, setIsActive] = useState(false);

  function handleActive() {
    setIsActive(!isActive);
  }

  return (
    <main className="mx-auto flex justify-center pt-[20px] relative">
      <motion.div
        initial={{ y: -300, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
        }}
        className={` bg-[var(--background-fon)] border[var(--border-color)] w-[80%] h-[100px] rounded-[6px] flex flex-row border-[2px]  overflow-hidden justify-between`}
      >
        <div className="relative w-[25%] h-full flex flex-row gap-[8px]">
          <div className={`${style.third} w-[20%] `}></div>
          <div
            className={`cursor-pointer absolute left-[10%] hover:left-[6%] ${style.logo}
          top-[25%] w-[50px] h-[50px] flex justify-center items-center rounded-[6px] duration-300 hover:w-[70px] `}
          >
            <p className={` text-[24px] `} style={{ fontFamily: "Caviar" }}>
              CK
            </p>
          </div>
          <div
            className={`${style.block_creator} w-[80%] flex pl-[40px] items-center`}
          >
            <p
              className={` tracking-[8px] text-[12px] ${style.text_creator} cursor-default`}
              style={{ fontFamily: "Caviar" }}
            >
              CREATOR <br /> KUBA
            </p>
          </div>
        </div>
        <div className="w-[55%] h-full flex flex-row justify-evenly items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <Link
              href="/#work"
              className={`${style.nav_text} tracking-[2px] text-[14px] text-underline`}
              style={{ fontFamily: "Ubuntu" }}
            >
              WORKS
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <Link
              href="/#skill"
              className={`${style.nav_text} tracking-[2px] text-[14px] text-underline`}
              style={{ fontFamily: "Ubuntu" }}
            >
              SKILLS
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
          >
            <Link
              href="/#relax"
              className={`${style.nav_text}  tracking-[2px] text-[14px] text-underline`}
              style={{ fontFamily: "Ubuntu" }}
            >
              RELAX
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5 }}
          >
            <Link
              href="/"
              className={`${style.nav_text}  tracking-[2px] text-[14px] text-underline`}
              style={{ fontFamily: "Ubuntu" }}
            >
              CONTACT
            </Link>
          </motion.div>
        </div>
        <motion.div
          initial={{ x: 400 }}
          animate={{ x: 0 }}
          transition={{ delay: 3, duration: 0.6, type: "spring" }}
          className="w-[25%] h-full flex justify-center items-center"
        >
          <div
            className={`${style.theme_button} w-[180px] h-[50px] border-[2px]  rounded-[8px] flex justify-center items-center  text-[18px]   cursor-pointer`}
            onClick={handleActive}
          >
            <p style={{ fontFamily: "Gilroy" }}>THEME</p>
          </div>
        </motion.div>
      </motion.div>
      {isActive && <Theme />}
    </main>
  );
}
