"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import Theme from "../Theme/Theme";

export default function Header() {
  const [isActive, setIsActive] = useState(false);

  function handleActive() {
    setIsActive(!isActive);
  }

  return (
    <main className="mx-auto flex justify-center sm:justify-start pl-0 sm:pl-[40px] md:pl-0 md:justify-center pt-[20px] relative">
      <motion.div
        initial={{ y: -300, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
        }}
        className={`bg-[var(--background-fon)] border-[var(--border-color)]  md:w-[80%] h-[70px] md:h-[80px] lg:h-[100px] rounded-[6px] flex flex-row sm:border-[2px] overflow-hidden justify-between`}
      >
        <div className="relative w-[200px] md:-[250px] lg:w-[25%] h-full flex flex-row gap-[8px]">
          <div
            className={` bg-[var(--third-color)] w-[40px] md:w-[80px] lg:w-[20%] `}
          ></div>
          <div
            className={`cursor-pointer absolute left-[14px] md:left-[10%] hover:left-[6%] bg-[var(--background-fon)] text-[var(--text-color)] hover:text-[var(--background-fon)] hover:bg-[var(--text-color)]
          top-[10px] md:top-[12px] lg:top-[25%] w-[40px] h-[40px] md:w-[50px] md:h-[50px] flex justify-center items-center rounded-[6px] duration-300 hover:w-[70px] `}
          >
            <p className={`text-[16px] md:text-[24px]`}>CK</p>
          </div>
          <div
            className={` bg-[var(--text-color)] w-[200px] md:w-[250px] lg:w-[80%] flex pl-[25px] md:pl-[30px] lg:pl-[40px] items-center duration-300`}
          >
            <p
              className={` tracking-[3px] lg:tracking-[8px] text-[12px] text-[var(--background-fon)] duration-300 cursor-default`}
            >
              CREATOR <br /> KUBA
            </p>
          </div>
        </div>
        <div className="md:w-[45%] lg:w-[55%] h-full hidden md:flex flex-row justify-evenly items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <Link
              href="/#work"
              className={` text-[var(--text-color)] duration-300 hover:text-[var(--third-color)] tracking-[2px] text-[12px] lg:text-[14px] text-underline`}
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
              className={`  text-[var(--text-color)] duration-300 hover:text-[var(--third-color)] tracking-[2px] text-[12px] lg:text-[14px] text-underline`}
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
              className={` text-[var(--text-color)] duration-300 hover:text-[var(--third-color)]  tracking-[2px] text-[12px] lg:text-[14px] text-underline`}
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
              className={` text-[var(--text-color)] duration-300 hover:text-[var(--third-color)]  tracking-[2px] text-[12px] lg:text-[14px] text-underline`}
            >
              CONTACT
            </Link>
          </motion.div>
        </div>
        <motion.div
          initial={{ x: 400 }}
          animate={{ x: 0 }}
          transition={{ delay: 3, duration: 0.6, type: "spring" }}
          className="w-[140px] md:w-[160px] pr-0 md:pr-[40px] lg:w-[25%] h-full flex justify-center items-center"
        >
          <div
            className={` hover:text-[var(--background-fon)] hover:bg-[var(--text-color)] hover:border-[var(--third-color)] duration-300 text-[var(--text-color)] border-[var(--border-color)] bg-[var(--background-fon)] w-[100px] md:w-[140px] lg:w-[180px] h-[50px] border-[2px] rounded-[8px] flex justify-center items-center text-[14px] md:text-[16px] lg:text-[18px] cursor-pointer`}
            onClick={handleActive}
          >
            <p>THEME</p>
          </div>
        </motion.div>
      </motion.div>
      {isActive && <Theme />}
    </main>
  );
}
