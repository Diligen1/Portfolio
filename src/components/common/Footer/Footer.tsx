"use client";
import { motion } from "framer-motion";
import Link from "next/link";
export default function Footer() {
  return (
    <main className="mx-auto">
      <div className="bg-[var(--second-color)] w-full h-[250px] relative flex flex-row items-end justify-around">
        <div className="absolute rounded-[16px] top-[-110px] w-[80%] h-[220px] border-[20px] bg-[var(--second-color)] border-[var(--background-fon)] left-[50%] translate-x-[-50%]"></div>
        <div className="flex flex-row justify-center items-center pb-[40px]">
          <div className="w-[60px] h-[60px] flex justify-center items-center bg-[var(--text-color)] rounded-[8px] text-[var(--background-fon)] text-[32px]">
            CK
          </div>
          <p className="text-[var(--text-color)] pl-[20px] tracking-[8px]">
            CREATOR <br /> KUBA
          </p>
        </div>
        <div className="w-[70%] pb-[60px] flex flex-row justify-evenly items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <Link
              href="/#work"
              className={` text-[var(--text-color)] tracking-[2px] text-[14px] text-underline`}
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
              className={`text-[var(--text-color)]  tracking-[2px] text-[14px] text-underline`}
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
              className={`text-[var(--text-color)]   tracking-[2px] text-[14px] text-underline`}
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
              className={`text-[var(--text-color)]   tracking-[2px] text-[14px] text-underline`}
              style={{ fontFamily: "Ubuntu" }}
            >
              CONTACT
            </Link>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
